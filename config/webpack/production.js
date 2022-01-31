const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  mode: 'production',
  plugins: [ new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  }
});