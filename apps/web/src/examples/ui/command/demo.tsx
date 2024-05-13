import Command from '@dinui/react/command'
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons'

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md bg-bg--contrast">
      <Command.Input placeholder="Type a command or search..." />

      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Suggestions">
          <Command.Item>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </Command.Item>

          <Command.Item>
            <FaceIcon className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </Command.Item>

          <Command.Item>
            <RocketIcon className="mr-2 h-4 w-4" />
            <span>Launch</span>
          </Command.Item>
        </Command.Group>

        <Command.Separator />

        <Command.Group heading="Settings">
          <Command.Item>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <Command.Item.Shortcut>⌘P</Command.Item.Shortcut>
          </Command.Item>

          <Command.Item>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <Command.Item.Shortcut>⌘B</Command.Item.Shortcut>
          </Command.Item>

          <Command.Item>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <Command.Item.Shortcut>⌘S</Command.Item.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  )
}
