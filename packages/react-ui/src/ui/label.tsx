'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const label = tv({
  slots: {
    root: 'text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
})

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof label>
>((props, ref) => {
  const { root } = label()

  return (
    <LabelPrimitive.Root {...props} ref={ref} className={root({ className: props.className })} />
  )
})
Label.displayName = LabelPrimitive.Root.displayName

export default Label
export { label, LabelPrimitive }
