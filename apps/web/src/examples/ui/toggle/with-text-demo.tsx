import Toggle from '@dinui/react/toggle'
import { IconItalic } from '@tabler/icons-react'

export default function ToggleWithTextDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Toggle aria-label="Toggle italic" size="sm">
        Italic
        <Toggle.RightIcon>
          <IconItalic />
        </Toggle.RightIcon>
      </Toggle>

      <Toggle aria-label="Toggle italic">
        <Toggle.LeftIcon>
          <IconItalic />
        </Toggle.LeftIcon>
        Italic
      </Toggle>

      <Toggle aria-label="Toggle italic" size="lg">
        <Toggle.LeftIcon>
          <IconItalic />
        </Toggle.LeftIcon>
        Italic
      </Toggle>
    </div>
  )
}
