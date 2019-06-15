const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'index',
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        }]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        host: '127.0.0.1',
        port: '8888',
        hot: true
    }
};