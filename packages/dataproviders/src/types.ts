import * as TE from 'fp-ts/lib/TaskEither';

import { OpenAQ } from './util';

/**
 * Latitude and longitude object
 */
export interface LatLng {
  latitude: number;
  longitude: number;
}

/**
 * Normalized response from all data providers
 */
export type Normalized = OpenAQ[];

/**
 * An interface representing an air quality data provider (fp-ts version)
 */
export interface Provider<DataByGps, DataByStation, Options> {
  fetchByGps(gps: LatLng, options?: Options): TE.TaskEither<Error, DataByGps>;
  fetchByStation(
    stationId: string,
    options?: Options
  ): TE.TaskEither<Error, DataByStation>;
  id: string;
  name: string;
  normalizeByGps(d: DataByGps): Normalized;
  normalizeByStation(d: DataByStation): Normalized;
}

/**
 * An interface representing an air quality data provider (Promise version)
 */
export interface ProviderPromise<DataByGps, DataByStation, Options> {
  fetchByGps(gps: LatLng, options?: Options): Promise<DataByGps>;
  fetchByStation(stationId: string, options?: Options): Promise<DataByStation>;
  id: string;
  name: string;
  normalizeByGps(d: DataByGps): Normalized;
  normalizeByStation(d: DataByStation): Normalized;
}
