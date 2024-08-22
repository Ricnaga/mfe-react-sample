import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shellVite",
      remotes: {
        '@mfe-react/remote-react-vite': "http://localhost:4001/assets/remoteEntry.js",
      },
      shared: Object.keys(dependencies),
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4000,
  },
});
