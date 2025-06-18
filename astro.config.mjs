// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://tpu-kanglabs.github.io",
  base: "/ub-moji",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
});
