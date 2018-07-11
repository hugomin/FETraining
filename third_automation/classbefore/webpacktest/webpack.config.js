const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将js和css分开
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname + "/src/script/index.es",
    output: {
        path: path.join(__dirname, '/build/'),
        publicPath: "./",//静态资源
        filename: "script/[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.es$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["env"]
                        }
                    }
                ]
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }]
    },
    // externals:{   //全局的一些工具库
    //     jquery:Window.$
    // },
    plugins: [
        new HtmlWebpackPlugin({//将js和css文件插入html页面
            filename: 'index.html',//文件名
            template: __dirname + '/src/index.html'//模板名
        }),
        new ExtractTextPlugin("style/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({//提取公共文件
            name: "common",
            filename: "[name].js",
            minChunks: 1
        }),
        new webpack.optimize.UglifyJsPlugin({//压缩
            output:{
                comments:false
            },
            sourceMap:false,
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),

    ],
}
//babel-runtime  babel-polyfill