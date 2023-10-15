import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/config";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js", "Book.astro", "Source.astro"] 
    }
  },
  // build: {
  //     rollupOptions: {
  //       external: 'NonExistingPath'
  //     }
  //   },
});