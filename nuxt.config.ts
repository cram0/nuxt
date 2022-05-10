import { defineNuxtConfig } from "nuxt";
import dynamicImport from "vite-plugin-dynamic-import";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
		plugins: [dynamicImport()],
	},
});
