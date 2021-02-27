import * as E from 'fp-ts/lib/Either';

import { OpenAQResults } from '../../types';
import { providerError } from '../../util';
import { OpenAQMeasurements } from './validation';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export function normalize(
	data: OpenAQMeasurements
): E.Either<Error, OpenAQResults> {
	const { results } = data;

	if (!results.length) {
		return E.left(
			providerError('openaq', 'Cannot normalize, got 0 result')
		);
	}

	return E.right(
		results.map((result) => ({
			...result,
			location: `openaq|${result.location}`,
		})) as OpenAQResults
	);
}
