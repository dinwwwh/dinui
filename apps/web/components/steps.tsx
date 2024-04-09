import { cn } from '@dinui/react/utils'
import { forwardRef } from 'react'

const StepsRoot = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    return <div {...props} ref={ref} className={cn('mb-12 ml-3 border-l pl-7', props.className)} />
  },
)

const StepHeading = forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h3'>>(
  (props, ref) => {
    return (
      <h3
        {...props}
        ref={ref}
        className={cn(
          '[counter-increment:step] mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-6',
          '[&:before]:absolute [&:before]:w-7 [&:before]:h-7 [&:before]:ml-[-42px] [&:before]:inline-flex [&:before]:items-center [&:before]:justify-center',
          '[&:before]:rounded-full [&:before]:bg-gray-200 dark:[&:before]:bg-gray-700',
          '[&:before]:[content:counter(step)] [&:before]:font-mono [&:before]:font-medium [&:before]:text-sm [&:before]:pt-[2.5px] [&:before]:text-gray-700 dark:[&:before]:text-gray-300',
          props.className,
        )}
      />
    )
  },
)
export const Steps = Object.assign(StepsRoot, {
  Heading: StepHeading,
})
