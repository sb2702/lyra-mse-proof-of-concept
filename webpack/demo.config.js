const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');





module.exports = {
  entry: [`./src/demo.js`],
  output: {
    libraryTarget: "window",
    path: path.resolve(__dirname, `../demo`),
    // chunkFilename: `${target}.demo.js`,
    filename: `demo.js`,
   // publicPath: `/src/${target}/`
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
        template: `src/index.html`,
        inject: 'head',
        scriptLoading: 'blocking',
        filename: 'index.html',
    }),
  ],
  devServer: {
    injectClient: false, // Fixes import issue as per https://github.com/webpack/webpack-dev-server/issues/2484#issuecomment-655211893
     port: 8000,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
},
  node: {}
};
