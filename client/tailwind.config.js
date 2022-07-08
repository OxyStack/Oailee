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
				// => @media (min-width: 640px) { ... }

				laptop: '1024px',
				// => @media (min-width: 1024px) { ... }

				desktop: '1280px',
				// => @media (min-width: 1280px) { ... }
			},
		},
	},

	// eslint-disable-next-line global-require
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night', 'light'],
	},
}
