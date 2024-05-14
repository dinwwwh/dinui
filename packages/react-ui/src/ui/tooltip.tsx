'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    content: [
      'z-50 overflow-hidden rounded-md',
      'bg-reverse px-3 py-1.5 text-xs',
      'animate-in data-[state=closed]:animate-out',
      'fade-in-0 data-[state=closed]:fade-out-0',
      'zoom-in-95 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
  },
})

const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>((props, ref) => {
  const { content } = tooltip()

  return (
    <TooltipPrimitive.Content
      sideOffset={4}
      {...props}
      ref={ref}
      className={content({ className: props.className })}
    />
  )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const Tooltip = Object.assign(TooltipPrimitive.Root, {
  Provider: TooltipPrimitive.Provider,
  Trigger: TooltipPrimitive.Trigger,
  Content: TooltipContent,
})

export default Tooltip
export { tooltip, TooltipPrimitive }
