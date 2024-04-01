import { ScrollArea } from '@dinui/react/scroll-area'
import { Footer } from '@web/components/footer'
import { Header } from '@web/components/header'
import { Outlet } from 'react-router-dom'
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

      <ScrollArea className="h-screen">
        <div className="min-h-screen">
          <div className="container">
            <div className="py-2 md:py-4">
              <Header />
            </div>
          </div>

          <div className="container">
            <Outlet />
          </div>
        </div>

        <div className="container">
          <div className="pt-16 pb-12">
            <Footer />
          </div>
        </div>
      </ScrollArea>
    </>
  )
}

export function MainErrorBoundary() {
  return 'TODO: Main Error Boundary'
}
