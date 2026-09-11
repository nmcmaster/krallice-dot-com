// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import rehypeItalicize from './src/plugins/rehype-italicize.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://krallice.com',

  adapter: netlify(),

  markdown: {
    rehypePlugins: [rehypeItalicize],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});