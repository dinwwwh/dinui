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
        <DropdownMenu.Label>Panel Position</DropdownMenu.Label>

        <DropdownMenu.Separator />

        <DropdownMenu.Radio value={position} onValueChange={setPosition}>
          <DropdownMenu.Radio.Item value="top">Top</DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="bottom">Bottom</DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="right">Right</DropdownMenu.Radio.Item>
        </DropdownMenu.Radio>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
