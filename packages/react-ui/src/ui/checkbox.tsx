'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import * as React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const checkbox = tv({
  slots: {
    root: [
      'shrink-0 rounded-sm border border-fg-weaker',
      'data-[state=checked]:bg-brand data-[state=checked]:border-bg',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    root_indicator: 'flex items-center justify-center text-current',
    root_icon: null,
  },
  variants: {
    size: {
      sm: {
        root: 'size-3',
        root_icon: 'size-2.5',
      },
      md: {
        root: 'size-4',
        root_icon: 'size-[0.875rem]',
      },
      lg: {
        root: 'size-5',
        root_icon: 'size-[1.125rem]',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Merge<
    Merge<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      VariantProps<typeof checkbox>
    >,
    {
      indicatorProps?: React.ComponentProps<typeof CheckboxPrimitive.Indicator>
      iconProps?: React.ComponentProps<typeof IconCheck>
    }
  >
>(({ indicatorProps, iconProps, size, ...props }, ref) => {
  const { root, root_indicator, root_icon } = checkbox({ size })

  return (
    <CheckboxPrimitive.Root {...props} ref={ref} className={root({ className: props.className })}>
      <CheckboxPrimitive.Indicator
        {...indicatorProps}
        className={root_indicator({ className: indicatorProps?.className })}
      >
        <IconCheck {...iconProps} className={root_icon({ className: iconProps?.className })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
export { checkbox, CheckboxPrimitive }
