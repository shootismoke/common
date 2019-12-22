module.exports = {
  exclude: ['**/*spec.ts', '**/index.ts'],
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
  hideGenerator: true,
  module: 'commonjs',
  out: 'docs',
  stripInternal: 'true',
  theme: 'markdown'
};
