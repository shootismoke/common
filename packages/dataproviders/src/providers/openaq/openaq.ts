import { ProviderFP } from '../types';
import { fetchByGps, fetchByStation, OpenAQOptions } from './fetchBy';
import { normalize } from './normalize';
import { OpenAQMeasurements } from './validation';

export const openaq: ProviderFP<
	OpenAQMeasurements,
	OpenAQMeasurements,
	OpenAQOptions
> = {
	fetchByGps,
	fetchByStation,
	id: 'openaq',
	name: 'Open AQ',
	normalizeByGps: normalize,
	normalizeByStation: normalize,
};
