'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const separator = tv({
  slots: {
    root: 'shrink-0 bg-border',
  },
  variants: {
    variant: {
      default: {},
      weak: {
        root: 'opacity-50',
      },
    },
    orientation: {
      vertical: {
        root: 'min-h-full w-[0.0625rem]',
      },
      horizontal: {
        root: 'h-[0.0625rem] min-w-full',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
  },
})

const Separator = forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>((props, ref) => {
  const { root } = separator({ orientation: props.orientation })

  return (
    <SeparatorPrimitive.Root
      decorative
      orientation={'horizontal'}
      {...props}
      ref={ref}
      className={root({
        className: props.className,
      })}
    />
  )
})
Separator.displayName = SeparatorPrimitive.Root.displayName

export default Separator
export { separator, SeparatorPrimitive }
