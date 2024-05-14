import Button from '@dinui/react/button'
import DropdownMenu from '@dinui/react/dropdown-menu'

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            Profile
            <DropdownMenu.Item.Shortcut>⇧⌘P</DropdownMenu.Item.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            Billing
            <DropdownMenu.Item.Shortcut>⌘B</DropdownMenu.Item.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            Settings
            <DropdownMenu.Item.Shortcut>⌘S</DropdownMenu.Item.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            Keyboard shortcuts
            <DropdownMenu.Item.Shortcut>⌘K</DropdownMenu.Item.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>Team</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.Sub.Trigger>Invite users</DropdownMenu.Sub.Trigger>
            <DropdownMenu.Sub.Content>
              <DropdownMenu.Item>Email</DropdownMenu.Item>
              <DropdownMenu.Item>Message</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>More...</DropdownMenu.Item>
            </DropdownMenu.Sub.Content>
          </DropdownMenu.Sub>

          <DropdownMenu.Item>
            New Team
            <DropdownMenu.Item.Shortcut>⌘+T</DropdownMenu.Item.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>GitHub</DropdownMenu.Item>
        <DropdownMenu.Item>Support</DropdownMenu.Item>
        <DropdownMenu.Item disabled>API</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>
          Log out
          <DropdownMenu.Item.Shortcut>⇧⌘Q</DropdownMenu.Item.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
