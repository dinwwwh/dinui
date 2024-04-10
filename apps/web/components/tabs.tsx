'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'
import { tv } from 'tailwind-variants'

const tabs = tv({
  slots: {
    list: 'flex h-9 items-center justify-start text-gray-500 dark:text-gray-400 border-b mb-3',
    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap px-4 pb-3 pt-2 h-9',
      'border-b-2 border-b-transparent data-[state=active]:border-b-gray-700 dark:data-[state=active]:border-b-gray-300',
      'text-sm font-semibold data-[state=active]:text-gray-950 dark:data-[state=active]:text-gray-50',
      'disabled:pointer-events-none disabled:opacity-50',
      'dark:data-[state=active]:bg-gray-950',
      'ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 ',
    ],
    content:
      'ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
  },
})

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>((props, ref) => {
  const { list } = tabs()

  return (
    <TabsPrimitive.List {...props} ref={ref} className={list({ className: props.className })} />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
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

const TabsContent = React.forwardRef<
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

export const Tabs = Object.assign(TabsPrimitive.Root, {
  List: Object.assign(TabsList, {
    Trigger: TabsTrigger,
  }),
  Content: TabsContent,
})
