'use client'

import { IconGripVertical } from '@tabler/icons-react'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const resizable = tv({
  slots: {
    root: 'flex data-[panel-group-direction=vertical]:flex-col',
    handle: [
      'relative flex w-px items-center justify-center bg-border',
      'focus-visible:outline-1',
      'data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full',
      '[&[data-panel-group-direction=vertical]_[data-el=indicator]]:rotate-90',
    ],
    handleIndicator:
      'z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-bg--contrast',
    handleIndicatorIcon: 'size-2.5',
  },
})

function ResizableRoot(props: React.ComponentProps<typeof PanelGroup>) {
  const { root } = resizable()

  return <PanelGroup {...props} className={root({ className: props.className })} />
}

function ResizableHandle({
  indicatorProps,
  indicatorIconProps,
  withIndicator,
  ...props
}: Merge<
  React.ComponentProps<typeof PanelResizeHandle>,
  {
    withIndicator?: boolean
    indicatorProps?: React.ComponentProps<'div'>
    indicatorIconProps?: React.ComponentProps<typeof IconGripVertical>
  }
>) {
  const { handle, handleIndicator, handleIndicatorIcon } = resizable()

  return (
    <PanelResizeHandle {...props} className={handle({ className: props.className })}>
      {withIndicator && (
        <div
          {...indicatorProps}
          data-el="indicator"
          className={handleIndicator({ className: indicatorProps?.className })}
        >
          <IconGripVertical
            {...indicatorIconProps}
            className={handleIndicatorIcon({ className: indicatorIconProps?.className })}
          />
        </div>
      )}
    </PanelResizeHandle>
  )
}

const Resizable = Object.assign(ResizableRoot, {
  Panel,
  Handle: ResizableHandle,
})

export default Resizable
export { resizable }
export * as ResizablePrimitive from 'react-resizable-panels'
