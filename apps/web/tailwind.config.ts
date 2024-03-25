import type { Config } from 'tailwindcss'
import tailwindColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './layouts/**.tsx',
    './pages/**.tsx',
    './components/**.tsx',
    './examples/**.tsx',
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
    },
  },
  plugins: [],
} satisfies Config
