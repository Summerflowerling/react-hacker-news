const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://hn.algolia.com',
        changeOrigin: true,
      }
  }},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),


  ],
  resolve: {
    modules: [__dirname, "src", "server", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
