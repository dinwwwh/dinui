import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Doc } from '@web/.velite'
import { buttonVariants } from '@web/components/ui/button'
import { docsConfig } from '@web/config/docs'
import { cn } from '@web/lib/utils'
import { Link } from 'vite-react-ssg'

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link to={pager.prev.href} className={cn(buttonVariants({ variant: 'ghost' }))}>
          <ChevronLeftIcon className="mr-2 size-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link to={pager.next.href} className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}>
          {pager.next.title}
          <ChevronRightIcon className="ml-2 size-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex((link) => doc.pathName === link?.href)
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null
  return {
    prev,
    next,
  }
}

export function flatten(nav: typeof docsConfig.sidebarNav) {
  const links: { href: string; title: string }[] = []

  for (const navItem of nav) {
    links.push(...navItem.items)
  }

  return links
}
