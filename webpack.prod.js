const
  webpack = require('webpack'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  merge = require('webpack-merge'),
  commonConfig = require('./webpack.common');

module.exports = (env, argv) => {
  const mode = argv.mode || 'production';
  return merge(
    commonConfig(mode), {
      mode: mode,
      plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.SourceMapDevToolPlugin({
          exclude: /libs/,
          filename: '[file].map'
        })
      ]
    }
  );
}