module.exports = {
  "roots": [
    "<rootDir>/lib"
  ],
  "collectCoverageFrom": [
    "lib/**/*.{ts}",
    "!lib/**/index.ts",
    "!lib/**/*.{d,test}.ts"
  ],
  "testMatch": [
    "<rootDir>/lib/**/__tests__/**/*.{ts, js}",
    "<rootDir>/lib/**/*.{spec,test}.{ts, js}"
  ],
  "testEnvironment": "node",
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(ts)$",
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^lodash-es$": "lodash"
  },
  "moduleFileExtensions": [
    "js",
    "ts"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  }
}
