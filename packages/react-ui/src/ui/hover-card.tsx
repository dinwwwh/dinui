'use client'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const hoverCard = tv({
  slots: {
    content: [
      'z-50 rounded-md border bg-bg--contrast p-4 shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
  },
})

const HoverCardContent = forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>((props, ref) => {
  const { content } = hoverCard()

  return (
    <HoverCardPrimitive.Content
      align={'center'}
      sideOffset={4}
      {...props}
      ref={ref}
      className={content({ className: props.className })}
    />
  )
})
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

const HoverCard = Object.assign(HoverCardPrimitive.Root, {
  Trigger: HoverCardPrimitive.Trigger,
  Content: HoverCardContent,
})

export default HoverCard
export { hoverCard, HoverCardPrimitive }
