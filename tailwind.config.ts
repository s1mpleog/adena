import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'noto-sans-jp': ['"Noto Sans JP"', 'sans-serif'],
				garamond: ['"EB Garamond"', 'serif']
			},
			colors: {
				light_pink: '#EDEAFE',
				light_brown: '#666666',
				light_blue: '#9FCBF4',
				gr_pink: '#EAD8FC',
				blue_background: '#6E95B8'
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('daisyui')]
} as Config;
