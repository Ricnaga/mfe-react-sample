import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4001,
  },
  plugins: [
    react(),
    federation({
      name: "remote_vite",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
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
  preview: {
    port: 4001,
    strictPort: true,
  },
});
