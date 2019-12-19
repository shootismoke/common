import * as aqiCodes from './aqi';

/**
 * An interface to represent an AQI
 */
export interface Aqi<P> {
  displayName: string;
  fromRaw(raw: number, pollutant: P): number;
  pollutants: P[];
  range(pollutant: P): [number, number];
  toRaw(value: number, pollutant: P): number;
}

/**
 * List of AQI codes
 */
export type AqiCode = keyof typeof aqiCodes;
