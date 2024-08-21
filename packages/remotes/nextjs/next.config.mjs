import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteNextjs",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./src/pages",
        },
      })
    );

    return config;
  },
};

export default nextConfig;
