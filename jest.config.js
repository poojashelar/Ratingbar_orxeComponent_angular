const { jestConfig } = require('@orxe-devkit/jest-config');

customConfig = {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/packages/**/src/**/*.d.ts',
    '<rootDir>/packages/**/src/**/*css.ts',
  ],
  testMatch: [
    '<rootDir>/packages/**/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/packages/**/src/**/*.{spec,test,axe}.{js,jsx,ts,tsx}',
  ],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './jest-html-report',
      },
    ],
  ],
};

module.exports = jestConfig(customConfig);