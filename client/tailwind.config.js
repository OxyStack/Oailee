/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	safelist: [
		{
			pattern: /./,
		},
	],
	// eslint-disable-next-line global-require
	plugins: [require('daisyui')],
}
