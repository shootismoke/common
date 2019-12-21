import { convert, getMetadata, isPollutant } from '@shootismoke/convert';

import { Normalized } from '../../types';
import { ByStation } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalizeByGps({ d: [data] }: ByStation): Normalized {
  const universalId = `waqi|${data.x}`;

  if (!isPollutant(data.pol)) {
    throw new Error(
      `Cannot normalizeByGps station ${universalId}: ${JSON.stringify(data)}`
    );
  }

  const aqiUS = +data.v;
  // Calculate pm25 raw value to get cigarettes value
  const raw = convert('pm25', 'usaEpa', 'raw', aqiUS);

  return [
    {
      attribution: undefined,
      averagingPeriod: {
        unit: 'day',
        value: 1
      },
      coordinates: {
        latitude: data.geo[0],
        longitude: data.geo[1]
      },
      country: data.u,
      city: data.nlo,
      date: {
        local: new Date(data.t).toISOString(),
        utc: new Date(data.t).toUTCString() // Not 100% sure this is correct
      },
      location: `waqi|${data.x}`,
      mobile: false,
      parameter: data.pol,
      sourceName: 'waqi',
      sourceType: 'other',
      unit: getMetadata(data.pol).preferredUnit,
      value: raw
    }
  ];
}
