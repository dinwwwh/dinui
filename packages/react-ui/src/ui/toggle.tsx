'use client'

import { Slot } from '@radix-ui/react-slot'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { IconCircle } from '@tabler/icons-react'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const toggle = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center transition',
      'disabled:pointer-events-none disabled:opacity-50',
      'hover:bg-bg--hover data-[state=on]:bg-bg--active',
    ],
    leftIcon: null,
    rightIcon: null,
    icon: null,
  },
  variants: {
    variant: {
      ghost: {
        root: 'hover:text-fg-weaker hover:data-[state=on]:text-fg',
      },
      outline: {
        root: 'border',
      },
    },
    size: {
      sm: {
        root: ['h-8 px-2.5 rounded-md', 'text-xs font-medium'],
        leftIcon: 'size-3.5 -ml-0.5 mr-1',
        rightIcon: 'size-3.5 ml-1 -mr-0.5',
        icon: 'size-3.5',
      },
      md: {
        root: ['h-9 px-3 rounded-md', 'text-sm font-medium'],
        leftIcon: 'size-4 -ml-1 mr-1.5',
        rightIcon: 'size-4 ml-1.5 -mr-1',
        icon: 'size-4',
      },
      lg: {
        root: ['h-10 px-3.5 rounded-md', 'text-sm font-medium'],
        leftIcon: 'size-[1.125rem] -ml-1.5 mr-2',
        rightIcon: 'size-[1.125rem] ml-2 -mr-1.5',
        icon: 'size-[1.125rem]',
      },
    },
    icon: {
      true: null,
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      icon: true,
      className: {
        root: 'w-8 px-0',
      },
    },
    {
      size: 'md',
      icon: true,
      className: {
        root: 'w-9 px-0',
      },
    },
    {
      size: 'lg',
      icon: true,
      className: {
        root: 'w-10 px-0',
      },
    },
  ],
  defaultVariants: {
    variant: 'ghost',
    size: 'md',
  },
})

type ToggleVariantProps = VariantProps<typeof toggle>

const ToggleContext = createContext<ToggleVariantProps>(toggle.defaultVariants)

const ToggleRoot = forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggle>
>(({ variant, size, icon, ...props }, ref) => {
  const variantProps = { variant, size, icon }
  const { root } = toggle(variantProps)

  return (
    <ToggleContext.Provider value={variantProps}>
      <TogglePrimitive.Root {...props} ref={ref} className={root({ className: props.className })} />
    </ToggleContext.Provider>
  )
})
ToggleRoot.displayName = TogglePrimitive.Root.displayName

const ToggleLeftIcon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantProps = useContext(ToggleContext)
  const { leftIcon } = toggle(variantProps)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={leftIcon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
ToggleLeftIcon.displayName = 'ToggleLeftIcon'

const ToggleRightIcon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantProps = useContext(ToggleContext)
  const { rightIcon } = toggle(variantProps)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={rightIcon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
ToggleRightIcon.displayName = 'ToggleRightIcon'

const ToggleIcon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantProps = useContext(ToggleContext)
  const { icon } = toggle(variantProps)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={icon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
ToggleIcon.displayName = 'ToggleIcon'

const Toggle = Object.assign(ToggleRoot, {
  LeftIcon: ToggleLeftIcon,
  RightIcon: ToggleRightIcon,
  Icon: ToggleIcon,
})

export default Toggle
export { toggle, TogglePrimitive }
