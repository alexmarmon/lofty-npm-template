const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.resolve(__dirname, './'),

  performance: {
    hints: process.env.npm_lifecycle_event === 'build' ? "warning" : false
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        }),
        // loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jsx?|js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      }
    ],
  },

  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  }
};

module.exports = config;
