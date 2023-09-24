import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import uno from 'unocss/vite';

export default defineConfig({
	resolve: {
		alias: {
			'~/': './src/',
		},
	},
	plugins: [solid(), uno()],
});
