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
      filled: {},
      outline: {},
    },
    color: {
      default: {},
      brand: {},
      danger: {},
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
      color: 'default',
      className: {
        root: 'bg-brand',
      },
    },
    {
      variant: 'filled',
      color: 'brand',
      className: {
        root: 'bg-brand',
      },
    },
    {
      variant: 'filled',
      color: 'danger',
      className: {
        root: 'bg-danger',
      },
    },
    {
      variant: 'outline',
      color: 'brand',
      className: {
        root: 'border-fg-brand text-fg-brand',
      },
    },
    {
      variant: 'outline',
      color: 'danger',
      className: {
        root: 'border-fg-danger text-fg-danger',
      },
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'default',
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
