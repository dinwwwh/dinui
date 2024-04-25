import { Slot } from '@radix-ui/react-slot'
import { IconCircle } from '@tabler/icons-react'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Merge } from 'type-fest'

export const button = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center transition',
      'whitespace-nowrap',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    leftIcon: null,
    rightIcon: null,
    icon: null,
  },
  variants: {
    variant: {
      'brand-filled': {
        root: 'bg-brand hover:bg-bg--hover',
      },
      'danger-filled': {
        root: 'bg-danger hover:bg-bg--hover',
      },

      'outline': {
        root: 'bg-bg--contrast hover:bg-bg--hover border text-fg-weak hover:text-fg-weak--hover',
      },
      'danger-outline': {
        root: 'bg-bg--contrast  hover:bg-danger--hover border border-fg-danger text-fg-danger',
      },

      'ghost': {
        root: 'hover:bg-bg--hover text-fg-weak hover:text-fg-weak--hover',
      },
      'brand-ghost': {
        root: 'hover:bg-bg--hover text-fg-brand hover:text-fg-brand--hover',
      },
      'danger-ghost': {
        root: 'hover:bg-bg--hover text-fg-danger hover:text-fg-danger--hover',
      },
    },
    size: {
      sm: {
        root: ['h-8 px-3 rounded-md', 'text-xs font-medium'],
        leftIcon: 'size-4 -ml-0.5 mr-1',
        rightIcon: 'size-4 ml-1 -mr-0.5',
        icon: 'size-4',
      },
      md: {
        root: ['h-9 px-4 rounded-md', 'text-sm font-medium'],
        leftIcon: 'size-[1.125rem] -ml-1 mr-1.5',
        rightIcon: 'size-[1.125rem] ml-1.5 -mr-1',
        icon: 'size-[1.125rem]',
      },
      lg: {
        root: ['h-10 px-5 rounded-md', 'text-sm font-medium'],
        leftIcon: 'size-5 -ml-1.5 mr-2',
        rightIcon: 'size-5 ml-2 -mr-1.5',
        icon: 'size-5',
      },
    },
    icon: {
      true: null,
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      icon: true,
      className: {
        root: 'w-8 px-0',
      },
    },
    {
      size: 'md',
      icon: true,
      className: {
        root: 'w-9 px-0',
      },
    },
    {
      size: 'lg',
      icon: true,
      className: {
        root: 'w-10 px-0',
      },
    },
  ],
  defaultVariants: {
    variant: 'brand-filled',
    size: 'md',
  },
})

const ButtonContext = createContext<VariantProps<typeof button>>(button.defaultVariants)

const ButtonRoot = forwardRef<
  HTMLButtonElement,
  Merge<
    Merge<React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button>>,
    {
      asChild?: boolean
    }
  >
>(({ variant, size, icon, asChild = false, ...props }, ref) => {
  const variantOpts = { variant, size, icon }
  const { root } = button(variantOpts)

  const Comp = asChild ? Slot : 'button'

  return (
    <ButtonContext.Provider value={variantOpts}>
      <Comp {...props} ref={ref} className={root({ className: props.className })} />
    </ButtonContext.Provider>
  )
})
ButtonRoot.displayName = 'ButtonRoot'

const LeftIcon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantOpts = useContext(ButtonContext)
  const { leftIcon } = button(variantOpts)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={leftIcon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
LeftIcon.displayName = 'LeftIcon'

const RightIcon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantOpts = useContext(ButtonContext)
  const { rightIcon } = button(variantOpts)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={rightIcon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
RightIcon.displayName = 'RightIcon'

const Icon = forwardRef<
  React.ElementRef<typeof IconCircle>,
  React.ComponentPropsWithoutRef<typeof IconCircle>
>((props, ref) => {
  const variantOpts = useContext(ButtonContext)
  const { icon } = button(variantOpts)

  return (
    <Slot
      {...(props as React.HTMLAttributes<HTMLElement>)}
      ref={ref as React.ForwardedRef<HTMLElement>}
      className={icon({ className: props.className })}
    >
      {props.children ?? <IconCircle />}
    </Slot>
  )
})
Icon.displayName = 'Icon'

const Button = Object.assign(ButtonRoot, {
  LeftIcon,
  RightIcon,
  Icon,
})

export default Button
