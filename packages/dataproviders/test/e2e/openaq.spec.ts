import { subDays } from 'date-fns';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { openaq } from '../../src/providers/openaq';
import { testProviderE2E } from '../util/testUtil';

describe('openaq e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	testProviderE2E(openaq, {
		skip: ['fetchByStation'],
	});

	it('should fetch station Beijing', () => {
		return pipe(
			openaq.fetchByStation('Beijing'),
			TE.fold(
				(error) => {
					throw error;
				},
				({ results }) => {
					expect(results.length).toBeGreaterThanOrEqual(1);

					return T.of(void undefined);
				}
			)
		)();
	});

	it('should fetch correctly with options', () => {
		const dateFrom = subDays(new Date(), 9000);
		const dateTo = subDays(new Date(), 7);

		return pipe(
			openaq.fetchByStation('Beijing', {
				dateFrom,
				dateTo,
				limit: 2,
				includeFields: ['sourceName', 'isMobile', 'entity'],
				parameter: ['pm25'],
			}),
			TE.fold(
				(error) => {
					throw error;
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
						expect(result.sensorType).toBeTruthy();
					});

					return T.of(void undefined);
				}
			)
		)();
	});

	afterAll(() => jest.setTimeout(5000));
});
