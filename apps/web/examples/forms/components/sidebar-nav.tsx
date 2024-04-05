'use client'

import { button } from '@dinui/react/button'
import { cn } from '@dinui/react/utils'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}
      {...props}
    >
      {items.map((item, i) => (
        <a
          key={item.href}
          href={'#'}
          className={cn(
            button({ variant: 'ghost' }),
            i === 0
              ? 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900'
              : 'hover:bg-transparent hover:underline',
            'justify-start',
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}
