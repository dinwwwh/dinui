'use client'

import Button from '@dinui/react/button'
import Command from '@dinui/react/command'
import Popover from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { IconCheck, IconSelector } from '@tabler/icons-react'
import * as React from 'react'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}

          <Button.RightIcon className="text-fg-weaker">
            <IconSelector />
          </Button.RightIcon>
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-[200px] p-0">
        <Command>
          <Command.Input placeholder="Search framework..." className="h-9" />
          <Command.List>
            <Command.Empty>No framework found.</Command.Empty>
            <Command.Group>
              {frameworks.map((framework) => (
                <Command.Item
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <IconCheck
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </Popover.Content>
    </Popover>
  )
}
