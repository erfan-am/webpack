const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'boundle.js'
  },
  plugins:[new HtmlWebpackPlugin({
    template:'./public/index.html',
    filename:'index.html'
  })],
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:['babel-loader','eslint-loader']
      },
      {
        test:/\.s?css/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  }
}