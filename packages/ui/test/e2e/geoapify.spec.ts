import { geoapify } from '../../src/util/geoapify';

describe('geoapify', () => {
	['paris', 'beijing', 'dsfewrwea', '123', '!?#'].forEach((searchString) => {
		it(`should search for ${searchString}`, async () => {
			const hits = await geoapify(
				searchString,
				process.env.GEOAPIFY_API_KEY as string
			);

			expect(hits).toBeDefined();
		});
	});
});
