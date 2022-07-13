module.exports = {
	mode: 'jit',
	content: ['node_modules/daisyui/dist/**/*.js'],
	safelist: [
		{
			pattern: /./,
		},
	],
	theme: {
		extend: {
			colors: {
				primary: '#7551FF',
				'primary-light': '#00a0f3',
				'primary-dark': '#0050f3',
			},
			screens: {
				tablet: '640px',

				laptop: '1024px',

				desktop: '1280px',
			},
			borderRadius: {
				'3xl': '8rem',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},

	// eslint-disable-next-line global-require
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night', 'light'],
	},
}
