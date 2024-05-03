'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const scrollArea = tv({
  slots: {
    root: 'relative overflow-hidden',
    viewport: 'h-full w-full rounded-[inherit]',
    scrollbar: 'flex touch-none select-none transition-colors',
    thumb: 'relative flex-1 rounded-full bg-border',
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: 'h-full w-2.5 border-l border-l-transparent p-[0.0625rem]',
      },
      horizontal: {
        scrollbar: 'h-2.5 flex-col border-t border-t-transparent p-[0.0625rem]',
      },
    },
  },
})

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    {
      viewportProps?: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>
      cornerProps?: React.ComponentProps<typeof ScrollAreaPrimitive.Corner>

      orientation?: 'vertical' | 'horizontal'
      verticalScrollbarProps?: React.ComponentProps<typeof ScrollBar>
      horizontalScrollbarProps?: React.ComponentProps<typeof ScrollBar>
    }
  >
>(
  (
    {
      viewportProps,
      cornerProps,
      orientation,
      verticalScrollbarProps,
      horizontalScrollbarProps,
      children,
      ...props
    },
    ref,
  ) => {
    const { root, viewport } = scrollArea()

    return (
      <ScrollAreaPrimitive.Root
        {...props}
        ref={ref}
        className={root({ className: props.className })}
      >
        <ScrollAreaPrimitive.Viewport
          {...viewportProps}
          className={viewport({ className: viewportProps?.className })}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>

        {!orientation || orientation === 'horizontal' ? (
          <ScrollBar orientation="horizontal" {...horizontalScrollbarProps} />
        ) : null}

        {!orientation || orientation === 'vertical' ? (
          <ScrollBar orientation="vertical" {...verticalScrollbarProps} />
        ) : null}

        <ScrollAreaPrimitive.Corner {...cornerProps} />
      </ScrollAreaPrimitive.Root>
    )
  },
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  Merge<
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    {
      thumbProps?: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaThumb>
    }
  >
>(({ thumbProps, ...props }, ref) => {
  const { scrollbar, thumb } = scrollArea({ orientation: props.orientation })

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      {...props}
      ref={ref}
      className={scrollbar({ className: props.className })}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        {...thumbProps}
        className={thumb({ className: thumbProps?.className })}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export default ScrollArea
export { scrollArea, ScrollAreaPrimitive }
