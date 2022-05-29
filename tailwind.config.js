module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			theme: {
				colors: {
					primary: "#0070f3",
					secondary: "#ff4081",
					tertiary: "#f50057",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
