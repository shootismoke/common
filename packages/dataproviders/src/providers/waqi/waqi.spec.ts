import { testProvider } from '../../util';
import { ByStation } from './validation';
import { waqi } from './waqi';

describe('waqi', () => {
  testProvider(waqi, {
    skip: ['fetchByStation']
  });

  describe('by station', () => {
    it('should throw on fetchByStation', () => {
      expect(() => waqi.fetchByStation('foo')).toThrowError('Unimplemented');
      expect(() => waqi.normalizeByStation({} as ByStation)).toThrowError(
        'Unimplemented'
      );
    });
  });
});
