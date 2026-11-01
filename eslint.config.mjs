import { defineConfig } from "eslint/config";
import base from "@packages/config/eslint";
import react from "@packages/config/eslint/react";
import node from "@packages/config/eslint/node";

export default defineConfig(
  base,
  {
    files: [
      "apps/admin/src/**/*.{js,jsx,ts,tsx}",
      "apps/candidate/src/**/*.{js,jsx,ts,tsx}",
      "packages/ui/src/**/*.{js,jsx,ts,tsx}",
    ],
    extends: [react],
  },
  {
    files: [
      "apps/backend/**/*.{js,mjs,cjs,ts,mts,cts}",
      "**/*.config.{js,mjs,cjs,ts,mts,cts}",
      "packages/config/**/*.{js,mjs,cjs}",
    ],
    extends: [node],
  },
);
