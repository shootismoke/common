import { waqi } from './waqi';

describe('waqi', () => {
	describe('by station', () => {
		it('should throw on fetchByStation', async () => {
			expect(waqi.fetchByStation('foo')).toThrow();
		});
	});
});
