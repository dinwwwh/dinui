import Button from './button'
import { IconX } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const closeButton = tv({
  slots: {
    root: ['text-fg-weaker hover:text-fg-weaker--hover'],
  },
})

const CloseButton = forwardRef<
  React.ComponentRef<typeof Button>,
  Merge<
    React.ComponentPropsWithoutRef<typeof Button>,
    {
      iconProps?: React.ComponentProps<typeof Button.Icon>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { root } = closeButton()

  return (
    <Button
      variant="ghost"
      icon
      {...props}
      ref={ref}
      className={root({ className: props.className })}
    >
      <Button.Icon {...iconProps}>{props.children ?? <IconX />}</Button.Icon>
      <span className="sr-only">Close</span>
    </Button>
  )
})
CloseButton.displayName = 'CloseButton'

export default CloseButton
export { closeButton }
