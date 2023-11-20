var path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



const HTMLWebpackPluginConfig =   new HTMLWebpackPlugin(
    {
        template: 'src/index.js',
        filename: 'index.js',
        inject: 'body'
    }
);
/* exports */
module.exports = {
    entry :   { bundle : path.resolve(__dirname ,'/src/index.js') },
    mode : process.env.NODE_ENV || 'development',
    output:{
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: path.resolve(__dirname , './dist')
    },
    optimization: {
      chunkIds: "named",
      splitChunks: {
          chunks: "all",
          name: "vendors",
          minSize: 10000,
          maxSize: 250000,
        },
    },
    module:{
        rules:[{
            test:/\.(js|jsx|ts|tsx)$/,
            exclude : /node_modules/,
            loader: 'babel-loader',
            options: {presets:["@babel/preset-env","@babel/preset-react","@babel/preset-typescript"]}
        },
        {
            test: /\.(css)$/i,
            exclude : /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }   
        ] 
    },
    resolve: { extensions: [".*", ".ts",".tsx",".js", ".jsx"] },
   
    devServer: {
        port: 3000
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin() ,
        new MiniCssExtractPlugin()
    ]
};