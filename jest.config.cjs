module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.js'],
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
