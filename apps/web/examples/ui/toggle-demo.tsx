import { Toggle } from '@dinui/react/toggle'
import { FontBoldIcon } from '@radix-ui/react-icons'

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  )
}
