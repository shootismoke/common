import * as E from 'fp-ts/lib/Either';

import { aqicn } from '../../src/providers/aqicn';
import { testProviderE2E } from '../../src/util';

const options = {
  token: process.env.AQICN_TOKEN as string
};

describe('aqicn e2e', () => {
  it('should return an error with an unknown station', async done => {
    expect(await aqicn.fetchByStation('foo', options)()).toEqual(
      E.left(new Error('Unknown station'))
    );

    done();
  });

  testProviderE2E(aqicn, { options });
});
