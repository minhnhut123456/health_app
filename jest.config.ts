export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src', 'src/__tests__/utils/test-utils.tsx'],
  moduleNameMapper: {
    '#$': '<rootDir>/src',
    '#/(.*)': '<rootDir>/src/$1',
  },
};
