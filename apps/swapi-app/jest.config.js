module.exports = {
  name: 'swapi-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/swapi-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
