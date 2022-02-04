const path = require("path");
require("dotenv").config();

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, process.env.STATIC_FOLDER),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/client/index.ejs"
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
  },
};
