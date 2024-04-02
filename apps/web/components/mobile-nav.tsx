'use client'

import { Logo } from './logo'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { docsConfig } from '@web/config/docs'
import { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'vite-react-ssg'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link to="/" className="flex items-center">
          <Logo className="h-7" />
          <span className="sr-only">Homepage</span>
        </Link>
        <ScrollArea className="my-6 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <Link key={item.href} to={item.href}>
                    {item.title}
                  </Link>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item) => (
              <div key={item.title} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item.items.length &&
                  item.items.map((item) => (
                    <Fragment key={item.href}>
                      {('disabled' in item ? !item.disabled : true) &&
                        (item.href ? (
                          <Link to={item.href} className="text-gray-700">
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </Link>
                        ) : (
                          item.title
                        ))}
                    </Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
