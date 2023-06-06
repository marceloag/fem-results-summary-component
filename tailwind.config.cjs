/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        lightred: "hsl(0, 100%, 67%)",
        orangeyellow: "hsl(39, 100%, 56%)",
        greenteal: "hsl(166, 100%, 37%)",
        cobaltblue: "hsl(234, 85%, 45%)",
				lightslateblue: "#7857FF",
				lightroyalblue: "#2E2BE9",
				paleblue: "hsl(221, 100%, 96%)",
				lightlavander: "hsl(241, 100%, 89%)",
				darkgreyblue: "hsl(224, 30%, 27%)",
				violetblue: "hsla(256, 72%, 46%, 1)",
				persianblue: "hsla(241, 72%, 46%, 0)"
			},
		},
	},
	plugins: [],
}
