import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter({
            strict: false, // Ignore dynamic routes
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/chenghan-sun.github.io' : '',
        },
        prerender: {
            entries: ['*'], // Ensure all pages are prerendered
        },
    },
};

export default config;
