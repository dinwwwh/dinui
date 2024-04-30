import Toggle from '@dinui/react/toggle'
import { IconUnderline } from '@tabler/icons-react'

export default function ToggleDisabledDemo() {
  return (
    <Toggle aria-label="Toggle italic" icon disabled>
      <Toggle.Icon>
        <IconUnderline />
      </Toggle.Icon>
    </Toggle>
  )
}
