'use client'

import DayPicker from '@dinui/react/day-picker'
import { useState } from 'react'

export default function DayPickerVariantDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
    />
  )
}
