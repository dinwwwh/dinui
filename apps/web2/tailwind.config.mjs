import starlightPlugin from '@astrojs/starlight-tailwind'
import tailwindScrollbarPlugin from 'tailwind-scrollbar'
import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight'
import colors from 'tailwindcss/colors'
import defaultConfig from 'tailwindcss/defaultConfig'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@dinui/react/src/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultConfig.theme.fontFamily.sans],
        mono: ['"JetBrains Mono Variable"', ...defaultConfig.theme.fontFamily.mono],
      },
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    starlightPlugin(),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.not-content'),
    }),
    tailwindScrollbarPlugin,
  ],
}
