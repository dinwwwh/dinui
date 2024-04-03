import { resolve } from 'path'
import { defineConfig } from 'vocs'

export default defineConfig({
  rootDir: '.',
  vite: {
    resolve: {
      alias: {
        '@web': resolve(__dirname, './'),
        '@dinui/react/utils': resolve(__dirname, '../../packages/react-ui/utils'),
        '@dinui/react': resolve(__dirname, '../../packages/react-ui/ui'),
      },
    },
  },
  title: 'DinUI',
  sidebar: [
    {
      text: 'Getting Started',
      items: [
        {
          text: 'Introduction',
          link: '/introduction',
        },
      ],
    },
    {
      text: 'UI',
      items: [
        {
          text: 'Accordion',
          link: '/ui/accordion',
        },
      ],
    },
  ],
  topNav: [
    {
      text: 'Docs',
      link: '/introduction',
    },
    {
      text: 'Components',
      link: '/ui/accordion',
    },
  ],
})
