import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://ui.dinwwwh.com',
  srcDir: '.',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    starlight({
      title: 'DinUI',
      social: {
        github: 'https://github.com/dinwwwh/dinui',
        'x.com': 'https://x.com/dinwwwh',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: {
            directory: 'getting-started',
          },
        },
        {
          label: 'UI',
          autogenerate: {
            directory: 'ui',
          },
        },
      ],
      customCss: ['./styles/globals.css'],
    }),
  ],
})
