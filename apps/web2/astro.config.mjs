import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ui.dinwwwh.com',
  srcDir: '.',
  integrations: [starlight({
    title: 'DinUI',
    social: {
      github: 'https://github.com/dinwwwh/dinui',
      'x.com': 'https://x.com/dinwwwh'
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting-started'
      }
    }, {
      label: 'UI',
      autogenerate: {
        directory: 'ui'
      }
    }]
  }), react()]
});