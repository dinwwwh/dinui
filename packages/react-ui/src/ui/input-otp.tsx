'use client'

import { OTPInput, OTPInputContext } from 'input-otp'
import React, { forwardRef, useContext } from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const inputOTP = tv({
  slots: {
    root: 'disabled:cursor-not-allowed',
    container: 'flex items-center gap-2 has-[:disabled]:opacity-50',
    group: 'flex items-center',
    slot: [
      'relative flex size-9 items-center justify-center',
      'text-sm shadow-sm transition-all',
      'border-y border-r first:rounded-l-md first:border-l last:rounded-r-md',
      'data-[active=true]:z-10 data-[active=true]:outline data-[active=true]:outline-2',
    ],
    fakeCaret: ['pointer-events-none', 'h-4 w-px animate-caret-blink bg-fg duration-1000'],
    separator: null,
  },
})

const InputOTPRoot = forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>((props, ref) => {
  const { root, container } = inputOTP()

  return (
    <OTPInput
      {...props}
      ref={ref}
      containerClassName={container({ className: props.containerClassName })}
      className={root({ className: props.className })}
    />
  )
})
InputOTPRoot.displayName = 'InputOTP'

const InputOTPGroup = forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const { group } = inputOTP()

    return <div {...props} ref={ref} className={group({ className: props.className })} />
  },
)
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = forwardRef<
  React.ElementRef<'div'>,
  Merge<
    React.ComponentPropsWithoutRef<'div'>,
    {
      index: number
      fakeCaretProps?: React.ComponentProps<'div'>
    }
  >
>(({ index, fakeCaretProps, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] ?? {}
  const { slot, fakeCaret } = inputOTP()

  return (
    <div
      {...props}
      ref={ref}
      data-active={isActive}
      className={slot({ className: props.className })}
    >
      {char}
      {hasFakeCaret && (
        <div {...fakeCaretProps} className={fakeCaret({ className: fakeCaretProps?.className })} />
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const { separator } = inputOTP()

  return (
    <div
      role="separator"
      {...props}
      ref={ref}
      className={separator({ className: props.className })}
    >
      -
    </div>
  )
})
InputOTPSeparator.displayName = 'InputOTPSeparator'

const InputOTP = Object.assign(InputOTPRoot, {
  Slot: InputOTPSlot,
  Group: InputOTPGroup,
  Separator: InputOTPSeparator,
})

export default InputOTP
export { inputOTP }
export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
export * as InputOTPPrimitive from 'input-otp'
