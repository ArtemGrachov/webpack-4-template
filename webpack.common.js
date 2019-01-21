const
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  WebpackStylish = require('webpack-stylish'),
  css = require('./webpack/css'),
  images = require('./webpack/images'),
  js = require('./webpack/js'),
  pug = require('./webpack/pug'),
  scss = require('./webpack/scss');

module.exports = mode => {
  return {
    entry: {
      libs: path.resolve(__dirname, 'src/libs.js'),
      main: path.resolve(__dirname, 'src/main.js'),
      gallery: path.resolve(__dirname, 'src/gallery.js')
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        css(mode),
        images(mode),
        js(mode),
        pug(mode),
        scss(mode)
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/index/_page.pug',
        filename: 'index.html',
        chunks: ['main', 'libs']
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/gallery/_page.pug',
        filename: 'gallery.html',
        chunks: ['main', 'libs', 'gallery']
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/about-us/_page.pug',
        filename: 'about-us.html',
        chunks: ['main', 'libs']
      }),
      new WebpackStylish()
    ],
    stats: {
      children: false
    }
  }
}