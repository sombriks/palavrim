require("dotenv-flow").config();
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { EnvironmentPlugin } = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.DEVTOOL,
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, process.env.STATIC_FOLDER),
    clean: true,
  },
  plugins: [
    new EnvironmentPlugin(["NODE_ENV", "API_BASE_URL"]),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/client/index.ejs",
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
