module.exports = {
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'

  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ]
}
