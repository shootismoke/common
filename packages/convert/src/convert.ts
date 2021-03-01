import * as aqiCodes from './aqi';
import { AqiCode } from './types';
import { Pollutant, ugm3 } from './util';

/**
 * For any pollutant, convert an AQI to its ugm3 concentration, or vice versa,
 * or convert an AQI to another AQI
 *
 * @param pollutant - The pollutant to convert
 * @param from - The type to convert from (either ugm3, or an AQI)
 * @param to - The type to convert to (either ugm3, or an AQI)
 * @param value - The value to convert
 */
export function convert(
	pollutant: Pollutant,
	from: AqiCode | 'µg/m³' | 'ppm' | 'ppb',
	to: AqiCode | 'µg/m³' | 'ppm' | 'ppb',
	value: number
): number {
	if (from === 'ppb' || from === 'ppm' || to === 'ppb' || to === 'ppm') {
		throw new Error(`Conversion from ${from} to ${to} not supported yet.`);
	}

	if (from === to) {
		return value;
	}

	// Convert ugm3 to AQI
	if (from === ugm3) {
		return aqiCodes[to as AqiCode].fromUgm3(pollutant, value);
	}

	// Convert AQI to ugm3
	if (to === ugm3) {
		return aqiCodes[from].toUgm3(pollutant, value);
	}

	// Convert AQI to AQI
	const ugm3Value = aqiCodes[from].toUgm3(pollutant, value);
	return aqiCodes[to].fromUgm3(pollutant, ugm3Value);
}
