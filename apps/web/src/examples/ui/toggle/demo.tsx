import Toggle from '@dinui/react/toggle'
import { IconBold } from '@tabler/icons-react'

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic" icon>
      <Toggle.Icon>
        <IconBold />
      </Toggle.Icon>
    </Toggle>
  )
}
