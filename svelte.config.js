import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: null
	  }),
	  paths: {
		base: '', // Leave it empty for root-level hosting
	  },
	  appDir: '_app'
	}
  };

// export default config;
export default {
	kit: {
	  adapter: adapter({
		fallback: 'index.html', // This will serve `index.html` for unknown routes
	  }),
	},
  };

