import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			cursor: {
				'view-pointer': '(/images/CustomPointer.png), pointer',
			  },
			colors: {
				"highlight-bg": "#16a34a", // Custom highlight background color
				"highlight-text": "#f4f4f5", // Custom highlight text color
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				blob: "blob 7s infinite",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},

				blob: {
					"0%": {
						transform: "translate( 0px,0px) scale(1)",
					},
					"33%": {
						transform: "translate( 40px,-20px) scale(1.1)",
					},
					"66%": {
						transform: "translate( -20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate( 0px,0px) scale(1)",
					},
				},
			},
		},
	},
	variants: {
		extend: {
		  cursor: ['hover'], // Enables hover state for the custom cursor
		},
	  },
	plugins: [],
};
export default config;
