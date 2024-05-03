'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import type React from 'react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const switchVariant = tv({
  slots: {
    root: [
      'peer transition-colors',
      'inline-flex h-5 w-9 shrink-0 cursor-pointer items-center',
      'rounded-full border-2 border-transparent shadow-sm',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-brand data-[state=unchecked]:bg-bg--muted',
    ],
    thumb: [
      'transition-transform',
      'block size-4 rounded-full bg-bg--contrast shadow-lg',
      'data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
    ],
  },
})

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Merge<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    {
      thumbProps?: React.ComponentProps<typeof SwitchPrimitives.Thumb>
    }
  >
>(({ thumbProps, ...props }, ref) => {
  const { root, thumb } = switchVariant()

  return (
    <SwitchPrimitives.Root {...props} ref={ref} className={root({ className: props.className })}>
      <SwitchPrimitives.Thumb
        {...thumbProps}
        className={thumb({ className: thumbProps?.className })}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch
export { switchVariant, SwitchPrimitives }
