const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var PrettierPlugin = require("prettier-webpack-plugin");
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'boundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
    template:'./public/index.html',
    filename:'index.html'
  }),
  new PrettierPlugin({
    printWidth: 80,               // Specify the length of line that the printer will wrap on.
    tabWidth: 2,                  // Specify the number of spaces per indentation-level.
    useTabs: false,               // Indent lines with tabs instead of spaces.
    semi: true,                   // Print semicolons at the ends of statements.
    encoding: 'utf-8',            // Which encoding scheme to use on files
    extensions: [ ".js", ".jsx" ]  // Which file extensions to process
  })
],
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