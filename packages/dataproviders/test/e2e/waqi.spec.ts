import { waqi } from '../../src/providers/waqi';
import { testProviderE2E } from '../../src/util';

describe('waqi e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	testProviderE2E(waqi, {
		skip: ['fetchByStation'],
	});

	afterAll(() => jest.setTimeout(5000));
});
