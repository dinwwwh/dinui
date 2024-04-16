import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wgray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-wgray-300',
  variants: {
    variant: {
      default:
        'bg-wgray-900 text-wgray-50 shadow hover:bg-wgray-900/90 dark:bg-wgray-50 dark:text-wgray-900 dark:hover:bg-wgray-50/90',
      destructive:
        'bg-red-500 text-wgray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-wgray-50 dark:hover:bg-red-900/90',
      outline:
        'border border-wgray-200 dark:border-wgray-800 bg-white shadow-sm hover:bg-wgray-100 hover:text-wgray-900  dark:bg-wgray-950 dark:hover:bg-wgray-800 dark:hover:text-wgray-50',
      secondary:
        'bg-wgray-100 text-wgray-900 shadow-sm hover:bg-wgray-100/80 dark:bg-wgray-800 dark:text-wgray-50 dark:hover:bg-wgray-800/80',
      ghost:
        'hover:bg-wgray-100 hover:text-wgray-900 dark:hover:bg-wgray-800 dark:hover:text-wgray-50',
      link: 'text-wgray-900 underline-offset-4 hover:underline dark:text-wgray-50',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={button({ variant, size, className })} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'
