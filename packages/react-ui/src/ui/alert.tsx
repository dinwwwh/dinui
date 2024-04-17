import CloseButton from './close-button'
import { Slot } from '@radix-ui/react-slot'
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconExclamationCircle,
} from '@tabler/icons-react'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { P, match } from 'ts-pattern'

export const alert = tv({
  slots: {
    root: 'flex rounded-md py-4 pl-2 pr-4',
    icon_wrapper: 'place-self-start p-2 rounded-full -mt-1',
    icon: 'flex-shrink-0 size-4',
    content: 'ml-3 flex-1',
    title: 'text-sm font-medium',
    description: 'mt-1 text-sm',
    closeButton: '-mt-2.5 -mr-2.5',
  },
  variants: {
    wvariant: {
      base: {
        root: 'bg-wwhite dark:bg-wgray-950 border border-wgray-200 dark:border-wgray-800',
      },
      soft: null,
    },
    wborder: {
      none: null,
      left: null,
    },
    wcolor: {
      wbrand: {
        icon_wrapper: 'bg-wbrand-50 dark:bg-wbrand-900/25',
        icon: 'text-wbrand-500 dark:text-wbrand-400',
      },
      wgray: {
        icon_wrapper: 'bg-wgray-50 dark:bg-wgray-900/25',
        icon: 'text-wgray-500 dark:text-wgray-400',
      },
      wsuccess: {
        icon_wrapper: 'bg-wsuccess-50 dark:bg-wsuccess-900/25',
        icon: 'text-wsuccess-500 dark:text-wsuccess-400',
      },
      wwarning: {
        icon_wrapper: 'bg-wwarning-50 dark:bg-wwarning-900/25',
        icon: 'text-wwarning-500 dark:text-wwarning-400',
      },
      werror: {
        icon_wrapper: 'bg-werror-50 dark:bg-werror-900/25',
        icon: 'text-werror-500 dark:text-werror-400',
      },
    },
  },
  compoundVariants: [
    {
      wvariant: 'soft',
      wcolor: 'wbrand',
      className: {
        root: 'bg-wbrand-50 dark:bg-wbrand-900 text-wbrand-700 dark:text-wbrand-300',
        description: 'text-wbrand-600 dark:text-wbrand-400',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wgray',
      className: {
        root: 'bg-wgray-50 dark:bg-wgray-900 text-wgray-700 dark:text-wgray-300',
        description: 'text-wgray-600 dark:text-wgray-400',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wsuccess',
      className: {
        root: 'bg-wsuccess-50 dark:bg-wsuccess-900 text-wsuccess-700 dark:text-wsuccess-300',
        description: 'text-wsuccess-600 dark:text-wsuccess-400',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wwarning',
      className: {
        root: 'bg-wwarning-50 dark:bg-wwarning-900 text-wwarning-700 dark:text-wwarning-300',
        description: 'text-wwarning-600 dark:text-wwarning-400',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'werror',
      className: {
        root: 'bg-werror-50 dark:bg-werror-900 text-werror-700 dark:text-werror-300',
        description: 'text-werror-600 dark:text-werror-400',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wbrand',
      wborder: 'left',
      className: {
        root: 'border-l-2 border-wbrand-700 dark:border-wbrand-300',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wgray',
      wborder: 'left',
      className: {
        root: 'border-l-2 border-wgray-700 dark:border-wgray-300',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wsuccess',
      wborder: 'left',
      className: {
        root: 'border-l-2 border-wsuccess-700 dark:border-wsuccess-300',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'wwarning',
      wborder: 'left',
      className: {
        root: 'border-l-2 border-wwarning-700 dark:border-wwarning-300',
      },
    },
    {
      wvariant: 'soft',
      wcolor: 'werror',
      wborder: 'left',
      className: {
        root: 'border-l-2 border-werror-700 dark:border-werror-300',
      },
    },
  ],
  defaultVariants: {
    wvariant: 'base',
    wborder: 'none',
    wcolor: 'wbrand',
  },
})

type AlertVariantProps = VariantProps<typeof alert>

const AlertContext = createContext<AlertVariantProps>(alert.defaultVariants)

const AlertRoot = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariantProps
>(({ className, wvariant, wcolor, wborder, ...props }, ref) => {
  const variantOpts = { wvariant, wcolor, wborder }
  const { root } = alert(variantOpts)

  return (
    <AlertContext.Provider value={variantOpts}>
      <div ref={ref} role="alert" className={root({ className })} {...props} />
    </AlertContext.Provider>
  )
})
AlertRoot.displayName = 'AlertRoot'

interface AlertIconProps extends React.ComponentPropsWithoutRef<'div'> {
  wrapperProps?: React.ComponentProps<'div'>
}

const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(({ wrapperProps, ...props }, ref) => {
  const variantOpts = useContext(AlertContext)
  const { icon, icon_wrapper } = alert(variantOpts)

  return (
    <div {...wrapperProps} className={icon_wrapper({ className: wrapperProps?.className })}>
      <Slot {...props} ref={ref} className={icon({ className: props.className })}>
        {props.children ||
          match(variantOpts.wcolor)
            .with(P.union(undefined, 'wbrand', 'wgray'), () => <IconExclamationCircle />)
            .with('wsuccess', () => <IconCircleCheck />)
            .with('wwarning', () => <IconAlertTriangle />)
            .with('werror', () => <IconCircleX />)
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
