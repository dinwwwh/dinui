'use client'

import Button from '@dinui/react/button'
import DropdownMenu from '@dinui/react/dropdown-menu'
import * as React from 'react'

export default function DropdownDemo() {
  const [position, setPosition] = React.useState('bottom')

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Content.Label>Panel Position</DropdownMenu.Content.Label>

        <DropdownMenu.Content.Separator />

        <DropdownMenu.Content.Radio value={position} onValueChange={setPosition}>
          <DropdownMenu.Content.Radio.Item value="top">Top</DropdownMenu.Content.Radio.Item>
          <DropdownMenu.Content.Radio.Item value="bottom">Bottom</DropdownMenu.Content.Radio.Item>
          <DropdownMenu.Content.Radio.Item value="right">Right</DropdownMenu.Content.Radio.Item>
        </DropdownMenu.Content.Radio>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
