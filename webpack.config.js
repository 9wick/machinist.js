const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'machinist.js',
    path: path.join(__dirname, 'dist'),
    library: 'Machinist',
  },
  module: {},
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['devDependencies'],
      },
    }),
  ],
  stats: {
    warningsFilter: [
      /(?!require function is used in a way in which dependencies cannot be statically extracted)/,
    ],
  },
};
