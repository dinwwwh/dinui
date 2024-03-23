'use client'

import { docs } from '@web/.velite'
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
    <div className="py-8 container">
      <MDXContent code={doc.code} />
    </div>
  )
}
