import {
  AllPollutants,
  convert,
  getMetadata,
  Pollutant
} from '@shootismoke/convert';

import { pm25ToCigarettes } from '../secretSauce';
import { NormalizedByGps, PollutantValue } from '../types';
import { AqicnStation } from './validation';

/**
 * Helper function to compute all the pollutants in the aqicn response, and
 * convert them into normalized format
 */
function computePollutants(
  iaqi: AqicnStation['iaqi'] = {}
): Partial<Record<Pollutant, PollutantValue>> {
  return Object.keys(AllPollutants).reduce((result, pollutant) => {
    const value = iaqi[pollutant as keyof typeof iaqi];
    if (!value) {
      return result;
    }

    const aqiUS = value.v;
    const raw = convert('pm25', 'usaEpa', 'raw', aqiUS);
    const aqiCN = convert('pm25', 'raw', 'chnMep', raw);

    result[pollutant as Pollutant] = {
      // FIXME aqiCN, raw, and unit values are Wrong!!!
      // https://github.com/shootismoke/backend/issues/28
      aqiCN: pollutant === 'pm25' ? aqiCN : aqiUS,
      aqiUS,
      raw: pollutant === 'pm25' ? raw : aqiUS,
      unit: getMetadata(pollutant as Pollutant).unit
    };

    return result;
  }, {} as Partial<Record<Pollutant, PollutantValue>>);
}

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function aqicnNormalizeByGps(data: AqicnStation): NormalizedByGps {
  const universalId = `waqi|${data.idx}`;

  if (!data.city.geo) {
    throw new Error(
      `Cannot normalizeByGps station ${universalId}: ${JSON.stringify(data)}`
    );
  }

  // Calculate pm25 raw value to get cigarettes value
  const pm25AqiUS = data.iaqi && data.iaqi.pm25 && data.iaqi.pm25.v;
  const pm25Raw = pm25AqiUS && convert('pm25', 'usaEpa', 'raw', pm25AqiUS);

  return {
    closestStation: {
      gps: { latitude: +data.city.geo[0], longitude: +data.city.geo[1] },
      name: data.attributions[0].name,
      provider: 'waqi',
      universalId
    },
    dailyCigarettes: pm25Raw && pm25ToCigarettes(pm25Raw),
    dominant: data.dominentpol as Pollutant,
    pollutants: computePollutants(data.iaqi),
    updatedAt: data.time.v
  };
}
