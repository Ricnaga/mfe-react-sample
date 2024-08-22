import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, _) => {
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
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;
