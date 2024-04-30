import Toggle from '@dinui/react/toggle'
import { FontItalicIcon } from '@radix-ui/react-icons'

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Toggle size="sm" icon aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      <Toggle size="md" icon aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>

      <Toggle size="lg" icon aria-label="Toggle italic">
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
