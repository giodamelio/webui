var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      // Load both js and jsx files
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      // Load json files
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

