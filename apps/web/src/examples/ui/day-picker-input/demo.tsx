'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import Popover from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { IconCalendar } from '@tabler/icons-react'
import { format } from 'date-fns'
import { useState } from 'react'

export default function DayPickerInputDemo() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[240px] justify-start font-normal', !date && 'text-fg-weaker')}
        >
          <Button.LeftIcon>
            <IconCalendar />
          </Button.LeftIcon>
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <DayPicker mode="single" selected={date} onSelect={setDate} initialFocus />
      </Popover.Content>
    </Popover>
  )
}
