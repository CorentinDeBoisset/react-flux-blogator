var path = require("path");
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
        loaders: ['react-hot', "babel"],
      },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".styl"],
    modulesDirectories: ['node_modules', 'src', '.']
  },
  devServer: {
    proxy: {
        "*": shared.prerenderUrl
    },
    contentBase: 'www/',
    inline: true,
    colors: true,
    progress: true,
  }
};
