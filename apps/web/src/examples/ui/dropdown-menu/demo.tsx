import Button from '@dinui/react/button'
import DropdownMenu from '@dinui/react/dropdown-menu'

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Content.Label>My Account</DropdownMenu.Content.Label>
        <DropdownMenu.Content.Separator />

        <DropdownMenu.Content.Group>
          <DropdownMenu.Content.Item>
            Profile
            <DropdownMenu.Content.Item.Shortcut>⇧⌘P</DropdownMenu.Content.Item.Shortcut>
          </DropdownMenu.Content.Item>

          <DropdownMenu.Content.Item>
            Billing
            <DropdownMenu.Content.Item.Shortcut>⌘B</DropdownMenu.Content.Item.Shortcut>
          </DropdownMenu.Content.Item>

          <DropdownMenu.Content.Item>
            Settings
            <DropdownMenu.Content.Item.Shortcut>⌘S</DropdownMenu.Content.Item.Shortcut>
          </DropdownMenu.Content.Item>

          <DropdownMenu.Content.Item>
            Keyboard shortcuts
            <DropdownMenu.Content.Item.Shortcut>⌘K</DropdownMenu.Content.Item.Shortcut>
          </DropdownMenu.Content.Item>
        </DropdownMenu.Content.Group>

        <DropdownMenu.Content.Separator />

        <DropdownMenu.Content.Group>
          <DropdownMenu.Content.Item>Team</DropdownMenu.Content.Item>

          <DropdownMenu.Content.Sub>
            <DropdownMenu.Content.Sub.Trigger>Invite users</DropdownMenu.Content.Sub.Trigger>
            <DropdownMenu.Content.Sub.Content>
              <DropdownMenu.Content.Item>Email</DropdownMenu.Content.Item>
              <DropdownMenu.Content.Item>Message</DropdownMenu.Content.Item>
              <DropdownMenu.Content.Separator />
              <DropdownMenu.Content.Item>More...</DropdownMenu.Content.Item>
            </DropdownMenu.Content.Sub.Content>
          </DropdownMenu.Content.Sub>

          <DropdownMenu.Content.Item>
            New Team
            <DropdownMenu.Content.Item.Shortcut>⌘+T</DropdownMenu.Content.Item.Shortcut>
          </DropdownMenu.Content.Item>
        </DropdownMenu.Content.Group>

        <DropdownMenu.Content.Separator />

        <DropdownMenu.Content.Item>GitHub</DropdownMenu.Content.Item>
        <DropdownMenu.Content.Item>Support</DropdownMenu.Content.Item>
        <DropdownMenu.Content.Item disabled>API</DropdownMenu.Content.Item>

        <DropdownMenu.Content.Separator />

        <DropdownMenu.Content.Item>
          Log out
          <DropdownMenu.Content.Item.Shortcut>⇧⌘Q</DropdownMenu.Content.Item.Shortcut>
        </DropdownMenu.Content.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
