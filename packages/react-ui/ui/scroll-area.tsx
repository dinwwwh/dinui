'use client'

import { cn } from '../utils'
import * as ReactScrollArea from '@radix-ui/react-scroll-area'
import * as React from 'react'

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ReactScrollArea.Root> {
  viewportProps?: React.ComponentProps<typeof ReactScrollArea.Viewport>
  verticalScrollBarProps?: React.ComponentProps<typeof ScrollBar>
  horizontalScrollBarProps?: React.ComponentProps<typeof ScrollBar>
  cornerProps?: React.ComponentProps<typeof ReactScrollArea.Corner>
}

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Root>,
  ScrollAreaProps
>(
  (
    {
      horizontalScrollBarProps,
      verticalScrollBarProps,
      viewportProps,
      cornerProps,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <ReactScrollArea.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ReactScrollArea.Viewport
        {...viewportProps}
        className={cn('h-full w-full rounded-[inherit]', viewportProps?.className)}
      >
        {children}
      </ReactScrollArea.Viewport>
      <ScrollBar {...verticalScrollBarProps} orientation="vertical" />
      <ScrollBar {...horizontalScrollBarProps} orientation="horizontal" />
      <ReactScrollArea.Corner {...cornerProps} />
    </ReactScrollArea.Root>
  ),
)
ScrollArea.displayName = ReactScrollArea.Root.displayName

interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ReactScrollArea.ScrollAreaScrollbar> {
  scrollAreaThumb?: React.ComponentProps<typeof ReactScrollArea.ScrollAreaThumb>
}

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ scrollAreaThumb, className, orientation = 'vertical', ...props }, ref) => (
  <ReactScrollArea.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-1.5 hover:w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-1.5 hover:h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className,
    )}
    {...props}
  >
    <ReactScrollArea.ScrollAreaThumb
      {...scrollAreaThumb}
      className={cn('relative flex-1 rounded-full bg-gray-300/70', scrollAreaThumb?.className)}
    />
  </ReactScrollArea.ScrollAreaScrollbar>
))
ScrollBar.displayName = ReactScrollArea.ScrollAreaScrollbar.displayName
