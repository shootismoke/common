import * as E from 'fp-ts/lib/Either';

import { aqicn } from './aqicn';

describe('aqicn', () => {
	it('should throw without token', async () => {
		expect(await aqicn.fetchByStation('foo')()).toEqual(
			E.left(new Error('AqiCN requires a token'))
		);
	});
});
