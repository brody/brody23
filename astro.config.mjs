import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { SITE } from './src/config'
import react from '@astrojs/react'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	markdown: {
		rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
	},
	vite: {
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
	integrations: [
		mdx(),
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	// build: {
	//     rollupOptions: {
	//       external: 'NonExistingPath'
	//     }
	//   },
})
