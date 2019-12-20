import * as aqiCodes from './aqi';
import { Pollutant } from './util';

/**
 * An interface to represent an AQI
 */
export interface Aqi {
  displayName: string;
  fromRaw(raw: number, pollutant: Pollutant): number;
  pollutants: Pollutant[];
  range(pollutant: Pollutant): [number, number];
  toRaw(value: number, pollutant: Pollutant): number;
}

/**
 * List of AQI codes
 */
export type AqiCode = keyof typeof aqiCodes;
