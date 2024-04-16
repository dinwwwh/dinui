'use client'

import { DashIcon } from '@radix-ui/react-icons'
import { OTPInput, OTPInputContext } from 'input-otp'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={twMerge(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName,
    )}
    className={twMerge('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
InputOTP.displayName = 'InputOTP'

export const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

export const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] ?? {}

  return (
    <div
      ref={ref}
      className={twMerge(
        'relative flex h-9 w-9 items-center justify-center border-y border-r border-wgray-200 dark:border-wgray-800 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md ',
        isActive && 'z-10 ring-1 ring-wgray-950 dark:ring-wgray-300',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-wgray-950 duration-1000 dark:bg-wgray-50" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

export const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <DashIcon />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'
