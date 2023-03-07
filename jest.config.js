module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
    'uuid': require.resolve('uuid'),
  },
  testEnvironment: 'jest-environment-jsdom'
}
