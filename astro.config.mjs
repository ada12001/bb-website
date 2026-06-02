// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the production Vercel/custom domain once connected.
export default defineConfig({
  site: 'https://bb-website.vercel.app',
  integrations: [sitemap()],
  image: {
    // allow large brand renders through Astro's image service
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
