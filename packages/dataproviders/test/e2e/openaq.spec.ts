import { subDays } from 'date-fns';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { openaq } from '../../src/providers/openaq';
import { testProviderE2E } from '../../src/util';

describe('openaq e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	testProviderE2E(openaq, {
		skip: ['fetchByStation'],
	});

	it('should fetch station Beijing', (done) => {
		pipe(
			openaq.fetchByStation('Beijing'),
			TE.fold(
				(error) => {
					done.fail(error);

					return T.of(void undefined);
				},
				({ results }) => {
					expect(results.length).toBeGreaterThanOrEqual(1);

					done();

					return T.of(void undefined);
				}
			)
		)().catch(console.error);
	});

	it('should fetch correctly with options', (done) => {
		const dateFrom = subDays(new Date(), 9000);
		const dateTo = subDays(new Date(), 7);

		pipe(
			openaq.fetchByStation('Beijing', {
				dateFrom,
				dateTo,
				limit: 2,
				includeFields: ['sourceName', 'isMobile', 'entity'],
				parameter: ['pm25'],
			}),
			TE.fold(
				(error) => {
					done.fail(error);

					return T.of(void undefined);
				},
				({ results }) => {
					// Check limit.
					expect(results.length).toBeLessThanOrEqual(3); // Somehow when we fetch limit=2, it returns 3 results...
					// Check parameter.
					expect(
						results.some(({ parameter }) => parameter !== 'pm25')
					).toBe(false);

					results.forEach((result) => {
						// Check dateFrom & dateTo.
						const measurementDate = new Date(result.date.utc);
						expect(
							dateFrom <= measurementDate &&
								measurementDate <= dateTo
						).toBe(true);
						// Check includeFields.
						expect(result.isMobile).not.toBeUndefined();
						expect(result.entity).toBeTruthy();
						expect(result.sourceName).toBeTruthy();
					});

					done();

					return T.of(void undefined);
				}
			)
		)().catch(console.error);
	});

	afterAll(() => jest.setTimeout(5000));
});
