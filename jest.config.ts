import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json"
      }
    ]
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};

export default config;
