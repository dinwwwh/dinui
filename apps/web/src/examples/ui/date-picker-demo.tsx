'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import { Popover, PopoverContent, PopoverTrigger } from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import * as React from 'react'

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-wgray-500')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <DayPicker mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
