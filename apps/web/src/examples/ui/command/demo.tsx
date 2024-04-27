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
  )
}
