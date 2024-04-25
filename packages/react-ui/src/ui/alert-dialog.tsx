'use client'

import Button from './button'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import type * as _A from '@radix-ui/react-dismissable-layer'
import type React from 'react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const alertDialog = tv({
  slots: {
    content: [
      '@container',
      'fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg',
    ],
    content_wrapper: [
      '@lg:rounded-lg',
      'border bg-bg--contrast p-6 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    ],
    content_portal: null,
    content_overlay: [
      'fixed inset-0 z-50 bg-[#000]/80',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    title: 'text-lg font-semibold text-center @lg:text-left',
    description: 'mt-2 text-sm text-fg-weaker text-center @lg:text-left',
    actions: 'mt-4 flex flex-col-reverse gap-2 @lg:flex-row @lg:justify-end',
  },
})

const AlertDialogContent = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
    {
      portalProps?: React.ComponentProps<typeof AlertDialogPrimitive.Portal>
      overlayProps?: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>
      contentWrapperProps?: React.ComponentProps<'div'>
    }
  >
>(({ portalProps, overlayProps, contentWrapperProps, ...props }, ref) => {
  const { content, content_wrapper, content_overlay } = alertDialog()

  return (
    <AlertDialogPrimitive.Portal {...portalProps}>
      <AlertDialogPrimitive.Overlay
        {...overlayProps}
        className={content_overlay({ className: overlayProps?.className })}
      />
      <AlertDialogPrimitive.Content
        {...props}
        ref={ref}
        className={content({ className: props.className })}
      >
        <div
          {...contentWrapperProps}
          className={content_wrapper({ className: contentWrapperProps?.className })}
        >
          {props.children}
        </div>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  )
})
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogTitle = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>((props, ref) => {
  const { title } = alertDialog()

  return (
    <AlertDialogPrimitive.Title
      {...props}
      ref={ref}
      className={title({ className: props.className })}
    />
  )
})
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>((props, ref) => {
  const { description } = alertDialog()

  return (
    <AlertDialogPrimitive.Description
      {...props}
      ref={ref}
      className={description({ className: props.className })}
    />
  )
})
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const AlertDialogActions = forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithRef<'div'>>(
  (props, ref) => {
    const { actions } = alertDialog()

    return <div {...props} ref={ref} className={actions({ className: props.className })} />
  },
)
AlertDialogActions.displayName = 'AlertDialogActions'

const AlertDialogAction = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  Merge<
    React.ComponentPropsWithoutRef<typeof Button>,
    {
      cancelProps?: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
    }
  >
>(({ cancelProps, children, asChild, ...props }, ref) => {
  return (
    <Button {...props} asChild>
      <AlertDialogPrimitive.Action {...cancelProps} ref={ref} asChild={asChild}>
        {children}
      </AlertDialogPrimitive.Action>
    </Button>
  )
})
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  Merge<
    React.ComponentPropsWithoutRef<typeof Button>,
    {
      cancelProps?: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
    }
  >
>(({ cancelProps, children, asChild, ...props }, ref) => {
  return (
    <Button variant="outline" {...props} asChild>
      <AlertDialogPrimitive.Cancel {...cancelProps} ref={ref} asChild={asChild}>
        {children}
      </AlertDialogPrimitive.Cancel>
    </Button>
  )
})
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

const AlertDialog = Object.assign(AlertDialogPrimitive.Root, {
  Trigger: AlertDialogPrimitive.Trigger,
  Content: Object.assign(AlertDialogContent, {
    Title: AlertDialogTitle,
    Description: AlertDialogDescription,
    Actions: AlertDialogActions,
    Action: Object.assign({ ...Button }, AlertDialogAction),
    Cancel: Object.assign({ ...Button }, AlertDialogCancel),
  }),
})

export default AlertDialog
export { alertDialog, AlertDialogPrimitive }
