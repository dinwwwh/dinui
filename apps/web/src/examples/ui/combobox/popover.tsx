'use client'

import Button from '@dinui/react/button'
import Command from '@dinui/react/command'
import Popover from '@dinui/react/popover'
import * as React from 'react'

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
]

export default function ComboboxPopover() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-fg-weaker">Status</p>
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </Popover.Trigger>
        <Popover.Content className="p-0" side="right" align="start">
          <Command>
            <Command.Input placeholder="Change status..." />
            <Command.List>
              <Command.List.Empty>No results found.</Command.List.Empty>
              <Command.List.Group>
                {statuses.map((status) => (
                  <Command.List.Item
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) || null,
                      )
                      setOpen(false)
                    }}
                  >
                    {status.label}
                  </Command.List.Item>
                ))}
              </Command.List.Group>
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover>
    </div>
  )
}
