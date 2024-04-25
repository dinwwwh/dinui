import { Slot } from '@radix-ui/react-slot'
import { IconX } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Merge } from 'type-fest'

const closeButton = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-lg',
      'text-sm font-medium transition-colors disabled:opacity-50',
      'text-fg-weaker hover:text-fg-weaker--hover',
      'hover:bg-bg--hover',
    ],
    root_icon: null,
  },
  variants: {
    wsize: {
      xs: {
        root: 'size-7',
        root_icon: 'size-3.5',
      },
      sm: {
        root: 'size-8',
        root_icon: 'size-4',
      },
      md: {
        root: 'size-9',
        root_icon: 'size-[18px]',
      },
      lg: {
        root: 'size-10',
        root_icon: 'size-5',
      },
    },
  },
  defaultVariants: {
    wsize: 'sm',
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
>(({ iconProps, wsize, ...props }, ref) => {
  const { root, root_icon } = closeButton({ wsize, className: props.className })

  return (
    <button {...props} ref={ref} className={root({ className: props.className })}>
      <Slot
        {...(iconProps as React.HTMLAttributes<HTMLElement>)}
        className={root_icon({ className: iconProps?.className })}
      >
        {props?.children || <IconX />}
      </Slot>
    </button>
  )
})
CloseButton.displayName = 'CloseButton'

export default CloseButton
export { closeButton }
