const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:__dirname+"/src/script/app.js",
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:"[name]-[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template:__dirname+'/src/index.html'
        })
      ]
}