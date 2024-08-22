import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration, container } from "webpack";
import { presets } from "../babel.config";
import { dependencies } from "../package.json";

const extensions = [".js", ".jsx", ".json", ".ts", ".tsx"];

const config: Configuration = {
  entry: path.join(process.cwd(), "src", "index.tsx"),
  output: {
    path: path.join(process.cwd(), "build"),
    filename: "[name]-[contenthash].bundle.js",
  },
  resolve: {
    alias: {
      "@screens": path.join(process.cwd(), "src", "screens"),
      "@shared": path.join(process.cwd(), "src", "shared"),
      "@application": path.join(process.cwd(), "src", "application"),
    },
    plugins: [
      new TsconfigPathsPlugin({
        baseUrl: path.join(process.cwd(), "src"),
        extensions,
      }),
    ],
    extensions,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "shellWebpack",
      remotes: {
        "@mfe-react/remote-react-webpack": "remoteWebpack@http://localhost:5001/remoteEntry.js",
      },
      shared: [
        {
          ...dependencies,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ttf|woff)$/,
        use: ["file-loader"],
      },
    ],
  },
};

export default config;
