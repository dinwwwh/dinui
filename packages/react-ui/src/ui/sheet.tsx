'use client'

import CloseButton from './close-button'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const sheet = tv({
  slots: {
    content: [
      '@container fixed z-50 gap-4 bg-bg--contrast p-6 shadow-lg',
      'transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
    ],
    overlay: [
      'fixed inset-0 z-50 bg-[#000]/80',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    closeButton: 'absolute right-4 top-4',
    title: 'text-lg font-semibold',
    description: 'mt-2 text-sm text-fg-weaker',
    actions: 'mt-4 flex flex-col-reverse gap-2 @xs:flex-row @xs:justify-end',
  },
  variants: {
    side: {
      top: {
        content: [
          'inset-x-0 top-0 border-b',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 h-full max-w-sm w-4/5 border-r',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },
      right: {
        content: [
          'inset-y-0 right-0 h-full max-w-sm w-4/5 border-l',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

type SheetVariantProps = VariantProps<typeof sheet>

const SheetContext = createContext<SheetVariantProps>(sheet.defaultVariants)

const SheetContent = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  Merge<
    Merge<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, SheetVariantProps>,
    {
      portalProps?: React.ComponentProps<typeof SheetPrimitive.Portal>
      overlayProps?: React.ComponentProps<typeof SheetPrimitive.Overlay>
      closeProps?: React.ComponentProps<typeof SheetPrimitive.Close>
      closeButtonProps?: React.ComponentProps<typeof CloseButton>
    }
  >
>(({ portalProps, overlayProps, closeProps, closeButtonProps, side, children, ...props }, ref) => {
  const variantPros = { side }
  const { content, overlay, closeButton } = sheet(variantPros)

  return (
    <SheetContext.Provider value={variantPros}>
      <SheetPrimitive.Portal {...portalProps}>
        <SheetPrimitive.Overlay
          {...overlayProps}
          className={overlay({ className: overlayProps?.className })}
        />

        <SheetPrimitive.Content
          {...props}
          ref={ref}
          className={content({ className: props.className })}
        >
          {children}

          <SheetPrimitive.Close {...closeProps} asChild>
            <CloseButton
              size="sm"
              {...closeButtonProps}
              className={closeButton({ className: closeButtonProps?.className })}
            />
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPrimitive.Portal>
    </SheetContext.Provider>
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetTitle = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>((props, ref) => {
  const variantPros = useContext(SheetContext)
  const { title } = sheet(variantPros)

  return (
    <SheetPrimitive.Title {...props} ref={ref} className={title({ className: props.className })} />
  )
})
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>((props, ref) => {
  const variantPros = useContext(SheetContext)
  const { description } = sheet(variantPros)

  return (
    <SheetPrimitive.Description
      {...props}
      ref={ref}
      className={description({ className: props.className })}
    />
  )
})
SheetDescription.displayName = SheetPrimitive.Description.displayName

const SheetActions = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const variantPros = useContext(SheetContext)
    const { actions } = sheet(variantPros)

    return <div {...props} ref={ref} className={actions({ className: props.className })} />
  },
)
SheetActions.displayName = 'SheetActions'

export const Sheet = Object.assign(SheetPrimitive.Root, {
  Trigger: SheetPrimitive.Trigger,
  Content: SheetContent,
  Title: SheetTitle,
  Description: SheetDescription,
  Actions: SheetActions,
  Close: SheetPrimitive.Close,
})

export default Sheet
export { sheet, SheetPrimitive }
