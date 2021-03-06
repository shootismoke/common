import { ProviderFP } from '../types';
import { AqicnOptions, fetchByGps, fetchByStation } from './fetchBy';
import { normalize } from './normalize';
import { AqicnStaton } from './validation';

/**
 * @see https://aqicn.org
 */
export const aqicn: ProviderFP<AqicnStaton, AqicnStaton, AqicnOptions> = {
	fetchByGps,
	fetchByStation,
	id: 'aqicn',
	name: 'AQI CN',
	normalizeByGps: normalize,
	normalizeByStation: normalize,
};
