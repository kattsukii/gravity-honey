import { defineConfig, sharpImageService } from 'astro/config';

import { sitemap } from './intregations/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap(),
	],
	trailingSlash: 'always',
	scopedStyleStrategy: 'where',
	compressHTML: false,
	image: {
		domains: ['avatars.githubusercontent.com'],
		service: sharpImageService(),
	},
});
