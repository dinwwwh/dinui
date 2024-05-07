'use client'

import Button from '@dinui/react/button'
import DropdownMenu from '@dinui/react/dropdown-menu'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" icon>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Content.Item onClick={() => setTheme('light')}>
          Light
        </DropdownMenu.Content.Item>
        <DropdownMenu.Content.Item onClick={() => setTheme('dark')}>Dark</DropdownMenu.Content.Item>
        <DropdownMenu.Content.Item onClick={() => setTheme('system')}>
          System
        </DropdownMenu.Content.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
