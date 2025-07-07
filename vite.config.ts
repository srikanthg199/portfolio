import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'src'),
			'@assets': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'attached_assets'),
		},
	},
	root: 'client',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},
});
