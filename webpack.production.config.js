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
        filename: '[name].[chunkhash].js'
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
                include: resolve(__dirname, 'app/static/css'),
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
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};