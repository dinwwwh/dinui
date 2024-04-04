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
  font: {
    google: 'Inter',
  },
  iconUrl: '/avatar-d.svg',
  title: 'DinUI',
  description:
    'Beautifully designed React components that you can install or copy and paste into your apps. Accessible. Customizable. Open Source.',
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
        {
          text: 'Theming',
          link: '/theming',
        },
        {
          text: 'Figma',
          link: '/figma',
        },
        {
          text: 'Typography',
          link: '/typography',
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
          text: 'Avatar',
          link: '/ui/avatar',
        },
        {
          text: 'Badge',
          link: '/ui/badge',
        },
        {
          text: 'Breadcrumb',
          link: '/ui/breadcrumb',
        },
        {
          text: 'Button',
          link: '/ui/button',
        },
        {
          text: 'Calendar',
          link: '/ui/calendar',
        },
        {
          text: 'Card',
          link: '/ui/card',
        },
        {
          text: 'Carousel',
          link: '/ui/carousel',
        },
        {
          text: 'Checkbox',
          link: '/ui/checkbox',
        },
        {
          text: 'Collapsible',
          link: '/ui/collapsible',
        },
        {
          text: 'Combobox',
          link: '/ui/combobox',
        },
        {
          text: 'Command',
          link: '/ui/command',
        },
        {
          text: 'Context Menu',
          link: '/ui/context-menu',
        },
        {
          text: 'Data Table',
          link: '/ui/data-table',
        },
        {
          text: 'Date Picker',
          link: '/ui/date-picker',
        },
        {
          text: 'Dialog',
          link: '/ui/dialog',
        },
        {
          text: 'Drawer',
          link: '/ui/drawer',
        },
        {
          text: 'Dropdown Menu',
          link: '/ui/dropdown-menu',
        },
        {
          text: 'Form',
          link: '/ui/form',
        },
        {
          text: 'Hover Card',
          link: '/ui/hover-card',
        },
        {
          text: 'Input OTP',
          link: '/ui/input-otp',
        },
        {
          text: 'Input',
          link: '/ui/input',
        },
        {
          text: 'Label',
          link: '/ui/label',
        },
        {
          text: 'Menubar',
          link: '/ui/menubar',
        },
        {
          text: 'Navigation Menu',
          link: '/ui/navigation-menu',
        },
        {
          text: 'Pagination',
          link: '/ui/pagination',
        },
        {
          text: 'Popover',
          link: '/ui/popover',
        },
        {
          text: 'Progress',
          link: '/ui/progress',
        },
        {
          text: 'Radio Group',
          link: '/ui/radio-group',
        },
        {
          text: 'Resizable',
          link: '/ui/resizable',
        },
        {
          text: 'Scroll Area',
          link: '/ui/scroll-area',
        },
        {
          text: 'Select',
          link: '/ui/select',
        },
        {
          text: 'Separator',
          link: '/ui/separator',
        },
        {
          text: 'Sheet',
          link: '/ui/sheet',
        },
        {
          text: 'Skeleton',
          link: '/ui/skeleton',
        },
        {
          text: 'Slider',
          link: '/ui/slider',
        },
        {
          text: 'Sonner',
          link: '/ui/sonner',
        },
        {
          text: 'Switch',
          link: '/ui/switch',
        },
        {
          text: 'Table',
          link: '/ui/table',
        },
        {
          text: 'Tabs',
          link: '/ui/tabs',
        },
        {
          text: 'Textarea',
          link: '/ui/textarea',
        },
        {
          text: 'Toast',
          link: '/ui/toast',
        },
        {
          text: 'Toggle Group',
          link: '/ui/toggle-group',
        },
        {
          text: 'Toggle',
          link: '/ui/toggle',
        },
        {
          text: 'Tooltip',
          link: '/ui/tooltip',
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
    {
      text: 'Examples',
      link: '/examples/mail',
    },
  ],
})
