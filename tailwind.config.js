const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			...colors,
			transparent: "transparent",
			primary: "#0070f3",
			gray: colors.slate,
			secondary: "#ff4081",
			tertiary: "#f50057",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
