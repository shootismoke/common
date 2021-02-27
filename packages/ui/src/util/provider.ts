import { AllProviders, aqicn, openaq, waqi } from '@shootismoke/dataproviders';
import type { Api } from './api';
import { createApi } from './api';
import retry from 'async-retry';

type AllProviders = 'aqicn' | 'openaq' | 'waqi';

/**
 * Given some normalized data points, filter out the first one that contains
 * pm25 data. Returns a TaskEither left is none is found, or format the data
 * into the Api interface
 *
 * @param normalized - The normalized data to process
 */
async function providerFetch(
	provider: AllProviders,
	station: string
): Promise<Api> {
	const normalized =
		provider === 'aqicn'
			? aqicn.normalizeByStation(
					await aqicn.fetchByStation(station, {
						token: process.env.BACKEND_AQICN_TOKEN as string,
					})
			  )
			: provider === 'waqi'
			? waqi.normalizeByStation(await waqi.fetchByStation(station))
			: openaq.normalizeByStation(
					await openaq.fetchByStation(station, {
						limit: 1,
						parameter: ['pm25'],
					})
			  );

	// Gps coordinates are irrelevant for expo report.
	return createApi({ latitude: 0, longitude: 0 }, normalized);
}

function assertKnownProvider(
	provider: string,
	stationId: string
): asserts provider is AllProviders {
	if (!AllProviders.includes(provider)) {
		throw new Error(`Unrecognized stationId "${stationId}".`);
	}
}

/**
 * Fetch data from correct provider, based on stationId.
 *
 * @param stationId - The stationId of the station
 */
export function fetchStation(stationId: string): Promise<Api> {
	const [provider, station] = stationId.split('|');
	assertKnownProvider(provider, stationId);

	// Find the cigarettes at the user's last known station (stationId)
	// If anything throws, we retry, up to 5 times.
	return retry(async () => providerFetch(provider, station), { retries: 5 });
}
