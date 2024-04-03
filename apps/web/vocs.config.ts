import { defineConfig } from 'vocs'

export default defineConfig({
  rootDir: '.',
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
