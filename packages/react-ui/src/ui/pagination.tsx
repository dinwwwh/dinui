import { button } from './button'
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

export const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={twMerge('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={twMerge('flex flex-row items-center gap-1', className)} {...props} />
  ),
)
PaginationContent.displayName = 'PaginationContent'

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={twMerge('', className)} {...props} />,
)
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<VariantProps<typeof button>, 'size'> &
  React.ComponentProps<'a'>

export const PaginationLink = ({
  className,
  isActive,
  size = 'md',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={button({
      variant: isActive ? 'outline' : 'ghost',
      size,
      icon: true,
    }).root({
      className,
    })}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={twMerge('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={twMerge('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={twMerge('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'
