import Toggle from '@dinui/react/toggle'
import { IconItalic } from '@tabler/icons-react'

export default function ToggleOutlineDemo() {
  return (
    <Toggle variant="outline" icon aria-label="Toggle italic">
      <Toggle.Icon>
        <IconItalic />
      </Toggle.Icon>
    </Toggle>
  )
}
