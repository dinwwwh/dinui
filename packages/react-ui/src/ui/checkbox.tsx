'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      'peer h-4 w-4 shrink-0 rounded-sm border border-wgray-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wgray-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-wgray-900 data-[state=checked]:text-wgray-50 dark:border-wgray-50 dark:focus-visible:ring-wgray-300 dark:data-[state=checked]:bg-wgray-50 dark:data-[state=checked]:text-wgray-900',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={'flex items-center justify-center text-current'}>
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName
