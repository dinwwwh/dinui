import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://ui.dinwwwh.com',
  srcDir: '.',
  integrations: [
    starlight({
      title: 'DinUI',
      social: {
        github: 'https://github.com/dinwwwh/dinui',
        'x.com': 'https://x.com/dinwwwh',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
})
