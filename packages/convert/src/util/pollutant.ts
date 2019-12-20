import * as aqiCodes from '../aqi';
import { AqiCode } from '../types';

/**
 * All the pollutants tracked by @shootismoke
 */
export type Pollutant = 'co' | 'no2' | 'o3' | 'pm10' | 'pm25' | 'so2';

/**
 * All the pollutants tracked by @shootismoke
 */
export const POLLUTANTS: Pollutant[] = [
  'co',
  'no2',
  'o3',
  'pm10',
  'pm25',
  'so2'
];

/**
 * Check if the input pollutant is a recognized pollutant which we can convert
 * AQI to/from raw concentrations
 *
 * @param pollutant - The pollutant to test
 */
export function isPollutant(pollutant: string): pollutant is Pollutant {
  return POLLUTANTS.includes(pollutant as Pollutant);
}

/**
 * Assert that the AQI does indeed track the pollutant
 *
 * @param pollutant
 * @param aqiCode
 */
export function assertTracked<T extends Pollutant>(
  pollutant: Pollutant,
  aqiCode: AqiCode
): asserts pollutant is T {
  if (!aqiCodes[aqiCode].pollutants.includes(pollutant)) {
    throw new Error(
      `${aqiCodes[aqiCode].displayName} does not convert pollutant ${pollutant}`
    );
  }
}
