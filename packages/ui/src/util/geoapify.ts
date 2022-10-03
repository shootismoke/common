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

import { LatLng } from '@shootismoke/dataproviders';
import axios from 'axios';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
import * as t from 'io-ts';
import { failure } from 'io-ts/lib/PathReporter';

import { promiseToTE, retry } from './fp';

/**
 * For docs, see https://apidocs.geoapify.com/playground/geocoding and
 * and https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/#about
 */
function getEndpoint(search: string, apiKey: string, gps?: LatLng): string {
	const base = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
		search
	)}&limit=1&format=json&apiKey=${apiKey}`;

	if (gps) {
		return base + `&bias=proximity:${gps.longitude},${gps.latitude}`;
	}

	return base;
}

const GeoapifyResT = t.exact(
	t.intersection([
		t.type({
			lat: t.number,
			lon: t.number,
			formatted: t.string,
		}),
		t.partial({
			city: t.string,
			country: t.string,
			state: t.string,
		}),
	])
);

export type GeoapifyRes = t.TypeOf<typeof GeoapifyResT>;

const AxiosResponseT = t.partial({
	data: t.type({
		results: t.array(GeoapifyResT),
	}),
});

export function geoapify(
	search: string,
	apiKey: string,
	gps?: LatLng
): TE.TaskEither<Error, GeoapifyRes[]> {
	return retry(
		() =>
			pipe(
				promiseToTE(() =>
					axios.get(getEndpoint(search, apiKey, gps), {
						timeout: 10000,
					})
				),
				TE.chain((response) =>
					T.of(
						pipe(
							AxiosResponseT.decode(response),
							E.mapLeft(failure),
							E.mapLeft((errs) => errs[0]), // Only show 1st error
							E.mapLeft(Error)
						)
					)
				),
				TE.chain((response) =>
					response.data?.results
						? TE.right(response.data.results)
						: TE.left(new Error('No data returned by geoapify'))
				)
			),
		{
			retries: 2,
		}
	);
}
