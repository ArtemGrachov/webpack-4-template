module.exports = mode => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }]
  }
}