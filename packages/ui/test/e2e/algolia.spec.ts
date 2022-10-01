import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { fetchAlgolia } from '../../src/util/fetchAlgolia';

describe('algolia', () => {
	['paris', 'beijing', 'dsfewrwea', '123', '   ', '!?#'].forEach(
		(searchString) => {
			it(`should search for ${searchString}`, (done) => {
				pipe(
					fetchAlgolia(searchString),
					TE.fold(
						(err) => {
							done.fail(err);
							return T.of(undefined);
						},
						() => {
							return T.of(undefined);
						}
					)
				)().catch(console.error);
			});
		}
	);
});
