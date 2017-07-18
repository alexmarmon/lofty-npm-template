const path = require('path');
const config = require('@lofty/lofty-webpack/webpack.prod.js');

config.entry = {
  index: ['./src/dist-index']
};

config.externals = {
  'react': 'commonjs react'
};

config.output = {
  filename: '[name].js',
  path: path.resolve('./dist'),
  libraryTarget: 'commonjs2'
};

// force all chunks into index.js
config.plugins.find(x => {
  if (typeof x.chunkNames === typeof []) {
    x.chunkNames = ['index'];
  }
})

module.exports = config;
