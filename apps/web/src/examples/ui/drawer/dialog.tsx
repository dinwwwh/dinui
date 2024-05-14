import Button from '@dinui/react/button'
import Dialog from '@dinui/react/dialog'
import Drawer from '@dinui/react/drawer'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'
import { cn } from '@dinui/react/utils'
import { useMediaQuery } from '@web/hooks/use-media-query'
import * as React from 'react'

export default function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <ProfileForm />
        </Dialog.Content>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Title>Edit profile</Drawer.Title>
        <Drawer.Description>
          Make changes to your profile here. Click save when you're done.
        </Drawer.Description>
        <ProfileForm />
        <Drawer.Actions className="pt-2">
          <Drawer.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Drawer.Close>
        </Drawer.Actions>
      </Drawer.Content>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="dinwwwh@gmail.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@dinwwwh" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
