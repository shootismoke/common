import { raceApiPromise } from '../../src/util/api';

const options = {
	aqicn: {
		token: process.env.AQICN_TOKEN as string,
	},
};

describe('raceApiPromise', () => {
	beforeAll(() => jest.setTimeout(30000));

	it('should return data for paris', async (done) => {
		const api = await raceApiPromise(
			{ latitude: 48.8546, longitude: 2.34771 },
			options
		);

		expect(api.shootismoke.dailyCigarettes).toBeTruthy();

		done();
	});

	afterAll(() => jest.setTimeout(5000));
});
