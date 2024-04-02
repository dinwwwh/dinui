import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import { Outlet, useAsyncError, useRouteError } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

export function MainLayout() {
  return (
    <>
      <Head>
        <title>DinUI</title>
        <meta
          name="description"
          content="Untitled UI react components build on top of TailwindCSS"
        />
        <meta
          name="keywords"
          content="React, React UI Components, Untitled UI, Untitled UI React, React UI Kits"
        />
        <meta name="author" content="Din" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="light">
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export function MainErrorBoundary() {
  const error = useRouteError()
  const asyncError = useAsyncError()

  useEffect(() => {
    error && console.error([error])
    asyncError && console.error(asyncError)
  }, [error, asyncError])

  return 'TODO: Main Error Boundary'
}
