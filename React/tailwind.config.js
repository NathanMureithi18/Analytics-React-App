/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans React files
		"./node_modules/flowbite/**/*.js", // Add Flowbite components
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("flowbite/plugin"), // Enable Flowbite as a plugin
	],
};
