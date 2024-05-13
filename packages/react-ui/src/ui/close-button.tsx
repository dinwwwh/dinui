import { Slot } from '@radix-ui/react-slot'
import { IconX } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const closeButton = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-lg',
      'text-sm font-medium transition-colors disabled:opacity-50',
      'text-fg-weaker hover:text-fg-weaker--hover',
      'hover:bg-bg--hover',
    ],
    icon: null,
  },
  variants: {
    size: {
      xs: {
        root: 'size-7',
        icon: 'size-3.5',
      },
      sm: {
        root: 'size-8',
        icon: 'size-4',
      },
      md: {
        root: 'size-9',
        icon: 'size-[18px]',
      },
      lg: {
        root: 'size-10',
        icon: 'size-5',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const CloseButton = forwardRef<
  HTMLButtonElement,
  Merge<
    Merge<React.ComponentPropsWithoutRef<'button'>, VariantProps<typeof closeButton>>,
    {
      iconProps?: React.ComponentProps<typeof IconX>
    }
  >
>(({ iconProps, size, ...props }, ref) => {
  const { root, icon } = closeButton({ size, className: props.className })

  return (
    <button {...props} ref={ref} className={root({ className: props.className })}>
      <Slot
        {...(iconProps as React.HTMLAttributes<HTMLElement>)}
        className={icon({ className: iconProps?.className })}
      >
        {props?.children || <IconX />}
      </Slot>
    </button>
  )
})
CloseButton.displayName = 'CloseButton'

export default CloseButton
export { closeButton }
