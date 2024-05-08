'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const progress = tv({
  slots: {
    root: 'relative overflow-hidden h-2 rounded-full bg-bg--muted',
    indicator: 'transition-all h-full bg-fg-brand rounded-full',
  },
})

const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    {
      indicatorProps?: React.ComponentProps<typeof ProgressPrimitive.Indicator>
    }
  >
>(({ indicatorProps, value, ...props }, ref) => {
  const { root, indicator } = progress()

  return (
    <ProgressPrimitive.Root
      {...props}
      ref={ref}
      value={value}
      className={root({ className: props.className })}
    >
      <ProgressPrimitive.Indicator
        {...indicatorProps}
        className={indicator({ className: indicatorProps?.className })}
        style={{
          ...indicatorProps?.style,
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress
export { progress, ProgressPrimitive }
