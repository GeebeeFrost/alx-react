const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./js/dashboard_main.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jp?g$/,
        use: ["file-loader", "image-webpack-loader"],
      },
    ],
  },
};
