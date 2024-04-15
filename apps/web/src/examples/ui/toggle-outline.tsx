import { Toggle } from '@dinui/react/toggle'
import { FontItalicIcon } from '@radix-ui/react-icons'

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  )
}
