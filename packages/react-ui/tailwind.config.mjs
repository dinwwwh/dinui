import colors from 'tailwindcss/colors'
import defaultConfig from 'tailwindcss/defaultConfig'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/@dinui/react/src/**/*.{tsx,ts}'],
  theme: {
    // STRICT Mode
    colors: {
      wwhite: colors.white,
      wblack: colors.black,

      wgray: colors.neutral,
      wbrand: colors.violet,
      werror: colors.red,
      wwarning: colors.amber,
      wsuccess: colors.green,
    },

    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultConfig.theme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
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
  plugins: [require('tailwindcss-animate')],
}
