// webpack.dev.js

const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');


module.exports = merge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    devServer: {
        clientLogLevel: 'warning',
        publicPath: '/',
        host: '127.0.0.1',
        port: '8089',
        hot: true,
        open: true,
        overlay: { warnings: true, errors: true }, //在浏览器输出编译错误
        compress: true, //资源采用gzip压缩
        quiet: false, //除了初始启动信息之外的任何内容都不会被打印到控制台
    }
})