import type * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const badge = tv({
  base: 'inline-flex items-center rounded-md border border-wgray-200 dark:border-wgray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-wgray-950 focus:ring-offset-2  dark:focus:ring-wgray-300',
  variants: {
    variant: {
      default:
        'border-transparent bg-wgray-900 text-wgray-50 shadow hover:bg-wgray-900/80 dark:bg-wgray-50 dark:text-wgray-900 dark:hover:bg-wgray-50/80',
      secondary:
        'border-transparent bg-wgray-100 text-wgray-900 hover:bg-wgray-100/80 dark:bg-wgray-800 dark:text-wgray-50 dark:hover:bg-wgray-800/80',
      destructive:
        'border-transparent bg-red-500 text-wgray-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-wgray-50 dark:hover:bg-red-900/80',
      outline: 'text-wgray-950 dark:text-wgray-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={badge({ variant, className })} {...props} />
}
