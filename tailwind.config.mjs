/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		ld: "960px",
		xl: "1200px",
	  },
	  fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	  },
	  extend: {
		colors: {
		  primary: "#1c1c22",  // Cor principal
		  accent: {
			DEFAULT: "#00FF99",  // Cor de destaque
			hover: "#00e187",    // Cor ao passar o mouse
		  },
		  customColor: "#00a1ff", // Cor personalizada (exemplo)
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  