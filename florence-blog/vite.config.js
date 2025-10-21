import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: "/src/js/main.js",
		},
	},
	plugins: [tailwindcss()],
});
