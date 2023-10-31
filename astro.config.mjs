import { defineConfig } from "astro/config";
// import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/config";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import embed from "astro-embed/integration";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  // output: "server",
  // adapter: netlify(),
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  integrations: [
    embed(),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
  // build: {
  //     rollupOptions: {
  //       external: 'NonExistingPath'
  //     }
  //   },
});
