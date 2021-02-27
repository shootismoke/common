import * as E from 'fp-ts/lib/Either';
import * as TE from 'fp-ts/lib/TaskEither';

import type { LatLng, OpenAQResults } from '../types';

/**
 * An interface representing an air quality data provider (fp-ts version).
 */
export interface ProviderFP<DataByGps, DataByStation, Options> {
	fetchByGps(gps: LatLng, options?: Options): TE.TaskEither<Error, DataByGps>;
	fetchByStation(
		stationId: string,
		options?: Options
	): TE.TaskEither<Error, DataByStation>;
	id: string;
	name: string;
	normalizeByGps(d: DataByGps): E.Either<Error, OpenAQResults>;
	normalizeByStation(d: DataByStation): E.Either<Error, OpenAQResults>;
}
