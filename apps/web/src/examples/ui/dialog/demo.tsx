import Button from '@dinui/react/button'
import Dialog from '@dinui/react/dialog'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'

export default function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:w-[32rem]">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>

        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>

        <Dialog.Actions>
          <Dialog.Close asChild>
            <Button type="submit">Save changes</Button>
          </Dialog.Close>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog>
  )
}
