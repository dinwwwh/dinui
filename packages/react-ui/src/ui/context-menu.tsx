'use client'

import { dropdownMenu } from './dropdown-menu'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { IconCheck, IconChevronRight, IconPoint } from '@tabler/icons-react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const ContextMenuSubTrigger = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  Merge<
    Merge<
      React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>,
      VariantProps<typeof dropdownMenu>
    >,
    {
      iconProps?: React.ComponentProps<typeof IconChevronRight>
    }
  >
>(({ iconProps, inset, children, ...props }, ref) => {
  const { subTrigger, subTriggerIcon } = dropdownMenu({ inset })

  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      ref={ref}
      className={subTrigger({ className: props.className })}
    >
      {children}

      <IconChevronRight
        {...iconProps}
        className={subTriggerIcon({ className: iconProps?.className })}
      />
    </ContextMenuPrimitive.SubTrigger>
  )
})
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>,
    {
      portalProps?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { subContent } = dropdownMenu()

  return (
    <ContextMenuPrimitive.Portal {...portalProps}>
      <ContextMenuPrimitive.SubContent
        {...props}
        ref={ref}
        className={subContent({ className: props.className })}
      />
    </ContextMenuPrimitive.Portal>
  )
})
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { content } = dropdownMenu()

  return (
    <ContextMenuPrimitive.Portal {...portalProps}>
      <ContextMenuPrimitive.Content
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      />
    </ContextMenuPrimitive.Portal>
  )
})
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { item } = dropdownMenu({ inset })

  return (
    <ContextMenuPrimitive.Item
      {...props}
      ref={ref}
      className={item({ className: props.className })}
    />
  )
})
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { checkboxItem, checkboxItemIndicatorIcon } = dropdownMenu()

  return (
    <ContextMenuPrimitive.CheckboxItem
      {...props}
      ref={ref}
      className={checkboxItem({ className: props.className })}
    >
      <ContextMenuPrimitive.ItemIndicator asChild>
        <IconCheck
          {...indicatorIconProps}
          className={checkboxItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </ContextMenuPrimitive.ItemIndicator>

      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconPoint>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { radioItem, radioItemIndicatorIcon } = dropdownMenu()

  return (
    <ContextMenuPrimitive.RadioItem
      {...props}
      ref={ref}
      className={radioItem({ className: props.className })}
    >
      <ContextMenuPrimitive.ItemIndicator asChild>
        <IconPoint
          {...indicatorIconProps}
          className={radioItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </ContextMenuPrimitive.ItemIndicator>

      {children}
    </ContextMenuPrimitive.RadioItem>
  )
})
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { label } = dropdownMenu({ inset })

  return (
    <ContextMenuPrimitive.Label
      {...props}
      ref={ref}
      className={label({ className: props.className })}
    />
  )
})
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>((props, ref) => {
  const { separator } = dropdownMenu()

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    />
  )
})
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

function ContextMenuItemShortcut(props: React.ComponentProps<'span'>) {
  const { itemShortcut } = dropdownMenu()

  return <span {...props} className={itemShortcut({ className: props.className })} />
}

const ContextMenu = Object.assign(ContextMenuPrimitive.Root, {
  Trigger: ContextMenuPrimitive.Trigger,
  Content: ContextMenuContent,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,

  Item: Object.assign(ContextMenuItem, {
    Shortcut: ContextMenuItemShortcut,
  }),

  Radio: Object.assign(ContextMenuPrimitive.RadioGroup, {
    Item: ContextMenuRadioItem,
  }),

  CheckboxItem: ContextMenuCheckboxItem,

  Sub: Object.assign(ContextMenuPrimitive.ContextMenuSub, {
    Trigger: ContextMenuSubTrigger,
    Content: ContextMenuSubContent,
  }),
})

export default ContextMenu
export { ContextMenuPrimitive }
