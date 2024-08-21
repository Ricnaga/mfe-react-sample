import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    remoteNextjs: `remoteNextjs@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shellNextjs",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

export default nextConfig;
