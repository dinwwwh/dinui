'use client'

import { ScrollArea, ScrollBar } from '@dinui/react/scroll-area'
import { cn } from '@dinui/react/utils'
import { useLocation, Link } from 'react-router-dom'

const examples = [
  {
    name: 'Mail',
    href: '/examples/mail',
  },
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
  },
  {
    name: 'Cards',
    href: '/examples/cards',
  },
  {
    name: 'Tasks',
    href: '/examples/tasks',
  },
  {
    name: 'Playground',
    href: '/examples/playground',
  },
  {
    name: 'Forms',
    href: '/examples/forms',
  },
  {
    name: 'Music',
    href: '/examples/music',
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
  },
]

export function PageExamplesNav({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { pathname } = useLocation()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn('mb-4 flex items-center', className)} {...props}>
          {examples.map((example, index) => (
            <Link
              to={example.href}
              key={example.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-gray-900 dark:hover:text-gray-50',
                pathname?.startsWith(example.href) || (index === 0 && pathname === '/')
                  ? 'bg-gray-100 font-medium text-gray-900 dark:hover:text-gray-900'
                  : 'text-gray-500',
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
