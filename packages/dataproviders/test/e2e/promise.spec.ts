import { aqicn, openaq } from '../../src';

describe('promise', () => {
	beforeAll(() => jest.setTimeout(30000));

	it('should resolve correctly', async () => {
		const data = await openaq.fetchByStation('Coyhaique');
		expect(data.results.length).toBeGreaterThanOrEqual(1);

		const results = openaq.normalize(data);
		expect(results[0].value).toBeDefined();
	});

	it('should reject on missing token', async () => {
		try {
			await aqicn.fetchByGps({ latitude: 1, longitude: 1 });
		} catch (error) {
			expect(error).toEqual(new Error('AqiCN requires a token'));
		}
	});

	afterAll(() => jest.setTimeout(5000));
});
