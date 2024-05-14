'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const checkbox = tv({
  slots: {
    root: [
      'transition duration-100',
      'shrink-0 rounded border border-fg-weaker',
      'data-[state=checked]:bg-brand data-[state=checked]:border-bg',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    indicatorIcon: null,
  },
  variants: {
    size: {
      sm: {
        root: 'size-3',
        indicatorIcon: 'size-2.5',
      },
      md: {
        root: 'size-4',
        indicatorIcon: 'size-[0.875rem]',
      },
      lg: {
        root: 'size-5',
        indicatorIcon: 'size-[1.125rem]',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Merge<
    Merge<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      VariantProps<typeof checkbox>
    >,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorIconProps, size, ...props }, ref) => {
  const { root, indicatorIcon } = checkbox({ size })

  return (
    <CheckboxPrimitive.Root {...props} ref={ref} className={root({ className: props.className })}>
      <CheckboxPrimitive.Indicator asChild>
        <IconCheck
          {...indicatorIconProps}
          className={indicatorIcon({ className: indicatorIconProps?.className })}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
export { checkbox, CheckboxPrimitive }
