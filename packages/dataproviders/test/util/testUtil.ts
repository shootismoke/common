import { AllPollutants } from '@shootismoke/convert';

import type { Provider } from '../../src/providers/types';
import type { LatLng, OpenAQResults } from '../../src/types';

function generateRandomLatLng(): LatLng {
	return {
		latitude: Math.floor(Math.random() * 9000) / 100,
		longitude: Math.floor(Math.random() * 9000) / 100,
	};
}

function generateRandomStationId(): string {
	return `${Math.floor(Math.random() * 1000) + 1}`;
}

/**
 * Test that OpenAQResults data is correct
 *
 * @param OpenAQResults - The OpenAQResults data to test
 */
export function testOpenAQResults(results: OpenAQResults): void {
	results.forEach((data) => {
		expect(data.country.length).toBe(2);
		expect(data.date).toBeDefined();
		expect(data.location).toHaveProperty('latitude');
		expect(data.location).toHaveProperty('longitude');
		expect(AllPollutants.includes(data.parameter)).toBe(true);
		expect(data.value).toBeDefined();
		expect(data.unit).toBeDefined();
	});
}

/**
 * Test that a Promise is resolving correctly.
 */
export async function testPromise<T>(
	p: Promise<T>,
	normalize: (data: T) => OpenAQResults
): Promise<void> {
	const res = await p;
	expect(res).toBeDefined();

	try {
		normalize(res);
	} catch (error) {
		// We don't fail the test if one of the following errors occur
		const skippedErrorMessages = [
			// Skip if the random stationId is an unknown station
			'Unknown ID',
			// Skip if we somehow couldn't connect
			'can not connect',
			// Skip if openaq doesn't return results
			'[openaq] Cannot normalize, got 0 result',
			// Skip if aqicn doesn't track pollutants that don't interest us
			'no pollutants currently tracked',
			// Skip if aqicn doesn't expose city
			'no city',
		];

		expect(
			skippedErrorMessages.some((msg) =>
				(error as Error).message.includes(msg)
			)
		).toBe(true);
	}
}

interface TestProviderE2EOptions<Options> {
	options?: Options;
	skip?: ('fetchByGps' | 'fetchByStation')[];
}

/**
 * Test helper to test a provider
 */
export function testProviderE2E<Response, Options>(
	provider: Provider<Response, Options>,
	{ options, skip = [] }: TestProviderE2EOptions<Options>
): void {
	jest.setTimeout(30000);

	if (!skip.includes('fetchByGps')) {
		describe('fetchByGps', () => {
			[0, 0].map(generateRandomLatLng).forEach((gps) => {
				it(`should fetch ${provider.id} by gps: ${JSON.stringify(
					gps
				)}`, () =>
					testPromise(
						provider.fetchByGps(
							{ latitude: 78.7, longitude: 55.69 },
							options
						),
						(d) => provider.normalize(d)
					));
			});
		});
	}

	if (!skip.includes('fetchByStation')) {
		describe('fetchByStation', () => {
			[0, 0].map(generateRandomStationId).forEach((stationId) => {
				it(`should fetch ${provider.id} by station: ${stationId}`, () =>
					testPromise(
						provider.fetchByStation(stationId, options),
						(d) => provider.normalize(d)
					));
			});
		});
	}

	jest.setTimeout(5000);
}
