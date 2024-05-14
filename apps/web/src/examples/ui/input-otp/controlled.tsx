'use client'

import InputOTP from '@dinui/react/input-otp'
import * as React from 'react'

export default function InputOTPControlled() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
      <div className="text-center text-sm">
        {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  )
}
