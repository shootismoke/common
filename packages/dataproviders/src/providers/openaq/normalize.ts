import * as E from 'fp-ts/lib/Either';

import { Normalized } from '../../types';
import { OpenAQResponse } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize(data: OpenAQResponse): E.Either<Error, Normalized> {
  const { results } = data;

  if (!results.length) {
    return E.left(
      new Error(`Cannot normalize openaq: ${JSON.stringify(data)}`)
    );
  }

  return E.right(
    results.map(result => ({
      ...result,
      location: `openaq|${result.location}`
    })) as Normalized
  );
}
