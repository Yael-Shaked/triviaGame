module.exports = {
    transform: {
      '^.+\\.(ts|tsx)?$': 'babel-jest', 
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/Mocks/fileMock.ts',

    },
    testEnvironment: 'jsdom',//The jsdom environment simulates a browser's window object

  };
  