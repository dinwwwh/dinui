'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import { Popover, PopoverContent, PopoverTrigger } from '@dinui/react/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@dinui/react/select'
import { cn } from '@dinui/react/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { addDays, format } from 'date-fns'
import * as React from 'react'

export default function DatePickerWithPresets() {
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
      <PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
        <Select onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
