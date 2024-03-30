import { cn } from '../utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = {
  size: {
    sm: 'h-9 px-3.5 text-sm font-medium rounded-lg gap-1.5',
    md: 'h-10 px-4 text-sm font-medium rounded-lg gap-1.5',
    lg: 'h-11 px-[1.125rem] text-base font-medium rounded-lg gap-2',

    xl: 'h-12 px-5 text-base font-medium rounded-lg gap-2',

    '2xl': 'h-[3.75rem] px-6 text-base font-medium rounded-lg gap-4',

    'icon:sm': 'size-9 rounded-lg',
    'icon:md': 'size-10 rounded-lg',
    'icon:lg': 'size-11 rounded-lg',
    'icon:xl': 'size-12 rounded-lg',
    'icon:2xl': 'size-[3.75rem rounded-lg',
  },
  variant: {
    primary: [
      'shadow-sm bg-brand-600 text-white',
      'hover:bg-brand-700',
      'focus:ring-4 focus:ring-brand-500/25',
      'disabled:bg-gray-50 disabled:border disabled:border-gray-200 disabled:text-gray-400',
    ],
    'secondary-gray': [
      'shadow-sm bg-white text-gray-700 border border-gray-300',
      'hover:bg-gray-50 hover:text-gray-800',
      'focus:ring-4 focus:ring-gray-400/15',
      'disabled:border-gray-200 disabled:text-gray-400',
    ],
    'secondary-color': [
      'shadow-sm bg-brand-50 text-brand-700 border border-brand-300',
      'hover:bg-brand-100 hover:text-brand-800',
      'focus:ring-4 focus:ring-brand-500/25',
      'disabled:border-gray-200 disabled:text-gray-400 disabled:bg-white',
    ],
    'tertiary-gray': [
      'text-gray-600',
      'hover:bg-gray-50 hover:text-gray-700',
      'disabled:text-gray-400',
    ],
    'tertiary-color': [
      'text-brand-700',
      'hover:bg-brand-50 hover:text-brand-800',
      'disabled:text-gray-400',
    ],
    'link-gray': ['text-gray-600', 'hover:text-gray-700', 'disabled:text-gray-400', 'h-auto px-0'],
    'link-color': [
      'text-brand-700',
      'hover:text-brand-800',
      'disabled:text-gray-400',
      'h-auto px-0',
    ],
    'destructive:primary': [
      'shadow-sm bg-error-600 text-white',
      'hover:bg-error-700',
      'focus:ring-4 focus:ring-error-500/25',
      'disabled:bg-gray-50 disabled:border disabled:border-gray-200 disabled:text-gray-400',
    ],
    'destructive:secondary': [
      'shadow-sm bg-white text-error-700 border border-error-300',
      'hover:bg-error-50 hover:text-error-800',
      'focus:ring-4 focus:ring-error-500/25',
      'disabled:gray-200 disabled:text-gray-400',
    ],
    'destructive:tertiary': [
      'text-error-700',
      'hover:bg-error-50 hover:text-error-800',
      'disabled:text-gray-400',
    ],
    'destructive:link': [
      'text-error-700',
      'hover:text-error-800',
      'disabled:text-gray-400',
      'h-auto w-auto px-0 py-0',
    ],
  },
}

export const button = cva('inline-flex items-center justify-center transition-colors', {
  variants: buttonVariants,
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant: hierarchy, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(button({ variant: hierarchy, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'
