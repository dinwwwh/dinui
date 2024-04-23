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
      transitionDuration: {
        DEFAULT: '200ms' /** default 150ms */,
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
              '600': colors.neutral[400],
              '500': colors.neutral[500],
            },
            wbrand: {
              '600': colors.teal[400],
            },
            wdanger: {
              '600': colors.rose[400],
            },
          },
          backgroundColor: {
            wwhite: colors.neutral[950],
            wgray: {
              '50': colors.neutral[900],
            },
          },
          borderColor: {
            wgray: {
              '200': colors.neutral[800],
            },
          },
          outlineColor: {
            wbrand: {
              '500': colors.teal[500],
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
                '600': colors.neutral[600],
                '500': colors.neutral[500],
              },
              wbrand: {
                '600': colors.teal[600],
              },
              wdanger: {
                '600': colors.rose[600],
              },
            },
            backgroundColor: {
              wwhite: colors.white,
              wgray: {
                '50': colors.neutral[50],
              },
            },
            borderColor: {
              wgray: {
                '200': colors.neutral[200],
              },
            },
            outlineColor: {
              wbrand: {
                '500': colors.teal[500],
              },
            },
          },
        },
      ],
    }),
  ],
} satisfies Config
