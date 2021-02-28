import {
	aqicn as aqicnFp,
	openaq as openaqFp,
	waqi as waqiFp,
} from './providers';
import { ProviderFP } from './providers/types';
import { LatLng, OpenAQResults } from './types';
import { eitherToFunction, teToPromise } from './util';

/**
 * An interface representing an air quality data Provider (Promise version).
 */
export interface Provider<DataByGps, DataByStation, Options> {
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

function promisifyProviderFP<DataByGps, DataByStation, Options>(
	ProviderFP: ProviderFP<DataByGps, DataByStation, Options>
): Provider<DataByGps, DataByStation, Options> {
	return {
		...ProviderFP,
		fetchByGps(gps: LatLng, options?: Options): Promise<DataByGps> {
			return teToPromise(ProviderFP.fetchByGps(gps, options));
		},
		fetchByStation(
			stationId: string,
			options?: Options
		): Promise<DataByStation> {
			return teToPromise(ProviderFP.fetchByStation(stationId, options));
		},
		normalizeByGps(d: DataByGps): OpenAQResults {
			return eitherToFunction(ProviderFP.normalizeByGps(d));
		},
		normalizeByStation(d: DataByStation): OpenAQResults {
			return eitherToFunction(ProviderFP.normalizeByStation(d));
		},
	};
}

export const aqicn = promisifyProviderFP(aqicnFp);
export const openaq = promisifyProviderFP(openaqFp);
export const waqi = promisifyProviderFP(waqiFp);
