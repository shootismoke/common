import * as aqiCodes from '../aqi';
import { AqiCode } from '../types';

/**
 * All the pollutants tracked by @shootismoke
 */
export type Pollutant =
  | 'co'
  | 'c6h6'
  | 'ox'
  | 'nh3'
  | 'nmhc'
  | 'no'
  | 'nox'
  | 'no2'
  | 'o3'
  | 'pm10'
  | 'pm25'
  | 'so2'
  | 'trs';

// Pollutant concentration units
export const ppb = 'ppb';
export const ppm = 'ppm';
export const ugm3 = 'µg/m³';

export type Unit = typeof ppb | typeof ppm | typeof ugm3;

/**
 * Metadata for each pollutant
 */
export interface PollutantMeta {
  code: Pollutant;
  displayName: string;
  fullName: string;
  unit: Unit;
}

/**
 * All the pollutants tracked by @shootismoke
 */
export const AllPollutants: Record<Pollutant, PollutantMeta> = {
  co: {
    code: 'co',
    displayName: 'CO',
    fullName: 'Carbon monoxide',
    unit: ppb
  },
  c6h6: {
    code: 'c6h6',
    displayName: 'C6H6',
    fullName: 'Benzene',
    unit: ugm3
  },
  ox: {
    code: 'ox',
    displayName: 'Ox',
    fullName: 'Photochemical oxidants',
    unit: ppb
  },
  o3: {
    code: 'o3',
    displayName: 'O3',
    fullName: 'Ozone',
    unit: ppb
  },
  nh3: {
    code: 'nh3',
    displayName: 'NH3',
    fullName: 'Ammonia',
    unit: ppb
  },
  nmhc: {
    code: 'nmhc',
    displayName: 'NMHC',
    fullName: 'Non-methane hydrocarbons',
    unit: ppb
  },
  no: {
    code: 'no',
    displayName: 'NO',
    fullName: 'Nitrogen monoxide',
    unit: ppb
  },
  nox: {
    code: 'nox',
    displayName: 'NOx',
    fullName: 'Nitrogen oxides',
    unit: ppb
  },
  no2: {
    code: 'no2',
    displayName: 'NO2',
    fullName: 'Nitrogen dioxide',
    unit: ppb
  },
  pm25: {
    code: 'pm25',
    displayName: 'PM25',
    fullName: 'Fine particulate matter (<2.5µm)',
    unit: ugm3
  },
  pm10: {
    code: 'pm10',
    displayName: 'PM10',
    fullName: 'Inhalable particulate matter (<10µm)',
    unit: ugm3
  },
  so2: {
    code: 'so2',
    displayName: 'SO2',
    fullName: 'Sulfur dioxide',
    unit: ppb
  },
  trs: {
    code: 'trs',
    displayName: 'TRS',
    fullName: 'Total reduced sulfur',
    unit: ugm3
  }
};

/**
 * Get metadata (code, name, unit) for a pollutant
 *
 * @param pollutant - The pollutant to get the metadata from
 */
export function getMetadata(pollutant: Pollutant): PollutantMeta {
  return AllPollutants[pollutant];
}

/**
 * Check if the input pollutant is a recognized pollutant which we can convert
 * AQI to/from raw concentrations
 *
 * @param pollutant - The pollutant to test
 */
export function isPollutant(pollutant: string): pollutant is Pollutant {
  return Object.keys(AllPollutants).includes(pollutant as Pollutant);
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
      `${aqiCodes[aqiCode].displayName} does not apply to pollutant ${pollutant}`
    );
  }
}
