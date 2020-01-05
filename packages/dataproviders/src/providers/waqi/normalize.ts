import {
  convert,
  getMetadata,
  isPollutant,
  Pollutant
} from '@shootismoke/convert';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

import { Normalized } from '../../types';
import { getCountryCode } from '../../util';
import { ByStation } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize({
  d: [data]
}: ByStation): E.Either<Error, Normalized> {
  const stationId = `waqi|${data.x}`;

  if (!isPollutant(data.pol)) {
    return E.left(
      new Error(
        `Cannot normalize station ${stationId}, unrecognized pollutant ${
        data.pol
        }: ${JSON.stringify(data)}`
      )
    );
  }

  const aqiUS = +data.v;
  // Calculate pm25 raw value to get cigarettes value
  const raw = convert('pm25', 'usaEpa', 'raw', aqiUS);

  if (!data.u.includes('/')) {
    return E.left(
      new Error(`Got invalid country/city info: ${JSON.stringify(data.u)}`)
    );
  }
  const [countryRaw, city] = data.u.split('/');

  return pipe(
    getCountryCode(countryRaw),
    E.fromOption(() => new Error(`Cannot get code from country ${countryRaw}`)),
    E.map(country => [
      {
        attribution: [{ name: data.nlo }],
        averagingPeriod: {
          unit: 'day',
          value: 1
        },
        coordinates: {
          latitude: data.geo[0],
          longitude: data.geo[1]
        },
        country,
        city,
        date: {
          local: new Date(+data.t * 1000).toISOString(),
          utc: new Date(+data.t * 1000).toUTCString() // Not 100% sure this is correct
        },
        location: `waqi|${data.x}`,
        mobile: false,
        parameter: data.pol as Pollutant,
        sourceName: 'waqi',
        sourceType: 'other',
        unit: getMetadata(data.pol as Pollutant).preferredUnit,
        value: raw
      }
    ])
  );
}
