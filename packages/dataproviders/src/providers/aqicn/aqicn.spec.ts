import { aqicn } from './aqicn';

describe('aqicn', () => {
	it('should throw without token', async () => {
		expect(await aqicn.fetchByStation('foo')).toThrowError(
			new Error('AqiCN requires a token')
		);
	});
});
