import withDinui from '@dinui/react/tailwind/with-dinui'

export default withDinui({
  content: ['./layouts/**.tsx', './pages/**.tsx', './components/**.tsx', './examples/**.tsx'],
  theme: {
    // colors: {},
  },
  plugins: [],
})
