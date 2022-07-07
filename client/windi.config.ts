import { defineConfig, transform } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import typography from 'windicss/plugin/typography'

export default defineConfig({
	safelist: ['prose', 'prose-sm', 'm-auto'],
	darkMode: 'class',
	plugins: [typography, formsPlugin, transform('daisyui')],
	extract: {
		include: ['src/**/*.{js,jsx,ts,tsx}'],
		exclude: ['node_modules', '.git'],
	},
	theme: {
		extend: {},
	},
	daisyui: {
		darkTheme: 'night',
	},
})
