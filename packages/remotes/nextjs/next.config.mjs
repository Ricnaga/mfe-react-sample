import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    /** @type {import('webpack').Configuration} */
    config,
    _
  ) => {
    config.mode = "development";
    config.devtool = "inline-source-map";

    config.plugins.push(
      new NextFederationPlugin({
        name: "remote_nextjs",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./src/pages",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: "^18",
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: "^18",
            },
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;
