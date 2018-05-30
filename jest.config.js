module.exports = {
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework.js'),
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  // coverageThreshold: {
  //   global: {
  //     statements: 18,
  //     branches: 13,
  //     functions: 19,
  //     lines: 18,
  //   }
  // }
}
