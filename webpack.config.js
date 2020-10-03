const path=require('path');
const html= require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
           { test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}