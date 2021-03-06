const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      scriptLoading: "blocking",
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  optimization: {
    minimize: true,
    minimizer: [`...`, new HTMLMinimizerPlugin()],
  },
};
