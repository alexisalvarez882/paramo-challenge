module.exports = {
  "testRunner": "jest-jasmine2",
  "moduleFileExtensions": ["js", "json"],
  "modulePathIgnorePatterns": ["<rootDir>/out"],
  "rootDir": "./",
  "testMatch": ["<rootDir>/tests/**/*.{spec,test}.js"],
  "testPathIgnorePatterns": ["<rootDir>/node_modules", "<rootDir>/out"],
  "testEnvironment": "node",
  "reporters": ["default", "jest-allure"],
  setupFilesAfterEnv: [
    'jest-allure/dist/setup'
  ],
}
