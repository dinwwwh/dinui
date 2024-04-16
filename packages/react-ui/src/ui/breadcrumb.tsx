import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={twMerge(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-wgray-500 sm:gap-2.5 dark:text-wgray-400',
      className,
    )}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={twMerge('inline-flex items-center gap-1.5', className)} {...props} />
  ),
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={twMerge(
        'transition-colors hover:text-wgray-950 dark:hover:text-wgray-50',
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={twMerge('font-normal text-wgray-950 dark:text-wgray-50', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={twMerge('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={twMerge('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'
