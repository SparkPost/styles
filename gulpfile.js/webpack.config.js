var webpack = require('webpack');

module.exports = {
  context: process.env.PWD,
  entry: "./_src/assets/js/_entry",
  output: {
    path: "./_src/assets/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
    /*,preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint",
        exclude: /(node_modules|bower_components|vendor)/,
      }
    ]*/
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]/*,
  eslint: {
    configFile: './.eslintrc'
  }*/
};
