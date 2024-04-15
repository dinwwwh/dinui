import starlightPlugin from '@astrojs/starlight-tailwind'
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
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    starlightPlugin(),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.twp'),
    }),
  ],
}
