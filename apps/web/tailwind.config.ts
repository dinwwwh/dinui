import type { Config } from 'tailwindcss'
import tailwindColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './layouts/**/*.tsx',
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './examples/**/*.tsx',
    './index.html',
    './node_modules/@dinui/react/ui/**/*.tsx',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: tailwindColors.gray,
        brand: tailwindColors.violet,
        error: tailwindColors.red,
        warning: tailwindColors.amber,
        success: tailwindColors.green,
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
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
} satisfies Config
