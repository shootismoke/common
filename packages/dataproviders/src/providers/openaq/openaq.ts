import { Provider } from '../../types';
import { fetchByGps, fetchByStation } from './fetchBy';
import { normalize } from './normalize';
import { Measurements } from './validation';

export const openaq: Provider<Measurements, Measurements, {}> = {
  fetchByGps,
  fetchByStation,
  id: 'openaq',
  name: 'Open AQ',
  normalizeByGps: normalize,
  normalizeByStation: normalize
};
