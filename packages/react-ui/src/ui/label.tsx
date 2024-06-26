'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const label = tv({
  slots: {
    root: 'text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
  variants: {
    variant: {
      default: null,
      danger: {
        root: 'text-fg-danger',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof label>
>(({ variant, ...props }, ref) => {
  const { root } = label({ variant })

  return (
    <LabelPrimitive.Root {...props} ref={ref} className={root({ className: props.className })} />
  )
})
Label.displayName = LabelPrimitive.Root.displayName

export default Label
export { label, LabelPrimitive }
