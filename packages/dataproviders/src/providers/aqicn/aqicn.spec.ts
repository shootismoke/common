import { aqicn } from './aqicn';

describe('aqicn', () => {
	it('should throw without token', async () => {
		await expect(aqicn.fetchByStation('foo')).rejects.toThrowError(
			new Error('AqiCN requires a token')
		);
	});
});
