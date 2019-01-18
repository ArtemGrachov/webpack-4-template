const
  path = require('path'),
  merge = require('webpack-merge'),
  commonConfig = require('./webpack.common');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  return merge(
    commonConfig(mode), {
      mode: mode,
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        stats: 'minimal'
      },
    })
}