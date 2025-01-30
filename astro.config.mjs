import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';


import image from '@astrojs/image';


// https://astro.build/config
export default defineConfig({
  site: 'https://aviation-notebook.tinkernerd.com',
  trailingSlash: 'never',
  integrations: [
    expressiveCode(expressiveCodeOptions),
    sitemap(),
    mdx(),
    icon(),
    image()
  ],
  prefetch: true,
  adapter: vercel()
});