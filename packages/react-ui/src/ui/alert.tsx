import CloseButton from './close-button'
import { Slot } from '@radix-ui/react-slot'
import { IconCircleX, IconExclamationCircle } from '@tabler/icons-react'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { P, match } from 'ts-pattern'
import type { Merge } from 'type-fest'

export const alert = tv({
  slots: {
    root: 'flex rounded-md py-4 pl-2 pr-4 bg-bg--contrast border',
    icon_wrapper: 'place-self-start p-1 rounded-full ml-1',
    icon: 'flex-shrink-0 size-4',
    content: 'ml-3 flex-1',
    title: 'text-sm font-medium',
    description: 'mt-1 text-sm text-fg-weak',
    closeButton: '-mt-2.5 -mr-2.5',
  },
  variants: {
    color: {
      brand: {
        icon: 'text-fg-brand',
      },
      danger: {
        icon: 'text-fg-danger',
      },
    },
  },
})

type AlertVariantProps = VariantProps<typeof alert>

const AlertContext = createContext<AlertVariantProps>(alert.defaultVariants)

const AlertRoot = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariantProps
>(({ className, color, ...props }, ref) => {
  const variantOpts = { color }
  const { root } = alert(variantOpts)

  return (
    <AlertContext.Provider value={variantOpts}>
      <div ref={ref} role="alert" className={root({ className })} {...props} />
    </AlertContext.Provider>
  )
})
AlertRoot.displayName = 'AlertRoot'

type AlertIconProps = Merge<
  React.ComponentPropsWithoutRef<'div'>,
  {
    wrapperProps?: React.ComponentProps<'div'>
  }
>

const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(({ wrapperProps, ...props }, ref) => {
  const variantOpts = useContext(AlertContext)
  const { icon, icon_wrapper } = alert(variantOpts)

  return (
    <div {...wrapperProps} className={icon_wrapper({ className: wrapperProps?.className })}>
      <Slot {...props} ref={ref} className={icon({ className: props.className })}>
        {props.children ||
          match(variantOpts.color)
            .with(P.union(undefined, 'brand'), () => <IconExclamationCircle />)
            .with('danger', () => <IconCircleX />)
            .exhaustive()}
      </Slot>
    </div>
  )
})
AlertIcon.displayName = 'AlertIcon'

const AlertContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const variantOpts = useContext(AlertContext)
    const { content } = alert(variantOpts)

    return <div {...props} ref={ref} className={content({ className: props.className })} />
  },
)
AlertContent.displayName = 'AlertContent'

const AlertTitle = forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'h5'>>(
  (props, ref) => {
    const variantOpts = useContext(AlertContext)
    const { title } = alert(variantOpts)

    return <h4 {...props} ref={ref} className={title({ className: props.className })} />
  },
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const variantOpts = useContext(AlertContext)
    const { description } = alert(variantOpts)

    return <div {...props} ref={ref} className={description({ className: props.className })} />
  },
)
AlertDescription.displayName = 'AlertDescription'

const AlertCloseButton = forwardRef<
  React.ElementRef<typeof CloseButton>,
  React.ComponentPropsWithoutRef<typeof CloseButton>
>((props, ref) => {
  const variantOpts = useContext(AlertContext)
  const { closeButton } = alert(variantOpts)

  return (
    <CloseButton
      wsize="xs"
      {...props}
      ref={ref}
      className={closeButton({ className: props.className })}
    />
  )
})
AlertCloseButton.displayName = 'AlertCloseButton'

const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Content: Object.assign(AlertContent, {
    Title: AlertTitle,
    Description: AlertDescription,
  }),
  CloseButton: AlertCloseButton,
})

export default Alert
