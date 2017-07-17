const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = Merge(CommonConfig, {
  entry: {
    index: ['./src/dist-index']
  },

  externals: {
    'react': 'commonjs react'
  },

  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
});

module.exports = config;
