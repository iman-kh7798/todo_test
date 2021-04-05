const path = require('path')
const {merge}= require('webpack-merge')
const baseConfig = require('./webpack.config')
const webpackNodeExternals =require('webpack-node-externals')
const Config ={
    target:'node',

    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals:[webpackNodeExternals()]
}
module.exports = merge([baseConfig,Config])
