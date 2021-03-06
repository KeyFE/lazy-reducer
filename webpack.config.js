'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        library: 'lazyReducer',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist'),
        filename: 'lazy-reducer.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    externals: ['react', 'redux', 'prop-types']
};

module.exports = config;
