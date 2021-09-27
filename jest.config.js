module.exports = async () => {
  return {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    collectCoverageFrom: [
      'src/pages/**/*.{js,jsx,ts,tsx}',
      'src/components/**/*.{js,jsx,ts,tsx}',
      '!src/pages/_app.tsx',
      '!src/pages/_document.tsx',
    ],
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@tests/(.*)$': '<rootDir>/src/tests/$1',
    },
  };
};
