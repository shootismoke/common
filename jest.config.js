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
  testMatch: ['**/*.spec.ts']
};
