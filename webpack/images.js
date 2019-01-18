module.exports = mode => {
  return {
    test: /\.jpg|.jpeg|.png|.gif/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images'
      }
    },
  }
}