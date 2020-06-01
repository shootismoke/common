import { Provider } from '../../types';
import { fetchByGps, fetchByStation, OpenAQOptions } from './fetchBy';
import { normalize } from './normalize';
import { OpenAQResponse } from './validation';

export const openaq: Provider<OpenAQResponse, OpenAQResponse, OpenAQOptions> = {
	fetchByGps,
	fetchByStation,
	id: 'openaq',
	name: 'Open AQ',
	normalizeByGps: normalize,
	normalizeByStation: normalize,
};
