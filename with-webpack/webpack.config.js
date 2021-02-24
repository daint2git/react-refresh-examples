const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = (_, argv) => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: path.join(__dirname, "src"),
          use: "babel-loader",
        },
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/template.html",
      }),
    ].filter(Boolean),
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      hot: true,
    },
    devtool: false
  };
};
