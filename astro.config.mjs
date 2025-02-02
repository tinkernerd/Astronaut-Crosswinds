import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/data/site.config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  site: 'https://aviation-notebook.tinkernerd.com',
  trailingSlash: 'never',
  integrations: [
    expressiveCode(expressiveCodeOptions),
    sitemap(),
    mdx(),
    icon(),
  ],
  prefetch: true,
  adapter: vercel()
});