import AstroSitemap from '@astrojs/sitemap';
import type { AstroIntegration } from 'astro';
/** Set matching our `/[lang]/something.astro` redirect routes. */
const blocklist = new Set([
    '/install/',
	'/tutorial/'
]);


/** Match a pathname starting with “lighthouse” or one of our language tags. */
const ValidRouteRE = new RegExp(`^/(lighthouse)/`);

/** Test a pathname is not in our blocklist and starts with a valid prefix. */
const isValidPath = (path: string) => !blocklist.has(path) && ValidRouteRE.test(path);

/** Get a preconfigured instance of the `@astrojs/sitemap` integration. */
export function sitemap(): AstroIntegration {
	return AstroSitemap({
		filter: (page) => isValidPath(new URL(page).pathname),
	});
}