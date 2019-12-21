import { convert, getMetadata, Pollutant, usaEpa } from '@shootismoke/convert';

import { Normalized } from '../../types';
import { ByStation } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize(data: ByStation): Normalized {
  const universalId = `waqi|${data.idx}`;

  return (
    Object.entries(data.iaqi || {})
      // Since AqiCN uses useEpa as AQI for the pollutants, we can only
      // normalize data for those pollutants
      .filter(([pol]) => usaEpa.pollutants.includes(pol as Pollutant))
      .map(([pol, { v }]) => {
        const pollutant = pol as Pollutant;

        // Sometimes we don't get geo
        if (!data.city.geo) {
          throw new Error(
            `Cannot normalize station ${universalId}: ${JSON.stringify(data)}`
          );
        }

        return {
          attribution: data.attributions,
          averagingPeriod: {
            unit: 'day',
            value: 1
          },
          city:
            data.city.name ||
            'unknown (Please create a Github issue https://github.com/shootismoke/common/issues/new)', // FIXME
          coordinates: {
            latitude: +data.city.geo[0],
            longitude: +data.city.geo[1]
          },
          country:
            'unknown (TODO create github issue https://github.com/shootismoke/common/issues/new)', // FIXME
          date: {
            local: new Date(data.time.v).toISOString(),
            utc: new Date(data.time.v).toUTCString() // Not 100% sure this is correct
          },
          location: universalId,
          mobile: false,
          parameter: data.dominentpol as Pollutant,
          sourceName: 'aqicn',
          sourceType: 'other',
          value: convert(pollutant, 'usaEpa', 'raw', v),
          unit: getMetadata(pollutant).preferredUnit
        };
      })
  );
}
