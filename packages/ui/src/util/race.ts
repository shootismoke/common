// Sh**t! I Smoke
// Copyright (C) 2018-2020  Marcelo S. Coelho, Amaury Martiny

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

import {
	LatLng,
	Normalized,
	ProviderPromise,
} from '@shootismoke/dataproviders';
import { aqicn, openaq } from '@shootismoke/dataproviders/lib/promise';
import promiseAny, { AggregateError } from 'p-any';

import { Api } from './api';
import { pm25ToCigarettes } from './secretSauce';

/**
 * Given some normalized data points, filter out the first one that contains
 * pm25 data. Returns a TaskEither left is none is found, or format the data
 * into the Api interface.
 *
 * @param normalized - The normalized data to process
 */
function filterPm25(normalized: Normalized): Api {
	const pm25 = normalized.filter(({ parameter }) => parameter === 'pm25');

	if (pm25.length) {
		return {
			normalized,
			pm25: pm25[0],
			shootismoke: {
				dailyCigarettes: pm25ToCigarettes(pm25[0].value),
			},
		};
	} else {
		throw new Error(
			`Station ${normalized[0].location} does not have PM2.5 measurings right now`
		);
	}
}

/**
 * Options to be passed into the {@link raceApiPromise} function.
 */
interface RaceApiOptions {
	/**
	 * The token for fetching aqicn data.
	 */
	aqicnToken: string;
}

/**
 * Fetch data parallely from difference data sources, and return the first
 * response.
 *
 * @param gps - The GPS coordinates to fetch data for
 */
export function raceApiPromise(
	gps: LatLng,
	options: RaceApiOptions
): Promise<Api> {
	// Helper function to fetch & normalize data for 1 provider
	async function fetchForProvider<DataByGps, DataByStation, Options>(
		provider: ProviderPromise<DataByGps, DataByStation, Options>,
		options?: Options
	): Promise<Api> {
		const data = await provider.fetchByGps(gps, options);
		const normalized = provider.normalizeByGps(data);
		console.log(
			`<ApiContext> Got data from ${provider.id}: ${JSON.stringify(
				normalized
			)}`
		);

		return filterPm25(normalized);
	}

	// Run these tasks parallely
	const tasks = [
		fetchForProvider(aqicn, {
			token: options.aqicnToken,
		}),
		fetchForProvider(openaq, {
			limit: 1,
			parameter: ['pm25'],
		}),
	];

	return promiseAny(tasks).catch((errors: AggregateError) => {
		// Transform an AggregateError into a JS native Error
		const aggregateMessage = [...errors]
			.map(({ message }, index) => `${index + 1}. ${message}`)
			.join('. ');

		throw new Error(aggregateMessage);
	});
}
