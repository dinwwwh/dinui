'use client'

import DayPicker, { type DateRange } from '@dinui/react/day-picker'
import { useState } from 'react'

export default function DayPickerRangeDemo() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  })

  return (
    <DayPicker
      mode="range"
      selected={date}
      onSelect={setDate}
      disabled={[new Date(Date.now() - 24 * 60 * 60 * 1000)]}
      numberOfMonths={2}
      className="rounded-md border shadow-sm"
    />
  )
}
