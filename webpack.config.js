const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "public/")
    },
    port: 5000,
    // publicPath
    devMiddleware:{
      publicPath: "https://localhost:5000/dist/",
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};