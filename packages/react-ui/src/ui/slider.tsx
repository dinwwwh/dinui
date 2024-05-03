'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const slider = tv({
  slots: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-1.5 w-full grow overflow-hidden rounded-full bg-bg--muted',
    range: 'absolute h-full bg-brand',
    thumb:
      'block h-4 w-4 rounded-full border border-fg/50 bg-bg--contrast shadow transition-colors disabled:pointer-events-none disabled:opacity-50',
  },
})

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    {
      trackProps?: React.ComponentProps<typeof SliderPrimitive.Track>
      rangeProps?: React.ComponentProps<typeof SliderPrimitive.Range>
      thumbProps?: React.ComponentProps<typeof SliderPrimitive.Thumb>
    }
  >
>(({ trackProps, rangeProps, thumbProps, ...props }, ref) => {
  const { root, range, thumb, track } = slider()

  return (
    <SliderPrimitive.Root {...props} ref={ref} className={root({ className: props.className })}>
      <SliderPrimitive.Track
        {...trackProps}
        className={track({ className: trackProps?.className })}
      >
        <SliderPrimitive.Range
          {...rangeProps}
          className={range({ className: rangeProps?.className })}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        {...thumbProps}
        className={thumb({ className: thumbProps?.className })}
      />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
export { slider, SliderPrimitive }
