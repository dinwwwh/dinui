import { Slot } from '@radix-ui/react-slot'
import { IconChevronRight, IconDots } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const breadcrumb = tv({
  slots: {
    root: null,
    list: 'flex flex-wrap items-center gap-1.5 sm:gap-2.5',
    item: 'inline-flex items-center gap-1.5',
    ellipsis: 'flex items-center justify-center',
    ellipsisIcon: 'size-4',
    itemLink: 'break-words text-sm text-fg-weaker transition hover:text-fg-weaker--hover',
    itemPage: 'break-words text-sm text-fg',
    itemSeparator: 'size-3.5',
  },
})

const BreadcrumbRoot = forwardRef<
  React.ElementRef<'nav'>,
  Merge<
    React.ComponentPropsWithoutRef<'nav'>,
    {
      listProps?: React.ComponentProps<'ol'>
    }
  >
>(({ listProps, children, ...props }, ref) => {
  const { root, list } = breadcrumb()

  return (
    <nav
      aria-label="breadcrumb"
      {...props}
      ref={ref}
      className={root({ className: props.className })}
    >
      <ol {...listProps} className={list({ className: listProps?.className })}>
        {children}
      </ol>
    </nav>
  )
})
BreadcrumbRoot.displayName = 'BreadcrumbRoot'

const BreadcrumbItem = forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  (props, ref) => {
    const { item } = breadcrumb()

    return <li {...props} ref={ref} className={item({ className: props.className })} />
  },
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLinkItem = forwardRef<
  HTMLAnchorElement,
  Merge<
    React.ComponentPropsWithoutRef<'a'>,
    {
      itemProps?: React.ComponentProps<typeof BreadcrumbItem>
      asChild?: boolean
    }
  >
>(({ itemProps, asChild, ...props }, ref) => {
  const { itemLink } = breadcrumb()

  const Comp = asChild ? Slot : 'a'
  return (
    <BreadcrumbItem {...itemProps}>
      <Comp {...props} ref={ref} className={itemLink({ className: props.className })} />
    </BreadcrumbItem>
  )
})
BreadcrumbLinkItem.displayName = 'BreadcrumbLinkItem'

const BreadcrumbPageItem = forwardRef<
  HTMLSpanElement,
  Merge<
    React.ComponentPropsWithoutRef<'span'>,
    {
      itemProps?: React.ComponentProps<typeof BreadcrumbItem>
      asChild?: boolean
    }
  >
>(({ itemProps, asChild, ...props }, ref) => {
  const { itemPage } = breadcrumb()

  const Comp = asChild ? Slot : 'span'
  return (
    <BreadcrumbItem {...itemProps}>
      <Comp
        role="link"
        aria-disabled="true"
        aria-current="page"
        {...props}
        ref={ref}
        className={itemPage({ className: props.className })}
      />
    </BreadcrumbItem>
  )
})
BreadcrumbPageItem.displayName = 'BreadcrumbPageItem'

const BreadcrumbSeparatorItem = forwardRef<
  React.ComponentRef<typeof IconChevronRight>,
  Merge<
    React.ComponentPropsWithoutRef<typeof IconChevronRight>,
    {
      itemProps?: React.ComponentProps<typeof BreadcrumbItem>
    }
  >
>(({ itemProps, ...props }, ref) => {
  const { itemSeparator } = breadcrumb()

  return (
    <BreadcrumbItem role="presentation" aria-hidden="true" {...itemProps}>
      <Slot
        {...(props as React.HTMLAttributes<HTMLElement>)}
        ref={ref as React.ForwardedRef<HTMLElement>}
        className={itemSeparator({ className: props.className })}
      >
        {props.children ?? <IconChevronRight />}
      </Slot>
    </BreadcrumbItem>
  )
})
BreadcrumbSeparatorItem.displayName = 'BreadcrumbSeparatorItem'

const BreadcrumbEllipsis = forwardRef<
  HTMLSpanElement,
  Merge<
    React.ComponentPropsWithoutRef<'span'>,
    {
      iconProps?: React.ComponentProps<typeof IconDots>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { ellipsis, ellipsisIcon } = breadcrumb()

  return (
    <span
      role="presentation"
      aria-hidden="true"
      {...props}
      ref={ref}
      className={ellipsis({ className: props.className })}
    >
      <IconDots {...iconProps} className={ellipsisIcon({ className: iconProps?.className })} />
      <span className="sr-only">More</span>
    </span>
  )
})
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: Object.assign(BreadcrumbItem, {
    Ellipsis: BreadcrumbEllipsis,
  }),
  LinkItem: BreadcrumbLinkItem,
  PageItem: BreadcrumbPageItem,
  SeparatorItem: BreadcrumbSeparatorItem,
})

export default Breadcrumb
export { breadcrumb }
