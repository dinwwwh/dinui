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
        {
          text: 'Installation',
          link: '/installation',
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
        {
          text: 'Alert',
          link: '/ui/alert',
        },
        {
          text: 'Alert Dialog',
          link: '/ui/alert-dialog',
        },
        {
          text: 'Aspect Ratio',
          link: '/ui/aspect-ratio',
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
