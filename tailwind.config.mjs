export default {
	content: ["./src/**/*.{html,js,astro}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				text: {
					primary: "var(--color-text-primary)",
					secondary: "var(--color-text-secondary)",
					tertiary: "var(--color-text-tertiary)",
				},
				bg: {
					default: "var(--color-bg-default)",
					muted: "var(--color-bg-muted)",
					card: "var(--color-bg-card)",
				},
				border: {
					default: "var(--color-border-default)",
					muted: "var(--color-border-muted)",
				},
				hover: {
					primary: "var(--color-hover-primary)",
					muted: "var(--color-hover-muted)",
				},
				accent: "var(--color-span-accent)",
			},
		},
	},
	plugins: [],
}
