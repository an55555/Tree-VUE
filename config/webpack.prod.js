/**
 * Created by Administrator on 2017/9/15.
 */
console.log("生产环境")
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports=merge(common,
    {
        plugins:[
    /*        new UglifyJSPlugin({
                sourceMap: true
            }),*/
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV':JSON.stringify("production") /*定义一个全局环境变量process.env.NODE_ENV*/
                }
            })
        ]
    }
    )