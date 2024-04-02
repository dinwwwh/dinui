'use client'

import { docsConfig } from '@web/config/docs'
import { cn } from '@web/lib/utils'
import { useLocation } from 'react-router-dom'
import { Link } from 'vite-react-ssg'

export function DocsSidebarNav() {
  const { pathname } = useLocation()

  return (
    <div className="w-full">
      {docsConfig.sidebarNav.map((item) => (
        <div key={item.title} className={cn('pb-4')}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {item.items.map((item) => {
              const disabled = !!('disabled' in item ? item.disabled : false)
              const external = !!('external' in item ? item.external : false)

              return item.href && !disabled ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                    disabled && 'cursor-not-allowed opacity-60',
                    pathname === item.href ? 'font-medium text-gray-900' : 'text-gray-700',
                  )}
                  target={external ? '_blank' : ''}
                  rel={external ? 'noreferrer' : ''}
                >
                  {item.title}
                  {item.label && (
                    <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                      {item.label}
                    </span>
                  )}
                </Link>
              ) : (
                <span
                  key={item.href}
                  className={cn(
                    'flex w-full cursor-not-allowed items-center rounded-md p-2 text-gray-700 hover:underline',
                    disabled && 'cursor-not-allowed opacity-60',
                  )}
                >
                  {item.title}
                  {item.label && (
                    <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-gray-700 no-underline group-hover:no-underline">
                      {item.label}
                    </span>
                  )}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
