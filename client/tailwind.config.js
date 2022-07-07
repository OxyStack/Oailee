module.exports = {
	mode: 'jit',
	content: ['./*.html', './src/**/*.{js,ts,jsx,tsx,css}'],
	safelist: [
		{
			pattern: /./,
		},
	],
	theme: {
		extend: {},
	},

	// eslint-disable-next-line global-require
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night', 'light'],
	},
}
