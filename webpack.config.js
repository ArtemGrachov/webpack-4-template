const
  path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

function fileName(filePath, ext) {
  return `${path.dirname(filePath).split(path.sep).pop()}.${ext}`
}

module.exports = {
  entry: {
    main: './src/main.js',
    libs: './src/libs.js',
    gallery: './src/gallery.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jpg|.jpeg|.png|.gif/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images'
          }
        },
      },
      {
        test: /\.pug/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new CleanWebpackPlugin(['dist']),
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
    })
  ]
}