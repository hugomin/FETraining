const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname + "/src/script/index.es",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "./",
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: "/\.es$/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["env"]
                        }
                    }
                ]
            }, {
                test: "/\.less$/i",
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
                        { loader: "less-loader" }
                    ]
                })
            }]
    },
    plugins: [
        new ExtractTextPlugin("style/[name ].css"),
    ]
}