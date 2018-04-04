const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  "plugins":[
    new HtmlWebPackPlugin({
      template: "./client/public/index.html",
      filename: "index.html"
    })
  ]
};
