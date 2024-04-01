'use client'

import { Button } from '@dinui/react/button'
import { useLocation } from 'react-router-dom'
import { Link } from 'vite-react-ssg'

// TODO: implement
const items = [
  {
    title: 'Getting Started',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'Forms',
    items: [
      {
        href: '/forms/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/forms/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/forms/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
  {
    title: 'UI',
    items: [
      {
        href: '/ui/accordion',
        disabled: true,
        external: false,
        title: 'Accordion',
      },
      {
        href: '/ui/badge',
        disabled: false,
        external: false,
        title: 'Badge',
      },
      {
        href: '/docs/ui/button',
        disabled: false,
        external: false,
        title: 'Button',
      },
    ],
  },
]

export function DocSidebar() {
  const location = useLocation()

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.title}>
          <h4 className="mb-1 rounded-md text-sm font-semibold">{item.title}</h4>
          <div className="pl-3 flex flex-col gap-2.5 items-start mt-2">
            {item.items.map((item) =>
              item.href && !item.disabled ? (
                <Button
                  key={item.href}
                  variant={item.href === location.pathname ? 'link-color' : 'link-gray'}
                  size={'sm'}
                  asChild
                >
                  <Link
                    to={item.href}
                    target={item.external ? '_blank' : ''}
                    rel={item.external ? 'noreferrer' : ''}
                  >
                    {item.title}
                    {/* {item.label && (
                    <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                      {item.label}
                    </span>
                  )} */}
                  </Link>
                </Button>
              ) : (
                <Button key={item.href} variant={'link-gray'} size={'sm'} disabled>
                  {item.title}
                  {/* {item.label && (
                    <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                      {item.label}
                    </span>
                  )} */}
                </Button>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
