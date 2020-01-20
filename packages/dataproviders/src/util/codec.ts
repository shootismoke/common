/**
 * @ignore
 */ /** */

import axios from 'axios';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import { Type } from 'io-ts';
import { failure } from 'io-ts/lib/PathReporter';

import { promiseToTE } from './fp';

/**
 * Decode, and return an Error on failure
 *
 * @param codec - Codec used to decode
 */
function decodeWith<A, O, I>(
  codec: Type<A, O, I>
): (response: I) => TE.TaskEither<Error, A> {
  return (response: I): TE.TaskEither<Error, A> =>
    TE.fromEither(
      pipe(
        codec.decode(response),
        E.mapLeft(errors => new Error(failure(errors).join('\n')))
      )
    );
}

/**
 * Fetch with axios from URL, and decode using io-ts
 *
 * @param url - The URL to fetch from
 * @param codec = The io-ts codec used for decoding
 */
export function fetchAndDecode<A, O, I>(
  url: string,
  codec: Type<A, O, I>
): TE.TaskEither<Error, A> {
  return pipe(
    promiseToTE(() => axios.get(url).then(({ data }) => data)),
    TE.chain(decodeWith(codec))
  );
}
