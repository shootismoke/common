import * as E from 'fp-ts/lib/Either';

import { testProvider } from '../../util';
import { aqicn } from './aqicn';

const options = {
  token: process.env.AQICN_TOKEN as string
};

describe('aqicn', () => {
  testProvider(aqicn, { options });

  it('should throw without token', async done => {
    expect(await aqicn.fetchByStation('foo')()).toEqual(
      E.left(new Error('AqiCN requires a token'))
    );

    done();
  });

  it('should return an error with an unknown station', async done => {
    expect(await aqicn.fetchByStation('foo', options)()).toEqual(
      E.left(new Error('Unknown station'))
    );

    done();
  });
});
