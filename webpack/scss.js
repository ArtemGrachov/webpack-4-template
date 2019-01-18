const
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  autoprefixer = require('autoprefixer');

module.exports = mode => {
  return {
    test: /\.scss$/,
    use: [
      mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['> 1%', 'last 2 versions']
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          outputStyle: mode === 'production' ? 'compressed' : 'expanded'
        }
      }
    ]
  }
}