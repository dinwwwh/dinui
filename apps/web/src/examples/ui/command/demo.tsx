import Command from '@dinui/react/command'
import {
  IconCalendarMonth,
  IconFaceId,
  IconMail,
  IconRocket,
  IconSettings,
  IconUser,
} from '@tabler/icons-react'

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md bg-bg--contrast">
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
  )
}
