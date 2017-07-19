const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const config = require('@lofty/lofty-webpack/webpack.dev.js');
const express = require('express');

const app = express();
const port = 3000;
process.env['PORT'] = port;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true,
}).listen(port, 'localhost', (err) => {
  if (err) { console.log(err); }
});

module.exports = app;
