import { OpenAQResults } from '../../types';
import { providerError } from '../../util';
import { OpenAQMeasurements } from './types';

/**
 * Normalize aqicn byGps data
 *
 * @param data - The data to normalize
 */
export async function normalize(
	data: OpenAQMeasurements
): Promise<OpenAQResults> {
	const { results } = data;

	if (!results.length) {
		throw providerError('openaq', 'Cannot normalize, got 0 result');
	}

	return results.map((result) => ({
		...result,
		location: `openaq|${result.location}`,
	})) as OpenAQResults;
}
