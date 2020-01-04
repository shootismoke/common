const base = require('../../.eslintrc');

module.exports = {
  ...base,
  parserOptions: {
    project: './tsconfig.settings.json'
  },
  rules: {
    // Generated code from graphql-codegen has some any types
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
