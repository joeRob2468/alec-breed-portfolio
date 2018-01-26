var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


var extractSass = new ExtractTextPlugin({
  filename: "[name].bundle.css",
  allChunks: true,
  disable: process.env.NODE_ENV === 'development'
});

var browserSync = new BrowserSyncPlugin({
  // browse to http://localhost:3000/ during development
  port: '3000',
  server: false,
  proxy: {
    target: 'localhost/dev/alecbreed/code'
  },
  files: ['**/*.twig', '**/*.php', '**/*.css', '**/*.js']
});

module.exports = {
  entry: ['./lib/app.js'],
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
            sourceMap: true,
            importLoaders: 1,
            autoprefixer: false
          }
        }, {
          loader: "postcss-loader",
          options: {
            ident: 'postcss',
            minimize: true,
            sourceMap: true,
            plugins: (loader) => [
              require('autoprefixer')(),
              require('cssnano')({
                preset: 'default'
              })
            ]
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
    extractSass,
    browserSync
  ]
}