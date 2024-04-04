'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const label = tv({
  base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
})

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof label>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={label({ className })} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName
