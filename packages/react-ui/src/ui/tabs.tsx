'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const tabs = tv({
  slots: {
    list: 'inline-flex h-9 items-center justify-center rounded-lg bg-bg--muted p-1',
    trigger: [
      'transition',
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1',
      'text-sm font-medium text-fg-weak',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-bg--contrast data-[state=active]:text-fg data-[state=active]:shadow',
    ],
    content: 'mt-2',
  },
})

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>((props, ref) => {
  const { list } = tabs()

  return (
    <TabsPrimitive.List {...props} ref={ref} className={list({ className: props.className })} />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => {
  const { trigger } = tabs()

  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={ref}
      className={trigger({ className: props.className })}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>((props, ref) => {
  const { content } = tabs()

  return (
    <TabsPrimitive.Content
      {...props}
      ref={ref}
      className={content({ className: props.className })}
    />
  )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

const Tabs = Object.assign(TabsPrimitive.Root, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export default Tabs
export { tabs, TabsPrimitive }
