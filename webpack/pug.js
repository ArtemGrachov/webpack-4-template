module.exports = mode => {
  return {
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
}