'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import Popover from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { IconCalendarWeek } from '@tabler/icons-react'
import { addDays, format } from 'date-fns'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function DayPickerInputWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <Popover.Trigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-fg-weaker',
            )}
          >
            <Button.LeftIcon>
              <IconCalendarWeek />
            </Button.LeftIcon>

            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-auto p-0" align="start">
          <DayPicker
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </Popover.Content>
      </Popover>
    </div>
  )
}
