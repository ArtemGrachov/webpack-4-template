const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = mode => {
  return {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader'
    ]
  }
}