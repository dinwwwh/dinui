import Toggle from '@dinui/react/toggle'
import { IconItalic } from '@tabler/icons-react'

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Toggle size="sm" icon aria-label="Toggle italic">
        <Toggle.Icon>
          <IconItalic />
        </Toggle.Icon>
      </Toggle>

      <Toggle size="md" icon aria-label="Toggle italic">
        <Toggle.Icon>
          <IconItalic />
        </Toggle.Icon>
      </Toggle>

      <Toggle size="lg" icon aria-label="Toggle italic">
        <Toggle.Icon>
          <IconItalic />
        </Toggle.Icon>
      </Toggle>
    </div>
  )
}
