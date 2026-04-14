import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://battlelinesdrawn.com',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
