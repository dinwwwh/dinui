import starlightPlugin from '@astrojs/starlight-tailwind'
import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight'
import colors from 'tailwindcss/colors'
import defaultConfig from 'tailwindcss/defaultConfig'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './content/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './examples/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './styles/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@dinui/react/ui/**/*.{tsx,ts}',
    './node_modules/@dinui/react/utils.ts',
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
    require('tailwind-scrollbar'),
  ],
}
