'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import type * as _A from '@radix-ui/react-popper'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const popover = tv({
  slots: {
    content: [
      'z-50 rounded-md border bg-bg--contrast p-4 shadow-md outline-none',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
  },
})

const PopoverContent = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    {
      portalProps?: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>
    }
  >
>(({ portalProps, ...props }, ref) => {
  const { content } = popover()

  return (
    <PopoverPrimitive.Portal {...portalProps}>
      <PopoverPrimitive.Content
        align="center"
        sideOffset={4}
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      />
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Anchor: PopoverPrimitive.Anchor,
  Content: PopoverContent,
})

export default Popover
export { popover, PopoverPrimitive }
