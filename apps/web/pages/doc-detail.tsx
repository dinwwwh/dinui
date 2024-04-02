'use client'

import { ScrollArea } from '@dinui/react/scroll-area'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { docs } from '@web/.velite'
import { Mdx } from '@web/components/mdx-components'
import { DocsPager } from '@web/components/pager'
import { DashboardTableOfContents } from '@web/components/toc'
import { cn } from '@web/lib/utils'
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom'

export function loader({ params }: LoaderFunctionArgs) {
  const doc = docs.find((d) => `${params['*']}` === d.relativePath)

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
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-gray-700">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-gray-900">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
          {doc.description && (
            <p className="text-balance text-lg text-gray-700">{doc.description}</p>
          )}
        </div>
        {/* {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null} */}
        <div className="pb-12 pt-8">
          <Mdx code={doc.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={doc.toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
