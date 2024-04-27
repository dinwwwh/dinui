'use client'

import Command from '@dinui/react/command'
import { Dialog } from '@dinui/react/dialog'
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import * as React from 'react'

export default function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p className="text-sm text-fg-weaker">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border/50 px-1.5 font-mono text-[0.625rem] font-medium">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <Command>
          <Command.Input placeholder="Type a command or search..." />

          <Command.List>
            <Command.List.Empty>No results found.</Command.List.Empty>
            <Command.List.Group heading="Suggestions">
              <Command.List.Item>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </Command.List.Item>
              <Command.List.Item>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </Command.List.Item>
              <Command.List.Item>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </Command.List.Item>
            </Command.List.Group>
            <Command.List.Separator />
            <Command.List.Group heading="Settings">
              <Command.List.Item>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <Command.List.Item.Shortcut>⌘P</Command.List.Item.Shortcut>
              </Command.List.Item>
              <Command.List.Item>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <Command.List.Item.Shortcut>⌘B</Command.List.Item.Shortcut>
              </Command.List.Item>
              <Command.List.Item>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <Command.List.Item.Shortcut>⌘S</Command.List.Item.Shortcut>
              </Command.List.Item>
            </Command.List.Group>
          </Command.List>
        </Command>
      </Dialog>
    </>
  )
}
