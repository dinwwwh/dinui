'use client'

import Button from '@dinui/react/button'
import Collapsible from '@dinui/react/collapsible'
import { IconSelector } from '@tabler/icons-react'
import * as React from 'react'

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-96 space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <Collapsible.Trigger asChild>
          <Button variant="ghost" size="sm" icon>
            <Button.Icon>
              <IconSelector />
            </Button.Icon>
            <span className="sr-only">Toggle</span>
          </Button>
        </Collapsible.Trigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div>

      <Collapsible.Content className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @stitches/react
        </div>
      </Collapsible.Content>
    </Collapsible>
  )
}
