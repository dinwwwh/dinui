import { Slot } from '@radix-ui/react-slot'
import { IconX } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-lg',
      'text-sm font-medium transition-colors disabled:opacity-50 focus-visible:outline-none',
      'text-wgray-400 hover:text-wgray-500',
      'dark:text-wgray-600 hover:text-wgray-500',
      'hover:bg-wgray-50 dark:hover:bg-wgray-900',
      'ring-wgray-400/15 focus:ring-4',
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

export interface CloseButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof button> {
  iconProps?: React.ComponentProps<typeof IconX>
}

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ iconProps, wsize, ...props }, ref) => {
    const { root, root_icon } = button({ wsize, className: props.className })

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
  },
)
CloseButton.displayName = 'CloseButton'

export default CloseButton
