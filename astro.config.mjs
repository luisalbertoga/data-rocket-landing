// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/',
  vite: {
    plugins: [tailwind()],
    build: {
      sourcemap: false
    }
  }
});