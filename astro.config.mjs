// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://OSIX-Tech.github.io',
  base: '/Opillsv2',
  integrations: [tailwind()]
});