'use client'

import Button from '@dinui/react/button'
import DropdownMenu, { type DropdownMenuPrimitive } from '@dinui/react/dropdown-menu'
import * as React from 'react'

type Checked = DropdownMenuPrimitive.DropdownMenuCheckboxItemProps['checked']

export default function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Content.Label>Appearance</DropdownMenu.Content.Label>
        <DropdownMenu.Content.Separator />
        <DropdownMenu.Content.CheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenu.Content.CheckboxItem>
        <DropdownMenu.Content.CheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenu.Content.CheckboxItem>
        <DropdownMenu.Content.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenu.Content.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
