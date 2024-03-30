import type { Config } from 'tailwindcss'
import tailwindColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * This file used as an example and help improve DX on vscode
 */
export default {
  content: [
    './layouts/**.tsx',
    './pages/**.tsx',
    './components/**.tsx',
    './examples/**.tsx',
    './node_modules/@dinui/react/ui/**/*.tsx',
  ],
  theme: {
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
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
} satisfies Config
