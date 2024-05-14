'use client'

import { button } from './button'
import { separator } from './separator'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type * as _A from '@radix-ui/react-menu'
import { IconCheck, IconChevronRight, IconPoint } from '@tabler/icons-react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const baseItem = button({ size: 'sm', variant: 'ghost' }).root({
  className: [
    'flex justify-start',
    'w-full px-2 text-sm font-medium',
    'outline-none focus:bg-bg--active data-[state=open]:bg-bg--active',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
})

const baseContent = [
  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-bg--contrast p-1 shadow-md',
  'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
  'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
]

const dropdownMenu = tv({
  slots: {
    subTrigger: baseItem,
    subTriggerIcon: button({ size: 'sm', variant: 'ghost' }).rightIcon({ className: 'ml-auto' }),
    subContent: [baseContent, 'shadow-lg'],
    content: [baseContent, 'min-w-[12rem]'],
    item: baseItem,
    itemShortcut: 'ml-auto text-xs tracking-widest text-fg-weaker',
    checkboxItem: [baseItem, 'relative pl-8'],
    checkboxItemIndicatorIcon: 'absolute left-2 size-4',
    radioItem: [baseItem, 'relative pl-8'],
    radioItemIndicatorIcon: 'absolute left-2 size-4 fill-current',
    label: 'px-2 py-1.5 text-sm font-semibold',
    separator: separator({ variant: 'weak' }).root({ className: '-mx-1 my-1' }),
  },
  variants: {
    inset: {
      true: {
        subTrigger: 'pl-8',
        item: 'pl-8',
        label: 'pl-8',
      },
    },
  },
})

const DropdownMenuSubTrigger = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  Merge<
    Merge<
      React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
      VariantProps<typeof dropdownMenu>
    >,
    {
      iconProps?: React.ComponentProps<typeof IconChevronRight>
    }
  >
>(({ iconProps, inset, children, ...props }, ref) => {
  const { subTrigger, subTriggerIcon } = dropdownMenu({ inset })

  return (
    <DropdownMenuPrimitive.SubTrigger
      {...props}
      ref={ref}
      className={subTrigger({ className: props.className })}
    >
      {children}

      <IconChevronRight
        {...iconProps}
        className={subTriggerIcon({ className: iconProps?.className })}
      />
    </DropdownMenuPrimitive.SubTrigger>
  )
})
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
    {
      portalProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { subContent } = dropdownMenu()

  return (
    <DropdownMenuPrimitive.Portal {...portalProps}>
      <DropdownMenuPrimitive.SubContent
        {...props}
        ref={ref}
        className={subContent({ className: props.className })}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { content } = dropdownMenu()

  return (
    <DropdownMenuPrimitive.Portal {...portalProps}>
      <DropdownMenuPrimitive.Content
        sideOffset={4}
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { item } = dropdownMenu({ inset })

  return (
    <DropdownMenuPrimitive.Item
      {...props}
      ref={ref}
      className={item({ className: props.className })}
    />
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { checkboxItem, checkboxItemIndicatorIcon } = dropdownMenu()

  return (
    <DropdownMenuPrimitive.CheckboxItem
      {...props}
      ref={ref}
      className={checkboxItem({ className: props.className })}
    >
      <DropdownMenuPrimitive.ItemIndicator asChild>
        <IconCheck
          {...indicatorIconProps}
          className={checkboxItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </DropdownMenuPrimitive.ItemIndicator>

      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconPoint>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { radioItem, radioItemIndicatorIcon } = dropdownMenu()

  return (
    <DropdownMenuPrimitive.RadioItem
      {...props}
      ref={ref}
      className={radioItem({ className: props.className })}
    >
      <DropdownMenuPrimitive.ItemIndicator asChild>
        <IconPoint
          {...indicatorIconProps}
          className={radioItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </DropdownMenuPrimitive.ItemIndicator>

      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
})
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { label } = dropdownMenu({ inset })

  return (
    <DropdownMenuPrimitive.Label
      {...props}
      ref={ref}
      className={label({ className: props.className })}
    />
  )
})
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>((props, ref) => {
  const { separator } = dropdownMenu()

  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    />
  )
})
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

function DropdownMenuItemShortcut(props: React.ComponentProps<'span'>) {
  const { itemShortcut } = dropdownMenu()

  return <span {...props} className={itemShortcut({ className: props.className })} />
}

const DropdownMenu = Object.assign(DropdownMenuPrimitive.Root, {
  Trigger: DropdownMenuPrimitive.Trigger,
  Content: DropdownMenuContent,

  Group: DropdownMenuPrimitive.Group,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,

  Item: Object.assign(DropdownMenuItem, {
    Shortcut: DropdownMenuItemShortcut,
  }),

  Radio: Object.assign(DropdownMenuPrimitive.RadioGroup, {
    Item: DropdownMenuRadioItem,
  }),

  CheckboxItem: DropdownMenuCheckboxItem,

  Sub: Object.assign(DropdownMenuPrimitive.Sub, {
    Trigger: DropdownMenuSubTrigger,
    Content: DropdownMenuSubContent,
  }),
})

export default DropdownMenu
export { dropdownMenu, DropdownMenuPrimitive }
