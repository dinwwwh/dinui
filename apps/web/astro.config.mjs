import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { resolve } from 'path'

// https://astro.build/config
export default defineConfig({
  site: 'https://ui.dinwwwh.com',
  vite: {
    resolve: {
      alias: {
        '@dinui/react/utils': resolve(import.meta.dirname, '../../packages/react-ui/src/utils'),
        '@dinui/react': resolve(import.meta.dirname, '../../packages/react-ui/src/ui'),
      },
    },
  },
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
      editLink: {
        baseUrl: 'https://github.com/dinwwwh/dinui/tree/main/apps/web/',
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
      customCss: ['./src/styles/globals.css'],
    }),
  ],
})
