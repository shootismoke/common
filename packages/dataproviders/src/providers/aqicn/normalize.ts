import { convert, getMetadata, Pollutant, usaEpa } from '@shootismoke/convert';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

import { Normalized } from '../../types';
import { getCountryCode, providerError } from '../../util';
import sanitized from './sanitized.json';
import { ByStation } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize(data: ByStation): E.Either<Error, Normalized> {
  const stationId = `waqi|${data.idx}`;

  // Sometimes we don't get geo
  if (!data.city.geo) {
    return E.left(
      providerError(
        'aqicn',
        `Cannot normalize station ${stationId}, no city: ${JSON.stringify(
          data
        )}`
      )
    );
  }

  // Since AqiCN uses useEpa as AQI for the pollutants, we can only
  // normalize data for those pollutants
  const pollutants = Object.entries(data.iaqi || {}).filter(([pol]) =>
    usaEpa.pollutants.includes(pol as Pollutant)
  );
  if (!pollutants.length) {
    return E.left(
      providerError(
        'aqicn',
        `Cannot normalize station ${stationId}, no pollutants currently tracked: ${JSON.stringify(
          data
        )}`
      )
    );
  }
  // We now need to get the country from AQICN response. The only place I found
  // is city.url...
  // Example: http://aqicn.org/city/france/lorraine/thionville-nord/garche/
  const URL_START = 'https://aqicn.org/city/';
  if (!data.city.url || !data.city.url.startsWith(URL_START)) {
    return E.left(
      providerError(
        'aqicn',
        `Cannot extract country, got city.url: ${data.city.url}`
      )
    );
  }
  let [countryRaw] = data.city.url.slice(URL_START.length).split('/');
  // Sanitize the country we get here from aqicn. For example, for China, the
  // string after 'https://aqicn.org/city/' is not 'china', but directly the
  // Chinese privince, e.g. 'jiangsu'. In this case, we map directly to China.
  // See sanitized.json for some other sanitazations, these are empirical, so
  // we add them as we discover them
  if (sanitized[countryRaw as keyof typeof sanitized]) {
    countryRaw = sanitized[countryRaw as keyof typeof sanitized];
  }

  // FIXME The above castings seems hacky, should we just use an external
  // service to get country from lat/lng?

  return pipe(
    getCountryCode(countryRaw),
    E.fromOption(() =>
      providerError('aqicn', `Cannot get code from country ${countryRaw}`)
    ),
    E.map(
      country =>
        pollutants.map(([pol, { v }]) => {
          const pollutant = pol as Pollutant;

          if (!data.city.geo) {
            throw new Error(
              'We returned TE.left if data.city.geo was not defined. qed.'
            );
          }

          return {
            attribution: data.attributions,
            averagingPeriod: {
              unit: 'day',
              value: 1
            },
            city: data.city.name || 'Unknown city', // FIXME Don't put "unknown" here
            coordinates: {
              latitude: +data.city.geo[0],
              longitude: +data.city.geo[1]
            },
            country,
            date: {
              local: new Date(+data.time.v * 1000).toISOString(),
              utc: new Date(+data.time.v * 1000).toUTCString() // FIXME Not 100% sure this is correct
            },
            location: stationId,
            mobile: false,
            parameter: data.dominentpol as Pollutant,
            sourceName: 'aqicn',
            sourceType: 'other',
            value: convert(pollutant, 'usaEpa', 'raw', v),
            unit: getMetadata(pollutant).preferredUnit
          };
        }) as Normalized
    )
  );
}
