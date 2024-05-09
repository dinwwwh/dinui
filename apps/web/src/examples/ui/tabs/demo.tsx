import Button from '@dinui/react/button'
import Card from '@dinui/react/card'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'
import Tabs from '@dinui/react/tabs'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.List.Trigger value="account">Account</Tabs.List.Trigger>
        <Tabs.List.Trigger value="password">Password</Tabs.List.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <Card>
          <Card.Title>Account</Card.Title>
          <Card.Description>
            Make changes to your account here. Click save when you're done.
          </Card.Description>

          <div className="mt-6 space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>

          <Card.Actions>
            <Button>Save changes</Button>
          </Card.Actions>
        </Card>
      </Tabs.Content>

      <Tabs.Content value="password">
        <Card>
          <Card.Title>Password</Card.Title>
          <Card.Description>
            Change your password here. After saving, you'll be logged out.
          </Card.Description>

          <div className="mt-6 space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>

          <Card.Actions>
            <Button>Save password</Button>
          </Card.Actions>
        </Card>
      </Tabs.Content>
    </Tabs>
  )
}
