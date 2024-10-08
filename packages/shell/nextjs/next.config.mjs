import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    "@mfe-react/remote-nextjs": `remote_nextjs@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { webpack, isServer } = options;

    Object.assign(config.experiments, { topLevelAwait: true });

      config.plugins.push(
        new NextFederationPlugin({
          name: "shell_nextjs",
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
