const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
           { test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:['babel-loader','eslint-loader']
           },
           {
            test: /\.(s*)css$/i,
            use: [
              // style-loader
              {loader:'style-loader'},
              // css-loader
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              // sass-loader
              { loader: 'sass-loader' }
            ]
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}