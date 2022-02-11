require("dotenv-flow").config();
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { EnvironmentPlugin, DefinePlugin } = require("webpack");

const client_env = {
  production: "production",
  development: "development",
  staging: "development",
};

module.exports = {
  mode: client_env[process.env.NODE_ENV],
  devtool: process.env.DEVTOOL,
  entry: "./src/client/main.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, process.env.STATIC_FOLDER),
    clean: true,
  },
  plugins: [
    new EnvironmentPlugin(["NODE_ENV", "API_BASE_URL"]),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
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
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
            ],
          },
          {
            use: ["vue-style-loader", "css-loader"],
          },
        ],
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
