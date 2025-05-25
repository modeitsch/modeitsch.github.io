import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/sveltekit-blog' : ''
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404s for missing paths during prerendering
                if (message.includes('404')) {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;