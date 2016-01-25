var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var shared = require('./shared')

module.exports = {
  entry: './src/client.jsx',
  output: {
      path: path.join(__dirname, "www"),
      filename: "app.js",
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".styl"],
  }
};
