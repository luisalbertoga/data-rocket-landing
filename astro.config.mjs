// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },
  output: 'static',
  site: 'https://luisalberto.github.io',
  base: '/data-rocket-landing'
});