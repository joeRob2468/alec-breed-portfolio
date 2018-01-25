const path = require('path');

module.exports = function(env) {
  return {
    entry: './static/js/app.js',
    output: {
      path: __dirname + '/static/dist',
      filename: 'bundle.js'
    }
  }
}