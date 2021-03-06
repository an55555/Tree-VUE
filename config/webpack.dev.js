/**
 * Created by Administrator on 2017/9/14.
 */

console.log("开发环境")
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports=merge(common,
    {
        devtool:'inline-source-map',
        devServer:{
            contentBase:'./dist',
            hot: true
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ]
    }
)