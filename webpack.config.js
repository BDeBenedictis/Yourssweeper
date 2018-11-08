const path = require('path');

const SRC_DIR = path.resolve(__dirname, './client');
const BUILD_DIR = path.resolve(__dirname, './public');

module.exports = {
  entry: path.resolve(SRC_DIR, 'app.jsx'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
          test: /\.css$/,
          loader: 'style-loader'
        }, {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
    ]
  }
}