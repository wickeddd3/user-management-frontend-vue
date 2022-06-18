module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: [ '<rootDir>/tests/unit/setup.js' ],
  moduleNameMapper: {
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
  ],
  coverageReporters: [
    'html',
    'text-summary',
  ],
};
