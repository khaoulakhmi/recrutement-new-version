// apps/admin/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // default, can omit
  server: {
    fs: {
      allow: ["../.."], // Allow serving files from one level up to the project root
    },
    port: 3000, // or any port you prefer
  },
  resolve: {
    alias: {
      // Optional: to resolve packages/ui easily
      "@packages/ui": "../../../packages/ui/src",
    },
  },
});
