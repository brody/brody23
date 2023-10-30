import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/config";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import embeds from "astro-embed/integration";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    embeds(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    react(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
  // build: {
  //     rollupOptions: {
  //       external: 'NonExistingPath'
  //     }
  //   },
});
