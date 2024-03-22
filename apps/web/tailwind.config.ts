import type { Config } from 'tailwindcss'

export default {
  content: ['./layouts/**.tsx', './pages/**.tsx', './components/**.tsx', './examples/**.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
