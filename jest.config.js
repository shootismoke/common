/* eslint-disable */

const tsJest = require('ts-jest/jest-preset');

module.exports = {
  ...tsJest,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!./packages/graphql/**', // These files are generated
    '!**/index.ts', // index.ts only re-exports stuff
    '!**/testUtil.ts' // These files are used in tests
  ],
  moduleNameMapper: {
    '@shootismoke/convert$': '<rootDir>/packages/convert/src/index.ts',
    '@shootismoke/graphql$': '<rootDir>/packages/graphql/src/index.ts'
  },
  setupFiles: ['./packages/dataproviders/test/util/setup.ts'],
  testMatch: ['**/*.spec.ts']
};
