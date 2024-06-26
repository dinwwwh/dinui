'use client'

import Button from '@dinui/react/button'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'
import Sheet from '@dinui/react/sheet'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

export default function SheetSideDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <Sheet.Trigger asChild>
            <Button variant="outline">{side}</Button>
          </Sheet.Trigger>
          <Sheet.Content side={side}>
            <Sheet.Title>Edit profile</Sheet.Title>

            <Sheet.Description>
              Make changes to your profile here. Click save when you're done.
            </Sheet.Description>

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

            <Sheet.Actions>
              <Sheet.Close asChild>
                <Button type="submit">Save changes</Button>
              </Sheet.Close>
            </Sheet.Actions>
          </Sheet.Content>
        </Sheet>
      ))}
    </div>
  )
}
