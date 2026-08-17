import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }],
  },
});