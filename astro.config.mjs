// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import swup from '@swup/astro';

export default defineConfig({
  vite: {
      server: {
        allowedHosts: [ 'mwvlhn-ip-109-233-92-75.tunnelmole.net' ],
      },
      plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [swup()],
});