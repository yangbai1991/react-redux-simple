var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = path;

module.exports = {
    entry: {
        index: resolve(__dirname, 'app/index')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve(__dirname, 'app'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-3']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: resolve(__dirname, 'app'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'app': resolve(__dirname, 'app'),
            'containers': resolve(__dirname, 'app/containers'),
            'components': resolve(__dirname, 'app/components'),
            'util': resolve(__dirname, 'app/util'),
            'css': resolve(__dirname, 'app/static/css')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: resolve(__dirname, 'app/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(process.env.NODE_ENV === 'dev')
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost: 3000',
                secure: false
            }
        },
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};