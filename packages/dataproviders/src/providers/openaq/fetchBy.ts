import axios from 'axios';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';

import { LatLng } from '../../types';
import { ACCURATE_RADIUS, decodeWith, promiseToTE } from '../../util';
import { Measurements, MeasurementsCodec } from './validation';

const RESULT_LIMIT = 10;
const BASE_URL = `https://api.openaq.org/v1/measurements?include_fields=attribution,averagingPeriod,mobile,sourceName,sourceType&limit=${RESULT_LIMIT}`;

/**
 * Fetch the closest station to the user's current position
 *
 * @param gps - Latitude and longitude of the user's current position
 */
export function fetchByGps(gps: LatLng): TE.TaskEither<Error, Measurements> {
  const { latitude, longitude } = gps;

  return pipe(
    promiseToTE(() =>
      axios
        .get(
          `${BASE_URL}&coordinates=${latitude},${longitude}&radius=${ACCURATE_RADIUS}`
        )
        .then(({ data }) => data)
    ),
    TE.chain(decodeWith(MeasurementsCodec))
  );
}

/**
 * Fetch data by station
 *
 * @param stationId - The station ID to search
 */
export function fetchByStation(
  stationId: string
): TE.TaskEither<Error, Measurements> {
  return pipe(
    promiseToTE(() =>
      axios.get(`${BASE_URL}&location=${stationId}`).then(({ data }) => data)
    ),
    TE.chain(decodeWith(MeasurementsCodec))
  );
}
