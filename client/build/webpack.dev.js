const path = require('path')
const commonConfig = require('./webpack.common')
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    hot: true,
    quiet: true,
    host: '0.0.0.0',
    historyApiFallback: true, // fallback
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:3000`],
      }
    })
  ]
})
