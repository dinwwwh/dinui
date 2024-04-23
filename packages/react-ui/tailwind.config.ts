import type { Config } from 'tailwindcss'
import multiThemePlugin from 'tailwindcss-themer'
import colors from 'tailwindcss/colors'

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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    multiThemePlugin({
      defaultTheme: {
        extend: {
          textColor: {
            wgray: {
              '900': colors.neutral[100],
              '800': colors.neutral[200],
              '700': colors.neutral[300],
              '500': colors.neutral[500],
            },
          },
          backgroundColor: {
            wgray: {
              '50': colors.neutral[950],
            },
          },
          borderColor: {
            wgray: {
              '200': colors.neutral[800],
            },
          },
        },
      },
      themes: [
        {
          name: 'light',
          selectors: [":root[data-theme='light']"],
          extend: {
            textColor: {
              wgray: {
                '900': colors.neutral[900],
                '800': colors.neutral[800],
                '700': colors.neutral[700],
                '500': colors.neutral[500],
              },
            },
            backgroundColor: {
              wgray: {
                '50': colors.neutral[50],
              },
            },
            borderColor: {
              wgray: {
                '200': colors.neutral[200],
              },
            },
          },
        },
      ],
    }),
  ],
} satisfies Config
