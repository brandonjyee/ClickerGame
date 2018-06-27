module.exports = {
  entry: ["babel-polyfill", "./client/Main.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "./public/bundle.js"
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
