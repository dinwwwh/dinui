'use client'

import { button } from './button'
import { Toaster as ToasterPrimitive, toast } from 'sonner'
import { tv } from 'tailwind-variants'

const toaster = tv({
  slots: {
    root: 'toaster group z-50',
    toast: [
      'group toast bg-bg--contrast shadow-lg',
      'flex items-center gap-2',
      'w-full p-4 border rounded-md',
      '[&>[data-content]]:pr-4',
      '[&>[data-icon]]:text-fg-weak',
      '[&[data-type=error]>[data-icon]]:text-fg-danger',
      '[&>[data-button=true][data-cancel=true]]:bg-bg--contrast',
    ],
    title: 'text-[0.8125rem] font-medium',
    description: 'mt-1 text-[0.8125rem] text-fg-weaker',
    actionButton: button({ size: 'xs' }).root(),
    cancelButton: button({ size: 'xs', variant: 'ghost' }).root(),
  },
})

const Toaster = ({ ...props }: React.ComponentPropsWithoutRef<typeof ToasterPrimitive>) => {
  const { root, toast, title, description, actionButton, cancelButton } = toaster()

  return (
    <ToasterPrimitive
      theme={'__inherit__' as 'light'}
      {...props}
      className={root({ className: props.className })}
      toastOptions={{
        unstyled: true,

        ...props.toastOptions,

        classNames: {
          ...props.toastOptions?.classNames,

          toast: toast({ className: props.toastOptions?.classNames?.toast }),
          title: title({ className: props.toastOptions?.classNames?.title }),
          description: description({ className: props.toastOptions?.classNames?.description }),
          actionButton: actionButton({ className: props.toastOptions?.classNames?.actionButton }),
          cancelButton: cancelButton({ className: props.toastOptions?.classNames?.cancelButton }),
        },
      }}
    />
  )
}

export default toast
export { toaster, Toaster }
export * as ToastPrimitive from 'sonner'
