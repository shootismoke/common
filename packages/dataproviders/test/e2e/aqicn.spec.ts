import { aqicn } from '../../src/providers/aqicn';
import { testPromise, testProviderE2E } from '../util/testUtil';

const options = {
	token: process.env.AQICN_TOKEN as string,
};

describe('aqicn e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	it('should return an error with an unknown station', async () => {
		expect(await aqicn.fetchByStation('foo', options)).toThrowError(
			new Error('Unknown station')
		);
	});

	describe('fetchByGps sanitize.json mapping', () => {
		it('should fetch paris', () =>
			testPromise(
				aqicn.fetchByGps(
					{ latitude: 48.8546, longitude: 2.34771 },
					options
				),
				(d) => aqicn.normalize(d)
			));

		it('should fetch pune', () =>
			testPromise(
				aqicn.fetchByGps(
					{ latitude: 18.5203, longitude: 73.8543 },
					options
				),
				(d) => aqicn.normalize(d)
			));

		it('should fetch beijing', () =>
			testPromise(
				aqicn.fetchByGps(
					{ latitude: 39.9289, longitude: 116.3883 },
					options
				),
				(d) => aqicn.normalize(d)
			));
	});

	testProviderE2E(aqicn, { options });

	afterAll(() => jest.setTimeout(5000));
});
