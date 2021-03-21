// webpack.prod.js

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            //JS 压缩
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        drop_console: true
                    }
                }
            }),
            //CSS 压缩
            new OptimizeCSSAssetsPlugin ({
                assetNameRegExp: /\.(sa|sc|c)ss$/g, 
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: { removeAll: true},
                        normalizeUnicode: false
                    }]
                },
                canPrint: true
            }),
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    
})