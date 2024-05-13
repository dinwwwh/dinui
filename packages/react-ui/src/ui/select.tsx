'use client'

import { button } from './button'
import { separator } from './separator'
import * as SelectPrimitive from '@radix-ui/react-select'
import { IconSelector, IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const select = tv({
  slots: {
    trigger: button({ variant: 'outline' }).root({ className: 'justify-between' }),
    triggerIcon: button({ variant: 'outline' }).rightIcon({ className: 'text-fg-weaker' }),
    scrollUpButton: button({ variant: 'ghost', size: 'sm' }).root(),
    scrollUpButtonIcon: button({ variant: 'ghost', size: 'sm' }).icon(),
    scrollDownButton: button({ variant: 'ghost', size: 'sm' }).root(),
    scrollDownButtonIcon: button({ variant: 'ghost', size: 'sm' }).icon(),
    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md',
      'border bg-bg--contrast shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
    viewport: 'p-1',
    label: 'px-2 py-1.5 text-sm font-semibold',
    item: button({ variant: 'ghost', size: 'sm' }).root({
      className: [
        'flex justify-between w-full px-2 text-sm outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      ],
    }),
    itemIndicator: button({ variant: 'ghost', size: 'sm' }).rightIcon(),
    separator: separator().root({ className: 'opacity-50 -mx-1 my-1' }),
  },
  variants: {
    position: {
      'popper': {
        content:
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        viewport:
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
      },
      'item-aligned': null,
    },
  },
  defaultVariants: {
    position: 'item-aligned',
  },
})

const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    {
      iconProps?: React.ComponentProps<typeof IconSelector>
    }
  >
>(({ iconProps, children, ...props }, ref) => {
  const { trigger, triggerIcon } = select()

  return (
    <SelectPrimitive.Trigger
      {...props}
      ref={ref}
      className={trigger({ className: props.className })}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <IconSelector {...iconProps} className={triggerIcon({ className: iconProps?.className })} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>,
    {
      iconProps?: React.ComponentProps<typeof IconChevronUp>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { scrollUpButton, scrollUpButtonIcon } = select()

  return (
    <SelectPrimitive.ScrollUpButton
      {...props}
      ref={ref}
      className={scrollUpButton({ className: props.className })}
    >
      <IconChevronUp
        {...iconProps}
        className={scrollUpButtonIcon({ className: iconProps?.className })}
      />
    </SelectPrimitive.ScrollUpButton>
  )
})
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>,
    {
      iconProps?: React.ComponentProps<typeof IconChevronDown>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { scrollDownButton, scrollDownButtonIcon } = select()

  return (
    <SelectPrimitive.ScrollDownButton
      {...props}
      ref={ref}
      className={scrollDownButton({ className: props.className })}
    >
      <IconChevronDown
        {...iconProps}
        className={scrollDownButtonIcon({ className: iconProps?.className })}
      />
    </SelectPrimitive.ScrollDownButton>
  )
})
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof SelectPrimitive.Portal>
      viewportProps?: React.ComponentProps<typeof SelectPrimitive.Viewport>
      scrollUpButtonProps?: React.ComponentProps<typeof SelectScrollUpButton>
      scrollDownButtonProps?: React.ComponentProps<typeof SelectScrollDownButton>
    }
  >
>(
  (
    {
      portalProps,
      viewportProps,
      scrollUpButtonProps,
      scrollDownButtonProps,
      children,
      position = 'popper',
      ...props
    },
    ref,
  ) => {
    const { content, viewport } = select({ position })

    return (
      <SelectPrimitive.Portal {...portalProps}>
        <SelectPrimitive.Content
          {...props}
          ref={ref}
          position={position}
          className={content({ className: props.className })}
        >
          <SelectScrollUpButton {...scrollUpButtonProps} />

          <SelectPrimitive.Viewport
            {...viewportProps}
            className={viewport({ className: viewportProps?.className })}
          >
            {children}
          </SelectPrimitive.Viewport>

          <SelectScrollDownButton {...scrollDownButtonProps} />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  },
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => {
  const { label } = select()

  return (
    <SelectPrimitive.Label {...props} ref={ref} className={label({ className: props.className })} />
  )
})
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    {
      indicatorProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorProps, children, ...props }, ref) => {
  const { item, itemIndicator } = select()

  return (
    <SelectPrimitive.Item {...props} ref={ref} className={item({ className: props.className })}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator asChild>
        <IconCheck
          {...indicatorProps}
          className={itemIndicator({ className: indicatorProps?.className })}
        />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => {
  const { separator } = select()

  return (
    <SelectPrimitive.Separator
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    />
  )
})
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

const Select = Object.assign(SelectPrimitive.Root, {
  Trigger: SelectTrigger,
  Value: SelectPrimitive.Value,
  Content: Object.assign(SelectContent, {
    Group: Object.assign(SelectPrimitive.Group, {
      Label: SelectLabel,
    }),
    Item: SelectItem,
    Separator: SelectSeparator,
  }),
})

export default Select
export { select, SelectPrimitive }
