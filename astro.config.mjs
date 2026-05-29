// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://krallice.com',

  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});