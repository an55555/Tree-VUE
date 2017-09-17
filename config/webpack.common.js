/**
 * Created by Administrator on 2017/9/14.
 */
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:{
        app:'./src/main.js',
    },
    output:{
        // filename: '[name].[chunkhash].js',  //在开发模式下会出错
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path:path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Paging-VUE',
            filename:'index.html', //通过模板生成的文件名
            template:'index.html',//模板路径
            inject:true, //是否自动在模板文件添加 自动生成的js文件链接
            minify:{
                removeComments:true //是否压缩时 去除注释
            }
        }),
    ]
}