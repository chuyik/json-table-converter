module.exports = {
  testMatch: ['**/test/*.[jt]s', '**/test/**/*.[jt]s'],
  testPathIgnorePatterns: ['\\/\\..+'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/fixtures/**',
    '!src/@types/**',
  ],
}
