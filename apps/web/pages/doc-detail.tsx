'use client'

import { ScrollArea } from '@dinui/react/scroll-area'
import { docs } from '@web/.velite'
import { DocSidebar } from '@web/components/doc/sidebar'
import { DocToc } from '@web/components/doc/toc'
import { MDXContent } from '@web/components/mdx-content'
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom'

export function loader({ params }: LoaderFunctionArgs) {
  const doc = docs.find((d) => `${params['category']}/${params['name']}` === d.relativePath)

  if (!doc) {
    throw new Error(`Doc does not exist: ${params['*']}`)
  }

  return {
    doc,
  }
}

export function Component() {
  const { doc } = useLoaderData() as Awaited<ReturnType<typeof loader>>

  return (
    <div className="container">
      <div className="flex gap-12">
        <aside className="hidden md:block w-[220px] lg:w-[240px] sticky top-[calc(4.25rem+1px)] self-start">
          <ScrollArea className="h-[calc(100vh-4.25rem)]">
            <div className="py-8">
              <DocSidebar />
            </div>
          </ScrollArea>
        </aside>

        <div className="py-8 flex-1">
          <MDXContent code={doc.code} />
        </div>

        <aside className="hidden md:block w-[220px] lg:w-[240px] sticky top-[calc(4.25rem+1px)] self-start">
          <ScrollArea className="h-[calc(100vh-4.25rem)]">
            <div className="py-8">
              <DocToc toc={doc.toc} />
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  )
}
