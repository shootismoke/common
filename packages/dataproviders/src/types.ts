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

export interface Provider<DataByGps, DataByStation, Options = {}> {
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

// /**
//  * The concentration of a pollutant, in
//  */
// export interface PollutantValue {
//   aqiCN: number;
//   aqiUS: number;
//   raw: number;
//   unit: Unit;
// }

// // FIXME Use: import { Station } from '@shootismoke/graphql';
// interface Station {
//   gps: LatLng;
//   name: string;
//   provider: Provider;
//   universalId: string;
// }
