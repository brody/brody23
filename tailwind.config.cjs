/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			md: '68ch',
		},
		// extend: {
		textColor: {
			default: withOpacity('--color-text-default'),
			subtle: withOpacity('--color-text-subtle'),
			heading: withOpacity('--color-text-heading'),
			accent: withOpacity('--color-accent'),
			border: withOpacity('--color-border-default'),
			'accent-hover': withOpacity('--color-accent-hover'),
			// gradient: withOpacity('--color-gradient'),
		},
		backgroundColor: {
			default: withOpacity('--color-background-default'),
			subtle: withOpacity('--color-background-subtle'),
			selection: withOpacity('--color-text-default'),
			accent: withOpacity('--color-accent'),
			accentHover: withOpacity('--color-accent-hover'),
		},
		outlineColor: {
			default: withOpacity('--color-accent'),
		},
		borderColor: {
			default: withOpacity('--color-border-default'),
			accent: withOpacity('--color-accent'),
		},
		cursor: {
			default: 'var(--cursorDefault)',
			marker: 'var(--cursorMarker)',
			text: 'var(--cursorText)',
			pointer: 'var(--cursorPointer)',
		},
		// fill: {
		//     default: withOpacity('--color-text-default'),
		//     accent: withOpacity('--color-accent'),
		//   transparent: 'transparent',
		// },

		extend: {
			fontFamily: {
				body: [
					'Wotfard',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
				heading: [
					'AcidGrotesk',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
				code: ['MonoLisa', 'monaco', 'Consolas', 'Lucida Console', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
