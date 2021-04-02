// webpack.base.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: ['./src/main.ts'],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'js/[name].[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    ...[isProd ? MiniCssExtractPlugin.loader : 'style-loader'],
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    ...[isProd ? MiniCssExtractPlugin.loader : 'style-loader'],
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    ...[isProd ? MiniCssExtractPlugin.loader : 'style-loader'],
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')],
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]',
                    esModule: false,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            favicon:'./favicon.ico',
            template: './index.html',
        })
    ]
}