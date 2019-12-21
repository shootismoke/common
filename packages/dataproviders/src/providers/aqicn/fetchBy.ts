import axios from 'axios';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import { TypeOf } from 'io-ts';

import { LatLng } from '../../types';
import { decodeWith, promiseToTE } from '../../util';
import { ByStation, ByStationCodec } from './validation';

/**
 * Check if the response we get from aqicn is `{"status": "error", "msg": "..."}`,
 * if yes, return an error.
 */
function checkError({
  status,
  data,
  msg
}: TypeOf<typeof ByStationCodec>): TE.TaskEither<Error, ByStation> {
  return status === 'ok'
    ? TE.right(data as ByStation)
    : TE.left(new Error(msg || (data as string)));
}

export interface AqicnOptions {
  /**
   * Aqicn token
   * @see https://aqicn.org/data-platform/token/#/
   */
  token: string;
}

/**
 * Fetch the closest station to the user's current position
 *
 * @param gps - Latitude and longitude of the user's current position
 */
export function fetchByGps(
  gps: LatLng,
  options: AqicnOptions
): TE.TaskEither<Error, ByStation> {
  const { latitude, longitude } = gps;

  return pipe(
    promiseToTE(() =>
      axios
        .get(
          `http://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${options.token}`
        )
        .then(({ data }) => data)
    ),
    TE.chain(decodeWith(ByStationCodec)),
    TE.chain(checkError)
  );
}

/**
 * Fetch data by station
 *
 * @param stationId - The station ID to search
 */
export function fetchByStation(
  stationId: string,
  options: AqicnOptions
): TE.TaskEither<Error, ByStation> {
  return pipe(
    promiseToTE(() =>
      axios
        .get(`https://api.waqi.info/feed/@${stationId}/?token=${options.token}`)
        .then(({ data }) => data)
    ),
    TE.chain(decodeWith(ByStationCodec)),
    TE.chain(checkError)
  );
}
