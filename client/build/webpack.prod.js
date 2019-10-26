const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common')
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})
