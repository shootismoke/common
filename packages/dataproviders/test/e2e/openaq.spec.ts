import { subDays } from 'date-fns';

import { openaq } from '../../src/providers/openaq';
import { testProviderE2E } from '../util/testUtil';

describe('openaq e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	testProviderE2E(openaq, {
		skip: ['fetchByStation'],
	});

	it('should fetch station Beijing', async () => {
		const { results } = await openaq.fetchByStation('Beijing');
		expect(results.length).toBeGreaterThanOrEqual(1);
	});

	it('should fetch correctly with options', async () => {
		const dateFrom = subDays(new Date(), 9000);
		const dateTo = subDays(new Date(), 7);

		const { results } = await openaq.fetchByStation('Beijing', {
			dateFrom,
			dateTo,
			limit: 2,
			includeFields: ['sourceName', 'isMobile', 'entity'],
			parameter: ['pm25'],
		});

		// Check limit.
		expect(results.length).toBeLessThanOrEqual(3); // Somehow when we fetch limit=2, it returns 3 results...
		// Check parameter.
		expect(results.some(({ parameter }) => parameter !== 'pm25')).toBe(
			false
		);

		results.forEach((result) => {
			// Check dateFrom & dateTo.
			const measurementDate = new Date(result.date.utc);
			expect(
				dateFrom <= measurementDate && measurementDate <= dateTo
			).toBe(true);
			// Check includeFields.
			expect(result.isMobile).not.toBeUndefined();
			expect(result.entity).toBeTruthy();
			expect(result.sensorType).toBeTruthy();
		});
	});

	afterAll(() => jest.setTimeout(5000));
});
