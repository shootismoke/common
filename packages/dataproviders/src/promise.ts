import {
	aqicn as aqicnFp,
	openaq as openaqFp,
	waqi as waqiFp,
} from './providers';
import { LatLng, OpenAQResults } from './types';
import { Provider } from './providers/types';
import { eitherToFunction, teToPromise } from './util';

/**
 * An interface representing an air quality data provider (Promise version).
 *
 * @ignore
 */
interface ProviderPromise<DataByGps, DataByStation, Options> {
	fetchByGps(gps: LatLng, options?: Options): Promise<DataByGps>;
	fetchByStation(
		stationId: string,
		options?: Options
	): Promise<DataByStation>;
	id: string;
	name: string;
	normalizeByGps(d: DataByGps): OpenAQResults;
	normalizeByStation(d: DataByStation): OpenAQResults;
}

function promisifyProvider<DataByGps, DataByStation, Options>(
	provider: Provider<DataByGps, DataByStation, Options>
): ProviderPromise<DataByGps, DataByStation, Options> {
	return {
		...provider,
		fetchByGps(gps: LatLng, options?: Options): Promise<DataByGps> {
			return teToPromise(provider.fetchByGps(gps, options));
		},
		fetchByStation(
			stationId: string,
			options?: Options
		): Promise<DataByStation> {
			return teToPromise(provider.fetchByStation(stationId, options));
		},
		normalizeByGps(d: DataByGps): OpenAQResults {
			return eitherToFunction(provider.normalizeByGps(d));
		},
		normalizeByStation(d: DataByStation): OpenAQResults {
			return eitherToFunction(provider.normalizeByStation(d));
		},
	};
}

export const aqicn = promisifyProvider(aqicnFp);
export const openaq = promisifyProvider(openaqFp);
export const waqi = promisifyProvider(waqiFp);
