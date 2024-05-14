'use client'

import { Slot } from '@radix-ui/react-slot'
import { IconCircle, IconSearch } from '@tabler/icons-react'
import * as CommandPrimitive from 'cmdk'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const command = tv({
  slots: {
    root: 'flex h-full w-full flex-col overflow-hidden rounded-md',
    input: [
      'h-10 w-full text-sm outline-none bg-transparent',
      'placeholder:text-fg-weaker',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    inputWrapper: 'flex items-center border-b px-3',
    inputIcon: 'mr-2 size-4 shrink-0 text-fg-weaker',
    list: 'overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm text-fg-weaker',
    group: [
      'overflow-hidden p-1',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-fg-weaker',
    ],
    separator: '-mx-1 h-px bg-border',
    item: [
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition aria-selected:bg-bg--active',
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
    ],
    itemLeftIcon: 'size-[1.125rem] mr-2',
    itemShortcut: 'ml-auto text-xs tracking-widest text-fg-weaker',
  },
})

const CommandRoot = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command>
>((props, ref) => {
  const { root } = command()

  return (
    <CommandPrimitive.Command
      {...props}
      ref={ref}
      className={root({ className: props.className })}
    />
  )
})
CommandRoot.displayName = CommandPrimitive.Command.displayName

const CommandInput = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.Input>,
  Merge<
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.Input>,
    {
      wrapperProps?: React.ComponentProps<'div'>
      iconProps?: React.ComponentProps<typeof IconSearch>
    }
  >
>(({ wrapperProps, iconProps, ...props }, ref) => {
  const { input, inputWrapper, inputIcon } = command()

  return (
    <div {...wrapperProps} className={inputWrapper({ className: wrapperProps?.className })}>
      <IconSearch {...iconProps} className={inputIcon({ className: iconProps?.className })} />
      <CommandPrimitive.Command.Input
        {...props}
        ref={ref}
        className={input({ className: props.className })}
      />
    </div>
  )
})
CommandInput.displayName = CommandPrimitive.Command.Input.displayName

const CommandList = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.List>
>((props, ref) => {
  const { list } = command()

  return (
    <CommandPrimitive.Command.List
      {...props}
      ref={ref}
      className={list({
        className: props.className,
      })}
    />
  )
})
CommandList.displayName = CommandPrimitive.Command.displayName

const CommandEmpty = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.Empty>
>((props, ref) => {
  const { empty } = command()

  return (
    <CommandPrimitive.Command.Empty
      {...props}
      ref={ref}
      className={empty({ className: props.className })}
    />
  )
})
CommandEmpty.displayName = CommandPrimitive.Command.Empty.displayName

const CommandGroup = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.Group>
>((props, ref) => {
  const { group } = command()

  return (
    <CommandPrimitive.Command.Group
      {...props}
      ref={ref}
      className={group({ className: props.className })}
    />
  )
})
CommandGroup.displayName = CommandPrimitive.Command.Group.displayName

const CommandSeparator = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.Separator>
>((props, ref) => {
  const { separator } = command()

  return (
    <CommandPrimitive.Command.Separator
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    />
  )
})
CommandSeparator.displayName = CommandPrimitive.Command.Separator.displayName

const CommandItem = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Command.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Command.Item>
>((props, ref) => {
  const { item } = command()

  return (
    <CommandPrimitive.Command.Item
      {...props}
      ref={ref}
      className={item({ className: props.className })}
    />
  )
})

CommandItem.displayName = CommandPrimitive.Command.Item.displayName

const CommandItemLeftIcon = forwardRef<
  React.ComponentRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const { itemLeftIcon } = command()

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={itemLeftIcon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
CommandItemLeftIcon.displayName = 'CommandItemLeftIcon'

const CommandItemShortcut = forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  (props, ref) => {
    const { itemShortcut } = command()

    return <span {...props} ref={ref} className={itemShortcut({ className: props.className })} />
  },
)
CommandItemShortcut.displayName = 'CommandItemShortcut'

const Command = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Separator: CommandSeparator,
  Group: CommandGroup,
  Item: Object.assign(CommandItem, {
    LeftIcon: CommandItemLeftIcon,
    Shortcut: CommandItemShortcut,
  }),
})

export default Command
export { command, CommandPrimitive }
