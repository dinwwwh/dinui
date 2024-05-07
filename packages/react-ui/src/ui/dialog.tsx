'use client'

import CloseButton from './close-button'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const dialog = tv({
  slots: {
    content: [
      '@container',
      'z-50 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
      'w-full max-w-lg border bg-bg--contrast p-6 shadow-lg sm:rounded-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    ],
    content_overlay: [
      'fixed inset-0 z-50 bg-[#000]/80',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content_closeButton: 'absolute right-4 top-4',
    title: 'text-lg font-semibold leading-none tracking-tight text-center @md:text-left',
    description: 'text-sm text-fg-weaker mt-2 text-center @md:text-left',
    actions: 'mt-4 flex flex-col-reverse gap-2 @md:flex-row @md:justify-end',
  },
})

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof DialogPrimitive.DialogPortal>
      overlayProps?: React.ComponentProps<typeof DialogPrimitive.Overlay>
      closeButtonProps?: React.ComponentProps<typeof CloseButton>
      closeProps?: React.ComponentProps<typeof DialogPrimitive.Close>
    }
  >
>(({ portalProps, overlayProps, closeProps, closeButtonProps, children, ...props }, ref) => {
  const { content, content_overlay, content_closeButton } = dialog()

  return (
    <DialogPrimitive.DialogPortal {...portalProps}>
      <DialogPrimitive.Overlay
        {...overlayProps}
        className={content_overlay({ className: overlayProps?.className })}
      />

      <DialogPrimitive.Content
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      >
        {children}

        <DialogPrimitive.Close {...closeProps} asChild>
          <CloseButton
            wsize="sm"
            {...closeButtonProps}
            className={content_closeButton({ className: closeButtonProps?.className })}
          />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogActions = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const { actions } = dialog()

    return <div {...props} ref={ref} className={actions({ className: props.className })} />
  },
)
DialogActions.displayName = 'DialogActions'

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => {
  const { title } = dialog()

  return (
    <DialogPrimitive.Title {...props} ref={ref} className={title({ className: props.className })} />
  )
})
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => {
  const { description } = dialog()

  return (
    <DialogPrimitive.Description
      {...props}
      ref={ref}
      className={description({ className: props.className })}
    />
  )
})
DialogDescription.displayName = DialogPrimitive.Description.displayName

const Dialog = Object.assign(DialogPrimitive.Root, {
  Trigger: DialogPrimitive.Trigger,
  Content: Object.assign(DialogContent, {
    Title: DialogTitle,
    Description: DialogDescription,
    Actions: DialogActions,
    Close: DialogPrimitive.Close,
  }),
})

export default Dialog

export { dialog, DialogPrimitive }
