import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { testProvider } from '../../util';
import { openaq } from './openaq';

describe('openaq', () => {
  testProvider(openaq, {
    skip: ['fetchByStation']
  });

  describe('by station', () => {
    it('should fetch station Coyhaique', done => {
      pipe(
        openaq.fetchByStation('Coyhaique'),
        TE.fold(
          error => {
            done.fail(error);

            return T.of(void undefined);
          },
          ({ results }) => {
            expect(results.length).toBeGreaterThanOrEqual(1);

            done();

            return T.of(void undefined);
          }
        )
      )();
    });
  });
});