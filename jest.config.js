module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)test.js?(x)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/jest/setup.js'],
}
