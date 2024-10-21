import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-hotel-blog-domain.com',
  integrations: [sitemap()],
});