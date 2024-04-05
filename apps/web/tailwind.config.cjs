const tailwindColors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{html,md,mdx,tsx,js,jsx}',
    './components/**/*.{html,md,mdx,tsx,js,jsx}',
    './examples/**/*.{html,md,mdx,tsx,js,jsx}',
    './layout.tsx',
    './styles.css',
    './node_modules/@dinui/react/ui/**/*.{tsx,ts}',
    './node_modules/@dinui/react/utils.ts',
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray: tailwindColors.zinc,
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
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
}
