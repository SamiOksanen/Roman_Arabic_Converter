var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            }
        ]
    }
};
