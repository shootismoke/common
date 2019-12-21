import { Provider } from '../../types';
import { fetchByGps } from './fetchBy';
import { normalize } from './normalize';
import { ByStation } from './validation';

/**
 * @see https://wind.waqi.info/
 */
export const waqi: Provider<ByStation, ByStation, {}> = {
  fetchByGps,
  fetchByStation: () => {
    throw new Error('Unimplemented.');
  },
  id: 'waqi',
  name: 'WAQI',
  normalizeByGps: normalize,
  normalizeByStation: () => {
    throw new Error('Unimplemented.');
  }
};
