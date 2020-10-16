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
import { OpenAQOptions } from '@shootismoke/dataproviders/lib/providers/openaq/fetchBy';
import { differenceInHours, subHours } from 'date-fns';
import promiseAny, { AggregateError } from 'p-any';
import debug from 'debug';

import { Api } from './api';
import { pm25ToCigarettes } from './secretSauce';
import { distanceToStation, isStationTooFar } from './station';

const l = debug('shootismoke:ui:race');

/**
 * We show pm25 results within this number of hours. More than this, we
 * consider the results as inaccurate.
 */
const NORMALIZED_WITHIN_HOURS = 6;

/**
 * Given some normalized data points, and the current GPS, construct an API
 * object.
 *
 * @param normalized - The normalized data to process
 */
function createApi(gps: LatLng, normalized: Normalized): Api {
	const now = new Date();
	const pm25 = normalized
		.filter(({ parameter }) => parameter === 'pm25')
		.filter(
			({ date }) =>
				differenceInHours(new Date(date.utc), now) <=
				NORMALIZED_WITHIN_HOURS
		);

	// TODO We can sort the pm25 array by closest to `gps`.

	if (pm25.length) {
		return {
			normalized,
			pm25: pm25[0],
			shootismoke: {
				dailyCigarettes: pm25ToCigarettes(pm25[0].value),
				distanceToStation: distanceToStation(gps, pm25[0]),
				isAccurate: !isStationTooFar(gps, pm25[0]),
			},
		};
	} else {
		throw new Error(
			`Station ${normalized[0].location} does not have PM2.5 measurings right now`
		);
	}
}

/**
 * Helper function to fetch & normalize data for 1 provider.
 */
async function fetchForProvider<DataByGps, DataByStation, Options>(
	gps: LatLng,
	provider: ProviderPromise<DataByGps, DataByStation, Options>,
	options?: Options
): Promise<Normalized> {
	const data = await provider.fetchByGps(gps, options);
	const normalized = provider.normalizeByGps(data);
	l(`Got data from ${provider.id}: ${JSON.stringify(normalized)}`);

	return normalized;
}

/**
 * Options to be passed into the {@link raceApiPromise} function.
 */
interface RaceApiOptions {
	aqicn?: {
		/**
		 * The token for fetching aqicn data.
		 */
		aqicnToken?: string;
	};
	openaq?: OpenAQOptions;
}

/**
 * Fetch data parallely from difference data sources, and return the first
 * response as an {@link Api} format.
 *
 * @param gps - The GPS coordinates to fetch data for
 */
export async function raceApiPromise(
	gps: LatLng,
	options: RaceApiOptions
): Promise<Api> {
	try {
		const now = new Date();

		// Run these tasks parallely
		const tasks = [
			fetchForProvider(gps, aqicn, {
				token: options.aqicn?.aqicnToken,
			}),
			fetchForProvider(gps, openaq, {
				dateFrom: subHours(now, NORMALIZED_WITHIN_HOURS),
				...options.openaq,
			}),
		];

		// Race the 2 tasks, return the first one.
		const firstNormalized = await promiseAny(tasks);

		return createApi(gps, firstNormalized);
	} catch (errors) {
		// Transform an AggregateError into a JS native Error
		const aggregateMessage = [...(errors as AggregateError)]
			.map(({ message }, index) => `${index + 1}. ${message}`)
			.join('. ');

		throw new Error(aggregateMessage);
	}
}
