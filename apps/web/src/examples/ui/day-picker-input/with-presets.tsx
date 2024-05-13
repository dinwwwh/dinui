'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import Popover from '@dinui/react/popover'
import Select from '@dinui/react/select'
import { cn } from '@dinui/react/utils'
import { IconCalendar } from '@tabler/icons-react'
import { addDays, format } from 'date-fns'
import * as React from 'react'

export default function DayPickerInputWithPresets() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-fg-weaker')}
        >
          <Button.LeftIcon>
            <IconCalendar />
          </Button.LeftIcon>

          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content align="start" className="p-0">
        <div className="p-1">
          <Select onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
            <Select.Trigger className="w-full">
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content position="popper">
              <Select.Item value="0">Today</Select.Item>
              <Select.Item value="1">Tomorrow</Select.Item>
              <Select.Item value="3">In 3 days</Select.Item>
              <Select.Item value="7">In a week</Select.Item>
            </Select.Content>
          </Select>
        </div>

        <DayPicker className="mt-1" mode="single" selected={date} onSelect={setDate} />
      </Popover.Content>
    </Popover>
  )
}
