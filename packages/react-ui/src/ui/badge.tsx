import { Slot } from '@radix-ui/react-slot'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const badge = tv({
  slots: {
    root: ['inline-flex items-center rounded-full border'],
    leftDot: 'rounded-full bg-current',
  },
  variants: {
    variant: {
      filled: {
        root: 'border-current',
      },
      outline: {},
    },
    color: {
      brand: {},
      danger: {},
      gray: {},
      blue: {},
      pink: {},
      orange: {},
    },
    size: {
      xs: {
        root: 'h-4 px-1.5 text-[0.625rem] font-semibold',
        leftDot: 'size-1.5 -ml-0.5 mr-0.5',
      },
      sm: {
        root: 'h-[1.125rem] px-2 text-[0.6875rem] font-semibold',
        leftDot: 'size-[0.4375rem] -ml-[0.1875rem] mr-[0.1875rem]',
      },
      md: {
        root: 'h-5 px-2.5 text-xs font-semibold',
        leftDot: 'size-2 -ml-1 mr-1',
      },
      lg: {
        root: 'h-6 px-3.5 text-sm font-semibold',
        leftDot: 'size-2.5 -ml-1.5 mr-1.5',
      },
      xl: {
        root: 'h-7 px-[1.125rem] text-base font-semibold',
        leftDot: 'size-3 -ml-2 mr-2',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'brand',
      className: {
        root: 'text-[#fff] bg-utility-brand-600',
      },
    },
    {
      variant: 'filled',
      color: 'danger',
      className: {
        root: 'text-[#fff] bg-utility-danger-600',
      },
    },
    {
      variant: 'filled',
      color: 'gray',
      className: {
        root: 'text-[#fff] bg-utility-gray-600',
      },
    },
    {
      variant: 'filled',
      color: 'blue',
      className: {
        root: 'text-[#fff] bg-utility-blue-600',
      },
    },
    {
      variant: 'filled',
      color: 'pink',
      className: {
        root: 'text-[#fff] bg-utility-pink-600',
      },
    },
    {
      variant: 'filled',
      color: 'orange',
      className: {
        root: 'text-[#fff] bg-utility-orange-600',
      },
    },
    {
      variant: 'outline',
      color: 'brand',
      className: {
        root: 'bg-utility-brand-50 border-utility-brand-200 text-utility-brand-600',
        leftDot: 'bg-utility-brand-500',
      },
    },
    {
      variant: 'outline',
      color: 'danger',
      className: {
        root: 'bg-utility-danger-50 border-utility-danger-200 text-utility-danger-600',
        leftDot: 'bg-utility-danger-500',
      },
    },
    {
      variant: 'outline',
      color: 'gray',
      className: {
        root: 'bg-utility-gray-50 border-utility-gray-200 text-utility-gray-600',
        leftDot: 'bg-utility-gray-500',
      },
    },
    {
      variant: 'outline',
      color: 'blue',
      className: {
        root: 'bg-utility-blue-50 border-utility-blue-200 text-utility-blue-600',
        leftDot: 'bg-utility-blue-500',
      },
    },
    {
      variant: 'outline',
      color: 'pink',
      className: {
        root: 'bg-utility-pink-50 border-utility-pink-200 text-utility-pink-600',
        leftDot: 'bg-utility-pink-500',
      },
    },
    {
      variant: 'outline',
      color: 'orange',
      className: {
        root: 'bg-utility-orange-50 border-utility-orange-200 text-utility-orange-600',
        leftDot: 'bg-utility-orange-500',
      },
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'brand',
    size: 'md',
  },
})

type BadgeVariantProps = VariantProps<typeof badge>

const BadgeContext = createContext<BadgeVariantProps>(badge.defaultVariants)

const BadgeRoot = forwardRef<
  HTMLDivElement,
  Merge<
    Merge<React.ComponentPropsWithRef<'div'>, BadgeVariantProps>,
    {
      asChild?: boolean
    }
  >
>(({ variant, color, size, asChild, ...props }, ref) => {
  const variantProps = { variant, color, size }
  const { root } = badge(variantProps)

  const Comp = asChild ? Slot : 'div'
  return (
    <BadgeContext.Provider value={variantProps}>
      <Comp {...props} ref={ref} className={root({ className: props.className })} />
    </BadgeContext.Provider>
  )
})
BadgeRoot.displayName = 'BadgeRoot'

const BadgeLeftDot = forwardRef<
  HTMLSpanElement,
  Merge<
    React.ComponentPropsWithRef<'div'>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const variantProps = useContext(BadgeContext)
  const { leftDot } = badge(variantProps)

  const Comp = asChild ? Slot : 'span'
  return <Comp {...props} ref={ref} className={leftDot({ className: props.className })} />
})
BadgeLeftDot.displayName = 'BadgeDot'

const Badge = Object.assign(BadgeRoot, {
  LeftDot: BadgeLeftDot,
})

export default Badge
export { badge }
