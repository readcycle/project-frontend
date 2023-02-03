/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: "#1d3557",
			},
			borderWidth: {
				'1': '1px'
			},
			borderRadius: {
				circular: "50%",
			},
		},
		fontFamily: {},
	},
	plugins: [],
};
