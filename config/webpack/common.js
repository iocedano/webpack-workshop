const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginOptions = {
  title: 'Learning Webpack - Success - Training - Growth',
  inject: 'body',
  cache: true
};

module.exports = ({ root }) => ({
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(root, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackPluginOptions),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [{
      // https://webpack.js.org/guides/asset-modules
      test: /\.jpe?g$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4kb
        }
      }
    }],
  }
});