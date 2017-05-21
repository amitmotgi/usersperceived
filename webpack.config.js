var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'dist/bundle.js'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
