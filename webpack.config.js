const path = require("path");
const webpack = require("webpack");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/sass/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: false,
    }),
  ],

  module: {
    rules: [
      {
        loader: "babel-loader",
        include: [
          // webpack-dev-server#1090 for Safari
          /node_modules\/webpack-dev-server/,
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
};
