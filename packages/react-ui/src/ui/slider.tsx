'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-wgray-900/20 dark:bg-wgray-50/20">
      <SliderPrimitive.Range className="absolute h-full bg-wgray-900 dark:bg-wgray-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-wgray-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wgray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-wgray-50/50 dark:bg-wgray-950 dark:focus-visible:ring-wgray-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName
