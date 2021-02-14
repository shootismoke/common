import { subDays } from 'date-fns';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { openaq } from '../../src/providers/openaq';

describe('openaq e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	// OpenAQ has some issues with their API right now.
	// https://github.com/openaq/openaq-api/issues/468
	// So we skip this test for now.
	// TODO Uncomment test.
	// testProviderE2E(openaq, {
	// 	skip: ['fetchByStation'],
	// });

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
				parameter: ['pm25'],
			}),
			TE.fold(
				(error) => {
					done.fail(error);

					return T.of(void undefined);
				},
				({ results }) => {
					expect(results.length).toBeLessThanOrEqual(2);
					expect(
						results.some(({ parameter }) => parameter !== 'pm25')
					).toBe(false);
					results.forEach(({ date: { utc } }) => {
						const measurementDate = new Date(utc);
						expect(
							dateFrom <= measurementDate &&
								measurementDate <= dateTo
						).toBe(true);
					});

					done();

					return T.of(void undefined);
				}
			)
		)().catch(console.error);
	});

	afterAll(() => jest.setTimeout(5000));
});
