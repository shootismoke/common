/* eslint-disable */

const tsJest = require('ts-jest/jest-preset');

module.exports = {
	...tsJest,
	collectCoverageFrom: [
		'**/src/**/*.ts',
		'!**/index.ts', // index.ts only re-exports stuff
		'!**/testUtil.ts', // These files are used in tests
	],
	moduleNameMapper: {
		'@shootismoke/convert$': '<rootDir>/packages/convert/src/index.ts',
		'@shootismoke/dataproviders$':
			'<rootDir>/packages/dataproviders/src/index.ts',
	},
	setupFiles: ['./packages/dataproviders/test/util/setup.ts'],
	testMatch: ['**/*.spec.ts'],
};
