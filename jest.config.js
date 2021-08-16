module.exports = {
  testMatch: ['**/*.spec.{jsx,js}'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  notify: false,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components$': '<rootDir>/src/components/',
    '^@service$': '<rootDir>/src/service/',
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  automock: false,
  setupFiles: ['jest-prop-type-error'],
  resetModules: true,
  restoreMocks: true,
  verbose: false,
};
