import path from "path";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import webpackMain from "./webpack.base";
import Dotenv from "dotenv-webpack";

import "webpack-dev-server";

const configDev: Configuration = merge(webpackMain, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 5001,
    compress: true,
    hot: true,
    historyApiFallback: true,
    static: path.join(process.cwd(), "public"),
    liveReload: true,
  },
  plugins: [
    new Dotenv({
      path: path.join(process.cwd(), ".env.development"),
      safe: true,
      allowEmptyValues: true,
      expand: true,
      systemvars: true,
    }),
  ],
});

export default configDev;
