const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    devMiddleware: {
      writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('FelipeRosaDev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
