'use client'

import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'
import { Drawer as DrawerPrimitive } from 'vaul'

const drawer = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-[#000]/80',
    content: [
      '@container',
      'fixed inset-x-0 bottom-0 z-50',
      'p-4 mt-24 flex h-auto flex-col rounded-t-xl border bg-bg--contrast',
    ],
    slidingHandle: 'mx-auto h-2 w-24 rounded-full bg-border/50',
    title: 'text-lg font-semibold leading-none tracking-tight text-center @xl:text-left',
    description: 'mt-1.5 text-sm text-fg-weaker text-center @xl:text-left',
    actions: 'mt-4 flex flex-col gap-2',
  },
})

function DrawerRoot(props: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root shouldScaleBackground {...props} />
}

const DrawerContent = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof DrawerPrimitive.Portal>
      overlayProps?: React.ComponentProps<typeof DrawerPrimitive.Overlay>
      slidingHandleProps?: React.ComponentProps<'div'>
    }
  >
>(({ portalProps, overlayProps, slidingHandleProps, children, ...props }, ref) => {
  const { overlay, content, slidingHandle } = drawer()

  return (
    <DrawerPrimitive.Portal {...portalProps}>
      <DrawerPrimitive.Overlay
        {...overlayProps}
        className={overlay({ className: overlayProps?.className })}
      />
      <DrawerPrimitive.Content
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      >
        <div
          {...slidingHandleProps}
          className={slidingHandle({ className: slidingHandleProps?.className })}
        />

        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  )
})
DrawerContent.displayName = 'DrawerContent'

const DrawerTitle = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>((props, ref) => {
  const { title } = drawer()

  return (
    <DrawerPrimitive.Title {...props} ref={ref} className={title({ className: props.className })} />
  )
})
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>((props, ref) => {
  const { description } = drawer()

  return (
    <DrawerPrimitive.Description
      {...props}
      ref={ref}
      className={description({ className: props.className })}
    />
  )
})
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

function DrawerActions(props: React.ComponentProps<'div'>) {
  const { actions } = drawer()

  return <div {...props} className={actions({ className: props.className })} />
}

const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerPrimitive.Trigger,
  Close: DrawerPrimitive.Close,
  Content: Object.assign(DrawerContent, {
    Title: DrawerTitle,
    Description: DrawerDescription,
    Actions: DrawerActions,
  }),
})

export default Drawer
export { drawer, DrawerPrimitive }
