import { button } from './button'
import * as HeadlessNavigationMenu from '@radix-ui/react-navigation-menu'
import { IconChevronDown } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const navigationMenu = tv({
  slots: {
    root: 'relative',
    list: 'flex items-center gap-1',
    viewport: [
      'transition-all absolute right-1/2 translate-x-1/2 top-full mt-1.5 z-10',
      'origin-top-center overflow-hidden h-[var(--radix-navigation-menu-viewport-height)] w-full md:w-[var(--radix-navigation-menu-viewport-width)]',
      'rounded-md border bg-bg--contrast shadow',
      'data-[state=open]:animate-in data-[state=open]:slide-in-from-right-1/2',
      'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-1/2',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    ],
    trigger: button({ variant: 'ghost' }).root({
      className: ['group data-[state=open]:bg-bg--active'],
    }),
    triggerIcon: button({ variant: 'ghost' }).rightIcon({
      className: ['transition duration-300 group-data-[state=open]:rotate-180'],
    }),
    content: [
      'absolute left-0 top-0 w-full md:w-auto',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
    ],
    indicator: [
      'transition duration-300 data-[state=visible]:animate-in data-[state=hidden]:animate-out',
      'top-full z-[11] flex h-1.5 items-end justify-center data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      'after:content-[""] after:relative after:top-2/3 after:size-2 after:rotate-45',
      'after:rounded-tl-sm after:bg-bg--contrast after:border-t after:border-l',
    ],
    link: 'text-sm font-medium leading-none block select-none rounded-md p-3 leading-none transition-colors hover:bg-bg--hover data-[active]:bg-bg--active',
    linkDescription: 'mt-1 line-clamp-2 text-sm leading-snug text-fg-weaker',
  },
})

const NavigationMenuRoot = forwardRef<
  React.ElementRef<typeof HeadlessNavigationMenu.List>,
  Merge<
    React.ComponentPropsWithoutRef<typeof HeadlessNavigationMenu.Root>,
    {
      listProps?: React.ComponentProps<typeof HeadlessNavigationMenu.List>
      viewportProps?: React.ComponentProps<typeof HeadlessNavigationMenu.Viewport>
      indicatorProps?: React.ComponentProps<typeof HeadlessNavigationMenu.Indicator>
    }
  >
>(({ listProps, viewportProps, indicatorProps, children, ...props }, ref) => {
  const { root, list, viewport, indicator } = navigationMenu()

  return (
    <HeadlessNavigationMenu.Root
      {...props}
      ref={ref}
      className={root({ className: props.className })}
    >
      <HeadlessNavigationMenu.List
        {...listProps}
        className={list({ className: listProps?.className })}
      >
        {children}

        <HeadlessNavigationMenu.Indicator
          {...indicatorProps}
          className={indicator({ className: indicatorProps?.className })}
        />
      </HeadlessNavigationMenu.List>

      <HeadlessNavigationMenu.Viewport
        {...viewportProps}
        className={viewport({ className: viewportProps?.className })}
      />
    </HeadlessNavigationMenu.Root>
  )
})
NavigationMenuRoot.displayName = HeadlessNavigationMenu.Root.displayName

const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof HeadlessNavigationMenu.Trigger>,
  Merge<
    React.ComponentPropsWithoutRef<typeof HeadlessNavigationMenu.Trigger>,
    {
      iconProps?: React.ComponentProps<typeof IconChevronDown>
    }
  >
>(({ iconProps, children, ...props }, ref) => {
  const { trigger, triggerIcon } = navigationMenu()

  return (
    <HeadlessNavigationMenu.Trigger
      {...props}
      ref={ref}
      className={trigger({ className: props.className })}
    >
      {children}

      <IconChevronDown
        aria-hidden="true"
        {...iconProps}
        className={triggerIcon({ className: iconProps?.className })}
      />
    </HeadlessNavigationMenu.Trigger>
  )
})
NavigationMenuTrigger.displayName = HeadlessNavigationMenu.Trigger.displayName

const NavigationMenuLinkItem = forwardRef<
  React.ElementRef<typeof HeadlessNavigationMenu.Link>,
  Merge<
    React.ComponentPropsWithoutRef<typeof HeadlessNavigationMenu.Link>,
    {
      itemProps?: React.ComponentProps<typeof HeadlessNavigationMenu.Item>
    }
  >
>(({ itemProps, ...props }, ref) => {
  const { trigger } = navigationMenu()

  return (
    <HeadlessNavigationMenu.Item {...itemProps}>
      <HeadlessNavigationMenu.Link
        {...props}
        ref={ref}
        className={trigger({ className: props.className })}
      />
    </HeadlessNavigationMenu.Item>
  )
})
NavigationMenuLinkItem.displayName = 'NavigationMenuLinkItem'

const NavigationMenuLink = forwardRef<
  React.ElementRef<typeof HeadlessNavigationMenu.Link>,
  React.ComponentPropsWithoutRef<typeof HeadlessNavigationMenu.Link>
>((props, ref) => {
  const { link } = navigationMenu()

  return (
    <HeadlessNavigationMenu.Link
      {...props}
      ref={ref}
      className={link({ className: props.className })}
    />
  )
})
NavigationMenuLink.displayName = 'NavigationMenuLink'

const NavigationMenuLinkDescription = forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'>
>((props, ref) => {
  const { linkDescription } = navigationMenu()

  return <p {...props} ref={ref} className={linkDescription({ className: props.className })} />
})
NavigationMenuLinkDescription.displayName = 'NavigationMenuLinkDescription'

const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof HeadlessNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof HeadlessNavigationMenu.Content>
>((props, ref) => {
  const { content } = navigationMenu()

  return (
    <HeadlessNavigationMenu.Content
      {...props}
      ref={ref}
      className={content({ className: props.className })}
    />
  )
})
NavigationMenuContent.displayName = HeadlessNavigationMenu.Content.displayName

const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: HeadlessNavigationMenu.Item,
  LinkItem: NavigationMenuLinkItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Link: Object.assign(NavigationMenuLink, {
    Description: NavigationMenuLinkDescription,
  }),
})

export default NavigationMenu
export { navigationMenu, HeadlessNavigationMenu }
