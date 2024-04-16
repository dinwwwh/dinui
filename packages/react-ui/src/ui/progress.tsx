'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={twMerge(
      'relative h-2 w-full overflow-hidden rounded-full bg-wgray-900/20 dark:bg-wgray-50/20',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-wgray-900 transition-all dark:bg-wgray-50"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName
