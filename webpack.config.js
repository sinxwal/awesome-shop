'use strict'

require('dotenv').load();

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const API_PORT = process.env.API_PORT;

module.exports = (env, argv) => ({
  devServer: {
    https: true,
    contentBase: path.join(__dirname, "client/public"),
    compress: true,
    port: 8080,
    proxy: {
      "/api": `http://localhost:${API_PORT}`
    }
  },
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }, {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: argv.mode === 'production' ? false : true
          }
        }, {
          loader: 'css-loader',
          options: {
            camelCase: 'dashes',
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: argv.mode === 'production' ? false : true
          }
        }]
      }
    ]
  },
  "plugins":[
    new HtmlWebPackPlugin({
      template: "./client/src/index.html",
      filename: "index.html"
    })
  ]
});
