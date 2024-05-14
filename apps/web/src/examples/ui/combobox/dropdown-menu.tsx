'use client'

import Badge from '@dinui/react/badge'
import Button from '@dinui/react/button'
import Command from '@dinui/react/command'
import DropdownMenu from '@dinui/react/dropdown-menu'
import { IconDots } from '@tabler/icons-react'
import * as React from 'react'

const labels = [
  'feature',
  'bug',
  'enhancement',
  'documentation',
  'design',
  'question',
  'maintenance',
]

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState('feature')
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <Badge className="mr-2">{label}</Badge>
        <span className="text-fg-weaker">Create a new project</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm" icon>
            <Button.Icon>
              <IconDots />
            </Button.Icon>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="w-[200px]">
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Group>
            <DropdownMenu.Item>Assign to...</DropdownMenu.Item>
            <DropdownMenu.Item>Set due date...</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Sub>
              <DropdownMenu.Sub.Trigger>Apply label</DropdownMenu.Sub.Trigger>
              <DropdownMenu.Sub.Content className="p-0">
                <Command>
                  <Command.Input placeholder="Filter label..." autoFocus={true} className="h-9" />
                  <Command.List>
                    <Command.Empty>No label found.</Command.Empty>
                    <Command.Group>
                      {labels.map((label) => (
                        <Command.Item
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          {label}
                        </Command.Item>
                      ))}
                    </Command.Group>
                  </Command.List>
                </Command>
              </DropdownMenu.Sub.Content>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="text-red-600">
              Delete
              <DropdownMenu.Item.Shortcut>⌘⌫</DropdownMenu.Item.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
