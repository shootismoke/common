import { waqi } from '../../src/providers/waqi';
import { testProviderE2E } from '../util/testUtil';

describe('waqi e2e', () => {
	beforeAll(() => jest.setTimeout(30000));

	testProviderE2E(waqi, {
		skip: ['fetchByStation'],
	});

	afterAll(() => jest.setTimeout(5000));
});
