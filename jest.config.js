module.exports = {
  verbose: true,
  setupFiles: [
    '<rootDir>/setupTests.js',
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '\\.scss$': 'babel-jest',
    '\\.css$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(gif|png|jpg|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
