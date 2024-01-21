const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    // fallback : { "process/browser" : require.resolve('process/browser')} //for .env
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  plugins: [
    new Dotenv(), // for .env variables
    new HtmlWebpack({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },


      //rules for css files 
      //it needed for css file
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
