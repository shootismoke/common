import { Pollutant } from './pollutant';

export const ppb = 'ppb';
export const ppm = 'ppm';
export const ugm3 = 'µg/m³';

export type Unit = typeof ppb | typeof ppm | typeof ugm3;

const POLLUTANT_UNITS: Record<Pollutant, Unit> = {
  co: 'ppm',
  no2: 'ppb',
  o3: 'ppm',
  pm10: 'µg/m³',
  pm25: 'µg/m³',
  so2: 'ppb'
};

/**
 * Get the unit of the raw concentration of a pollutant
 *
 * @param pollutant - The pollutant to get the unit from
 */
export function getUnit(pollutant: Pollutant): Unit {
  return POLLUTANT_UNITS[pollutant];
}
