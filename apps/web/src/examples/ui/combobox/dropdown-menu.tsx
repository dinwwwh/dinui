'use client'

import Button from '@dinui/react/button'
import Command from '@dinui/react/command'
import DropdownMenu from '@dinui/react/dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
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
    <div className="flex w-full flex-col items-start justify-between rounded-md border border-wgray-200 dark:border-wgray-800 px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="mr-2 rounded-lg bg-wgray-900 px-2 py-1 text-xs text-wgray-50">
          {label}
        </span>
        <span className="text-wgray-500">Create a new project</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm">
            <DotsHorizontalIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="w-[200px]">
          <DropdownMenu.Content.Label>Actions</DropdownMenu.Content.Label>
          <DropdownMenu.Content.Group>
            <DropdownMenu.Content.Item>Assign to...</DropdownMenu.Content.Item>
            <DropdownMenu.Content.Item>Set due date...</DropdownMenu.Content.Item>
            <DropdownMenu.Content.Separator />
            <DropdownMenu.Content.Sub>
              <DropdownMenu.Content.Sub.Trigger>Apply label</DropdownMenu.Content.Sub.Trigger>
              <DropdownMenu.Content.Sub.Content className="p-0">
                <Command>
                  <Command.Input placeholder="Filter label..." autoFocus={true} className="h-9" />
                  <Command.List>
                    <Command.List.Empty>No label found.</Command.List.Empty>
                    <Command.List.Group>
                      {labels.map((label) => (
                        <Command.List.Item
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          {label}
                        </Command.List.Item>
                      ))}
                    </Command.List.Group>
                  </Command.List>
                </Command>
              </DropdownMenu.Content.Sub.Content>
            </DropdownMenu.Content.Sub>
            <DropdownMenu.Content.Separator />
            <DropdownMenu.Content.Item className="text-red-600">
              Delete
              <DropdownMenu.Content.Item.Shortcut>⌘⌫</DropdownMenu.Content.Item.Shortcut>
            </DropdownMenu.Content.Item>
          </DropdownMenu.Content.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
