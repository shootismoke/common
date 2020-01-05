import * as O from 'fp-ts/lib/Option';

import { countryCode } from './countries';

describe('countryCode', () => {
  it('should match exact country', () => {
    expect(countryCode('United States')).toEqual(O.some('US'));
  });

  it('should match lower case', () => {
    expect(countryCode('united states')).toEqual(O.some('US'));
  });

  it('should match multiple spacing', () => {
    expect(countryCode('united  states')).toEqual(O.some('US'));
  });

  it('should match included string', () => {
    expect(countryCode('United States Of America')).toEqual(O.some('US'));
  });
});
