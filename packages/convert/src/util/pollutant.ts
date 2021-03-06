import openaq from './openaq.json';

/**
 * Parts per billion.
 */
export const ppb = 'ppb';
/**
 * Parts per million.
 */
export const ppm = 'ppm';
/**
 * Microgram per cubic meter.
 */
export const ugm3 = 'µg/m³';
/**
 * Particles per cubic centermeter.
 */
export const ppcm3 = 'particles/cm³';

/**
 * Array of pollutant concentration units.
 */
export const AllUnits = [ppb, ppm, ugm3, ppcm3];

/**
 * Pollutant concentration units.
 */
export type Unit = typeof ppb | typeof ppm | typeof ugm3 | typeof ppcm3;

/**
 * All the pollutants tracked by @shootismoke.
 */
export type Pollutant =
	| 'bc'
	| 'ch4'
	| 'co'
	| 'c6h6'
	| 'ox'
	| 'nh3'
	| 'nmhc'
	| 'no'
	| 'nox'
	| 'no2'
	| 'o3'
	| 'pm1'
	| 'pm10'
	| 'pm25'
	| 'so2'
	| 'trs'
	| 'ufp'
	| 'um010'
	| 'um025'
	| 'um100';

/**
 * Metadata for each pollutant.
 */
export interface PollutantMeta {
	name: Pollutant;
	displayName: string;
	description: string;
	preferredUnit: Unit;
	isCore: boolean;
	maxColorValue: number | null;
}

/**
 * All the pollutants tracked by @shootismoke.
 *
 * @ignore
 */
const Pollutants = {
	...openaq,
	c6h6: {
		name: 'c6h6',
		displayName: 'C6H6',
		description: 'Benzene',
		preferredUnit: ugm3,
		isCore: false,
		maxColorValue: null,
	},
	ox: {
		name: 'ox',
		displayName: 'Ox',
		description: 'Photochemical oxidants',
		preferredUnit: ppb,
		isCore: false,
		maxColorValue: null,
	},
	nh3: {
		name: 'nh3',
		displayName: 'NH3',
		description: 'Ammonia',
		preferredUnit: ppb,
		isCore: false,
		maxColorValue: null,
	},
	nmhc: {
		name: 'nmhc',
		displayName: 'NMHC',
		description: 'Non-methane hydrocarbons',
		preferredUnit: ppb,
		isCore: false,
		maxColorValue: null,
	},
	trs: {
		name: 'trs',
		displayName: 'TRS',
		description: 'Total reduced sulfur',
		preferredUnit: ugm3,
		isCore: false,
		maxColorValue: null,
	},
} as Record<Pollutant, PollutantMeta>;

/**
 * Array of all pollutants tracked by @shootismoke. This list is fetched from:
 * https://docs.openaq.org/v2/parameters
 */
export const AllPollutants = Object.keys(Pollutants) as Pollutant[];

/**
 * Get metadata (code, name, description, unit) for a pollutant. This list is fetched from:
 * https://docs.openaq.org/v2/parameters
 *
 * @param pollutant - The pollutant to get the metadata from.
 */
export function getPollutantMeta(pollutant: Pollutant): PollutantMeta {
	return Pollutants[pollutant];
}

/**
 * Check if the input pollutant is a recognized pollutant which we can convert
 * AQI to/from concentrations. This list is fetched from:
 * https://docs.openaq.org/v2/parameters
 *
 * @param pollutant - The pollutant to test.
 */
export function isPollutant(pollutant: string): pollutant is Pollutant {
	return AllPollutants.includes(pollutant as Pollutant);
}
