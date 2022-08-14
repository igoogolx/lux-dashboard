const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const isDev = env.NODE_ENV === "development";
  return {
    optimization: {
      minimize: false,
    },
    entry: path.resolve(__dirname, "..", "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "..", "dist"),
      filename: "bundle.js",
      clean: {
        dry: true,
      },
    },
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.svg/,
          type: "asset/resource",
          generator: {
            filename: "static/[hash][ext][query]",
          },
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              allowTsInNodeModules: true,
              happyPackMode: !isDev
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
            "postcss-loader",
          ],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64]",
                },
              },
            },
            "postcss-loader",
          ],
          include: /\.module\.css$/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "src", "index.html"),
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      }),
    ],
  };
};
