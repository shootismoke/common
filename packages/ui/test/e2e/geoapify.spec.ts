import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { geoapify } from '../../src/util/geoapify';

describe('geoapify', () => {
	['paris', 'beijing', 'dsfewrwea', '123', '!?#'].forEach((searchString) => {
		it(`should search for ${searchString}`, () => {
			return pipe(
				geoapify(searchString, process.env.GEOAPIFY_API_KEY as string),
				TE.fold(
					(err) => {
						throw err;
					},
					() => {
						return T.of(undefined);
					}
				)
			)();
		});
	});
});
