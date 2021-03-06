import { aqicn, openaq } from '../../src/promise';

describe('promise', () => {
	beforeAll(() => jest.setTimeout(30000));

	it('should resolve correctly', async (done) => {
		const data = await openaq.fetchByStation('Coyhaique');
		expect(data.results.length).toBeGreaterThanOrEqual(1);

		const results = openaq.normalizeByStation(data);
		expect(results[0].value).toBeDefined();

		done();
	});

	it('should reject on missing token', async (done) => {
		try {
			await aqicn.fetchByGps({ latitude: 1, longitude: 1 });
		} catch (error) {
			expect(error).toEqual(new Error('AqiCN requires a token'));
			done();
		}
	});

	afterAll(() => jest.setTimeout(5000));
});
