module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
