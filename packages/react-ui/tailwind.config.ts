import { createThemes } from './src/tailwind'
import { mapKeys, pick } from 'radash'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const themes = createThemes([
  {
    name: 'light',
    selectors: ['[data-theme=light]'],
    colors: {
      'bg': colors.neutral[50],
      'bg--contrast': colors.white,
      'bg--hover': colors.neutral[100],
      'bg--active': colors.neutral[100],
      'bg--muted': colors.neutral[200],

      'fg': colors.neutral[900],
      'fg-weak': colors.neutral[700],
      'fg-weak--hover': colors.neutral[800],
      'fg-weaker': colors.neutral[500],
      'fg-weaker--hover': colors.neutral[600],

      'fg-brand': colors.indigo[600],
      'fg-brand--hover': colors.indigo[700],

      'fg-danger': colors.rose[600],
      'fg-danger--hover': colors.rose[700],

      'border': colors.neutral[200],
      'outline': colors.indigo[500] + '66' /** 40% opacity in hash color */,

      'surface': {
        bg: colors.white,
      },

      'brand': {
        'bg': colors.indigo[500],
        'bg--hover': colors.indigo[600],

        'fg': colors.white,
      },

      'danger': {
        'bg': colors.rose[500],
        'bg--hover': colors.rose[600],

        'fg': colors.white,
      },

      'reverse': {
        bg: colors.neutral[950],
        fg: colors.neutral[50],
      },

      ...mapKeys(
        pick(colors.indigo, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-brand-' + key,
      ),
      ...mapKeys(
        pick(colors.rose, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-danger-' + key,
      ),
      ...mapKeys(
        pick(colors.neutral, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-gray-' + key,
      ),
      ...mapKeys(
        pick(colors.blue, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-blue-' + key,
      ),
      ...mapKeys(
        pick(colors.pink, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-pink-' + key,
      ),
      ...mapKeys(
        pick(colors.orange, ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-orange-' + key,
      ),
    },
  },
  {
    name: 'dark',
    selectors: ['[data-theme=dark]'],
    colors: {
      'bg': colors.neutral[950],
      'bg--contrast': colors.neutral[900],
      'bg--hover': colors.neutral[700],
      'bg--active': colors.neutral[800],
      'bg--muted': colors.neutral[600],

      'fg': colors.neutral[50],
      'fg-weak': colors.neutral[200],
      'fg-weak--hover': colors.neutral[100],
      'fg-weaker': colors.neutral[400],
      'fg-weaker--hover': colors.neutral[300],

      'fg-brand': colors.indigo[400],
      'fg-brand--hover': colors.indigo[300],

      'fg-danger': colors.rose[400],
      'fg-danger--hover': colors.rose[300],

      'border': colors.neutral[800],
      'outline': colors.indigo[500] + '66' /** 40% opacity in hash color */,

      'surface': {
        bg: colors.neutral[900],
      },

      'brand': {
        'bg': colors.indigo[500],
        'bg--hover': colors.indigo[400],

        'fg': colors.white,
      },

      'danger': {
        'bg': colors.rose[500],
        'bg--hover': colors.rose[400],

        'fg': colors.white,
      },

      'reverse': {
        bg: colors.neutral[50],
        fg: colors.neutral[900],
      },

      ...mapKeys(
        pick(reverseValues(colors.indigo), ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-brand-' + key,
      ),
      ...mapKeys(
        pick(reverseValues(colors.rose), ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-danger-' + key,
      ),
      ...mapKeys(
        pick(reverseValues(colors.neutral), [
          '50',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
        ]),
        (key) => 'utility-gray-' + key,
      ),
      ...mapKeys(
        pick(reverseValues(colors.blue), ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-blue-' + key,
      ),
      ...mapKeys(
        pick(reverseValues(colors.pink), ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-pink-' + key,
      ),
      ...mapKeys(
        pick(reverseValues(colors.orange), ['50', '100', '200', '300', '400', '500', '600', '700']),
        (key) => 'utility-orange-' + key,
      ),
    },
  },
])

export default {
  content: ['./node_modules/@dinui/react/src/**/*.{tsx,ts}'],
  theme: {
    extend: {
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
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      transitionDuration: {
        DEFAULT: '200ms' /** default 150ms */,
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate'), themes],
} satisfies Config

function reverseValues(obj: Record<string | number, unknown>) {
  const keys = Object.keys(obj)
  const values = Object.values(obj).reverse()

  const result: Record<string | number, unknown> = {}

  for (const i in keys) {
    result[keys[i]] = values[i]
  }

  return result
}
