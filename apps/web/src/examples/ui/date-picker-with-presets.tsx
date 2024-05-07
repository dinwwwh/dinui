'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import Popover from '@dinui/react/popover'
import Select from '@dinui/react/select'
import { cn } from '@dinui/react/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { addDays, format } from 'date-fns'
import * as React from 'react'

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-wgray-500')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content align="start" className="flex w-auto flex-col space-y-2 p-2">
        <Select onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content position="popper">
            <Select.Content.Item value="0">Today</Select.Content.Item>
            <Select.Content.Item value="1">Tomorrow</Select.Content.Item>
            <Select.Content.Item value="3">In 3 days</Select.Content.Item>
            <Select.Content.Item value="7">In a week</Select.Content.Item>
          </Select.Content>
        </Select>
        <div className="rounded-md border">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </Popover.Content>
    </Popover>
  )
}
