/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  modulePaths: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  globals: {
    lang: 'es',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '^.+\\.index\\.ts$', '^.+\\.AmplitudEventUtil\\.ts$'],
  modulePathIgnorePatterns: [
    '<rootDir>/lib/',
    '<rootDir>/public',
    '<rootDir>/node_modules',
    'e2e',
    '<rootDir>/.storybook',
    '<rootDir>/src/mock',
    '<rootDir>/src/lang',
    '^.+\\.query\\.ts$',
    '<rootDir>/src/app.{tsx,ts,js,jsx}',
    '^.+\\.AmplitudEventUtil\\.ts$',
    '^.+\\index\\.ts$',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js?)$': 'babel-jest',
  },
}
