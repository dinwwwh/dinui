'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { IconCircle } from '@tabler/icons-react'
import * as React from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const radioGroup = tv({
  slots: {
    root: 'grid gap-2',
    item: [
      'aspect-square size-4 rounded-full border border-fg',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    indicatorIcon: 'size-3 fill-current m-auto',
  },
})

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
  const { root } = radioGroup()

  return (
    <RadioGroupPrimitive.Root
      {...props}
      ref={ref}
      className={root({ className: props.className })}
    />
  )
})
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    {
      indicatorIconProps?: React.ComponentProps<typeof IconCircle>
    }
  >
>(({ indicatorIconProps, ...props }, ref) => {
  const { item, indicatorIcon } = radioGroup()

  return (
    <RadioGroupPrimitive.Item {...props} ref={ref} className={item({ className: props.className })}>
      <RadioGroupPrimitive.Indicator asChild>
        <IconCircle
          {...indicatorIconProps}
          className={indicatorIcon({ className: indicatorIconProps?.className })}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
})

export default RadioGroup
export { radioGroup, RadioGroupPrimitive }
