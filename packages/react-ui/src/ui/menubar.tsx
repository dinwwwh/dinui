'use client'

import { button } from './button'
import { dropdownMenu } from './dropdown-menu'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { IconCheck, IconChevronRight, IconPoint } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const menubar = tv({
  slots: {
    root: 'flex h-9 items-center gap-1 rounded-md border bg-white p-1 shadow-sm',
    trigger: button({ variant: 'ghost', size: 'xs' }).root({
      className: ['text-sm font-medium px-3 rounded-sm', 'data-[state=open]:bg-bg--active'],
    }),
  },
})

const MenubarRoot = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>((props, ref) => {
  const { root } = menubar()

  return (
    <MenubarPrimitive.Root {...props} ref={ref} className={root({ className: props.className })} />
  )
})
MenubarRoot.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>((props, ref) => {
  const { trigger } = menubar()

  return (
    <MenubarPrimitive.Trigger
      {...props}
      ref={ref}
      className={trigger({ className: props.className })}
    />
  )
})
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  Merge<
    Merge<
      React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>,
      VariantProps<typeof dropdownMenu>
    >,
    {
      iconProps?: React.ComponentProps<typeof IconChevronRight>
    }
  >
>(({ iconProps, inset, children, ...props }, ref) => {
  const { subTrigger, subTriggerIcon } = dropdownMenu({ inset })

  return (
    <MenubarPrimitive.SubTrigger
      {...props}
      ref={ref}
      className={subTrigger({ className: props.className })}
    >
      {children}

      <IconChevronRight
        {...iconProps}
        className={subTriggerIcon({ className: iconProps?.className })}
      />
    </MenubarPrimitive.SubTrigger>
  )
})
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>,
    {
      portalProps?: React.ComponentProps<typeof MenubarPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { subContent } = dropdownMenu()

  return (
    <MenubarPrimitive.Portal {...portalProps}>
      <MenubarPrimitive.SubContent
        {...props}
        ref={ref}
        className={subContent({ className: props.className })}
      />
    </MenubarPrimitive.Portal>
  )
})
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof MenubarPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { content } = dropdownMenu()

  return (
    <MenubarPrimitive.Portal {...portalProps}>
      <MenubarPrimitive.Content
        align="start"
        alignOffset={-4}
        sideOffset={8}
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      />
    </MenubarPrimitive.Portal>
  )
})
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { item } = dropdownMenu({ inset })

  return (
    <MenubarPrimitive.Item {...props} ref={ref} className={item({ className: props.className })} />
  )
})
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { checkboxItem, checkboxItemIndicatorIcon } = dropdownMenu()

  return (
    <MenubarPrimitive.CheckboxItem
      {...props}
      ref={ref}
      className={checkboxItem({ className: props.className })}
    >
      <MenubarPrimitive.ItemIndicator asChild>
        <IconCheck
          {...indicatorIconProps}
          className={checkboxItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </MenubarPrimitive.ItemIndicator>

      {children}
    </MenubarPrimitive.CheckboxItem>
  )
})
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconPoint>
    }
  >
>(({ indicatorIconProps, children, ...props }, ref) => {
  const { radioItem, radioItemIndicatorIcon } = dropdownMenu()

  return (
    <MenubarPrimitive.RadioItem
      {...props}
      ref={ref}
      className={radioItem({ className: props.className })}
    >
      <MenubarPrimitive.ItemIndicator asChild>
        <IconPoint
          {...indicatorIconProps}
          className={radioItemIndicatorIcon({ className: indicatorIconProps?.className })}
        />
      </MenubarPrimitive.ItemIndicator>

      {children}
    </MenubarPrimitive.RadioItem>
  )
})
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  Merge<
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>,
    VariantProps<typeof dropdownMenu>
  >
>(({ inset, ...props }, ref) => {
  const { label } = dropdownMenu({ inset })

  return (
    <MenubarPrimitive.Label
      {...props}
      ref={ref}
      className={label({ className: props.className })}
    />
  )
})
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>((props, ref) => {
  const { separator } = dropdownMenu()

  return (
    <MenubarPrimitive.Separator
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    />
  )
})
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

function MenubarItemShortcut(props: React.ComponentProps<'span'>) {
  const { itemShortcut } = dropdownMenu()

  return <span {...props} className={itemShortcut({ className: props.className })} />
}

const Menubar = Object.assign(MenubarRoot, {
  Menu: MenubarPrimitive.Menu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Group: MenubarPrimitive.Group,
  Separator: MenubarSeparator,
  Label: MenubarLabel,

  Item: Object.assign(MenubarItem, {
    Shortcut: MenubarItemShortcut,
  }),

  Radio: Object.assign(MenubarPrimitive.RadioGroup, {
    Item: MenubarRadioItem,
  }),

  CheckboxItem: MenubarCheckboxItem,

  Sub: Object.assign(MenubarPrimitive.Sub, {
    Trigger: MenubarSubTrigger,
    Content: MenubarSubContent,
  }),
})

export default Menubar
export { menubar, MenubarPrimitive }
