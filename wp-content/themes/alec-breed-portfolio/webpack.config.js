var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].bundle.css",
  allChunks: true,
  disable: process.env.NODE_ENV === 'development'
});

module.exports = function(env) {
  return {
    entry: ['./lib/app.js', './lib/scss/app.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      modules: [
        path.resolve('./'),
        path.resolve('./node_modules')
      ]
    },
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }]
    },
    plugins: [
      extractSass
    ]
  }
}