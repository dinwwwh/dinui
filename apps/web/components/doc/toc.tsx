'use client'

import { Button } from '@dinui/react/button'
import { cn } from '@dinui/react/utils'
import { docs } from '@web/.velite'
import * as React from 'react'
import { useMountedState } from 'react-use'

interface TocProps {
  toc: (typeof docs)[number]['toc']
}

export function DocToc({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc
        .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
        .flat()
        .map((id) => id.split('#')[1])
        .filter(Boolean),
    [toc],
  )
  const activeHeading = useActiveItem(itemIds)
  const mounted = useMountedState()

  if (!toc.length || !mounted) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` },
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: (typeof docs)[number]['toc']
  level?: number
  activeItem?: string
}

function Tree({ tree: tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn({ 'pl-4': level !== 1 })}>
      {tree.map((item) => {
        return (
          <li key={item.url} className={cn('mt-0 pt-2')}>
            <Button
              variant={'link-gray'}
              className={
                item.url === `#${activeItem}`
                  ? 'font-medium text-gray-800'
                  : 'font-normal text-gray-500'
              }
              asChild
            >
              <a href={item.url}>{item.title}</a>
            </Button>
            {item.items?.length ? (
              <Tree tree={item.items} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
