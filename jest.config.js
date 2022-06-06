export default {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,js}'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['src/test'],
    reporters: ['default'],
    globals: { 'ts-jest': { diagnostics: false } },
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    }
};
