'use client'

import Command from '@dinui/react/command'
import Dialog from '@dinui/react/dialog'
import {
  IconCalendarMonth,
  IconFaceId,
  IconMail,
  IconRocket,
  IconSettings,
  IconUser,
} from '@tabler/icons-react'
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
        <Dialog.Content className="p-0" closeButtonProps={{ className: 'top-1 right-1' }}>
          <Command>
            <Command.Input placeholder="Type a command or search..." />

            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Suggestions">
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconCalendarMonth />
                  </Command.Item.LeftIcon>
                  <span>Calendar</span>
                </Command.Item>
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconFaceId />
                  </Command.Item.LeftIcon>
                  <span>Search Emoji</span>
                </Command.Item>
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconRocket />
                  </Command.Item.LeftIcon>
                  <span>Launch</span>
                </Command.Item>
              </Command.Group>
              <Command.Separator />
              <Command.Group heading="Settings">
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconUser />
                  </Command.Item.LeftIcon>
                  <span>Profile</span>
                  <Command.Item.Shortcut>⌘P</Command.Item.Shortcut>
                </Command.Item>
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconMail />
                  </Command.Item.LeftIcon>
                  <span>Mail</span>
                  <Command.Item.Shortcut>⌘B</Command.Item.Shortcut>
                </Command.Item>
                <Command.Item>
                  <Command.Item.LeftIcon>
                    <IconSettings />
                  </Command.Item.LeftIcon>
                  <span>Settings</span>
                  <Command.Item.Shortcut>⌘S</Command.Item.Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog>
    </>
  )
}
