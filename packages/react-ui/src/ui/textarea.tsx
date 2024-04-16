import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          'flex min-h-[60px] w-full rounded-md border border-wgray-200 dark:border-wgray-800 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-wgray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wgray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-wgray-400 dark:focus-visible:ring-wgray-300',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'
