'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons-react'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

export const accordion = tv({
  slots: {
    item: 'border-b border-gray-200 dark:border-gray-800',
    trigger: [
      'w-full flex items-center justify-between py-4 gap-3 transition-all hover:underline',
      'text-sm font-medium text-gray-900 dark:text-gray-50',
      '[&[data-state=open]>[data-el=icon]]:rotate-180',
    ],
    trigger_icon:
      'size-4 shrink-0 text-wgray-500 transition-transform duration-200 dark:text-wgray-400',
    content: [
      'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'text-sm text-wgray-600 dark:text-wgray-400',
    ],
    content_wrapper: 'pb-4',
  },
})

const AccordionRoot = AccordionPrimitive.Root

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => {
  const { item } = accordion()

  return (
    <AccordionPrimitive.Item
      {...props}
      ref={ref}
      className={item({ className: props.className })}
    />
  )
})
AccordionItem.displayName = 'AccordionItem'

interface AccordionTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, 'asChild'> {
  headerProps?: React.ComponentProps<typeof AccordionPrimitive.Header>
  iconProps?: React.ComponentProps<typeof IconChevronDown>
}

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ headerProps, iconProps, children, ...props }, ref) => {
  const { trigger, trigger_icon } = accordion()

  return (
    <AccordionPrimitive.Header {...headerProps}>
      <AccordionPrimitive.Trigger
        {...props}
        ref={ref}
        className={trigger({ className: props.className })}
      >
        {children}

        <IconChevronDown
          {...iconProps}
          data-el="icon"
          className={trigger_icon({ className: iconProps?.className })}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  wrapperProps?: React.ComponentProps<'div'>
}

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ wrapperProps, children, ...props }, ref) => {
  const { content, content_wrapper } = accordion()

  return (
    <AccordionPrimitive.Content
      {...props}
      ref={ref}
      className={content({ className: props.className })}
    >
      <div {...wrapperProps} className={content_wrapper({ className: wrapperProps?.className })}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

const Accordion = Object.assign(AccordionRoot, {
  Item: Object.assign(AccordionItem, {
    Trigger: AccordionTrigger,
    Content: AccordionContent,
  }),
})

export default Accordion
