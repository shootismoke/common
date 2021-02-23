// Sh**t! I Smoke
// Copyright (C) 2018-2021  Marcelo S. Coelho, Amaury M.

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import { convert, Pollutant } from '@shootismoke/convert';
import { Normalized, OpenAQFormat } from '@shootismoke/dataproviders';

type PollutantData = { effects: string; name: string };

/**
 * Definitions and effects of various pollutants.
 *
 * @see https://www.sciencedirect.com/topics/chemistry/air-pollutant
 */
const pollutantData: Partial<Record<Pollutant, PollutantData>> = {
	bc: {
		effects:
			'Black carbon is a potent climate-warming component of particulate matter formed by the incomplete combustion of fossil fuels, wood and other fuels.',
		name: 'Black Carbon',
	},
	c6h6: {
		effects:
			'Hydrocarbons are the primary pollutants that produce photochemical smog.',
		name: 'Hydrocarbons',
	},
	// FIXME Add ch4
	// ch4: {
	// 	effects: 'Partly responsible for the atmospheric greenhouse effect.',
	// 	name: 'Methane',
	// },
	co: {
		effects:
			'Carbon monoxide reduces the oxygen-carrying capacity of the blood by combining with haemoglobin, thus deprives tissues of O2.',
		name: 'Carbon monoxide',
	},
	// FIXME Add co2
	// co2: {
	// 	effects: 'Partly responsible for the atmospheric greenhouse effect',
	// },
	no: {
		effects:
			'Nitrogen oxides cause eye, throat, and lung irritation. Primary pollutants that produce photochemical smog and acid rain, destroy ozone at the stratosphere.',
		name: 'Nitrogen oxides',
	},
	no2: {
		effects:
			'Nitrogen oxides cause eye, throat, and lung irritation. Primary pollutants that produce photochemical smog and acid rain, destroy ozone at the stratosphere.',
		name: 'Nitrogen oxides',
	},
	o3: {
		effects:
			'Ozone causes eye, throat, and lung irritation, impairs lung function.',
		name: 'Ozone',
	},
	pm10: {
		effects:
			'Particulate matters under 10μm (PM10), may cause breathing difficulties.',
		name: 'Particulates',
	},
	pm25: {
		effects:
			'Particulate matters under 2.5μm (PM2.5), may cause breathing difficulties.',
		name: 'Particulates',
	},
	so2: {
		effects:
			'Sulfur dioxide causes eye, throat, and lung irritation. Primary pollutants that produce acid rain.',
		name: 'Sulfur dioxide',
	},
};

/**
 * Get metadata about a pollutant.
 *
 * @param pollutant - The pollutant to get the data.
 */
export function getPollutantData(pollutant: Pollutant): PollutantData {
	const polData = pollutantData[pollutant];

	if (!polData) {
		throw new Error('All pollutants are in pollutantData. qed.');
	}

	return polData;
}

/**
 * From a set of normalized pollutant data, filter only the ones that can be
 * converted to USA EPA, and sort the set.
 *
 * @param normalized - The normalized data for all pollutants.
 */
function getSortedNormalized(normalized: Normalized): OpenAQFormat[] {
	// We attempt to sort the pollutants by AQI.
	const unsorted = normalized.filter(({ parameter }) =>
		// Only these pollutants can be converted to usaEpa
		['o3', 'pm10', 'pm25', 'co', 'so2', 'no2'].includes(parameter)
	);

	// Sort the array by AQI.
	unsorted.sort(
		(a, b) =>
			convert(b.parameter, 'ugm3', 'usaEpa', b.value) -
			convert(a.parameter, 'ugm3', 'usaEpa', a.value)
	);

	return unsorted;
}

/**
 * From a set of normalized pollutant data, get the AQI, that is, the AQI of
 * the primary pollutant.
 *
 * @param normalized - The normalized data for all pollutants.
 */
export function getAQI(normalized: Normalized): number {
	const sorted = getSortedNormalized(normalized);

	if (sorted[0]) {
		return convert(sorted[0].parameter, 'ugm3', 'usaEpa', sorted[0].value);
	} else {
		// If the `unsorted` array doesn't contain any pollutants, then we just
		// fallback to taking the 1st element's value. This is often not even
		// an AQI. FIXME.
		return normalized[0].value;
	}
}

/**
 * From a set of normalized pollutant data, find the primary pollutant.
 *
 * @param normalized - The normalized data for all pollutants.
 */
export function primaryPollutant(normalized: Normalized): OpenAQFormat {
	const sorted = getSortedNormalized(normalized);

	if (sorted[0]) {
		return sorted[0];
	} else {
		// If the `unsorted` array doesn't contain any pollutants, then we just
		// fallback to taking the 1st element. Most of the case, the 1st
		// element is of course not the primary pollutant though. FIXME.
		return normalized[0];
	}
}
