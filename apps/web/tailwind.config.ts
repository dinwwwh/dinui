import baseConfig from '../../packages/react-ui/tailwind.config'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultConfig from 'tailwindcss/defaultConfig'

export default {
  ...baseConfig,
  content: [...baseConfig.content, './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultConfig.theme?.fontFamily?.['sans']],
        mono: ['"JetBrains Mono Variable"', ...defaultConfig.theme?.fontFamily?.['mono']],
      },
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [...baseConfig.plugins, require('tailwind-scrollbar')],
} satisfies Config
