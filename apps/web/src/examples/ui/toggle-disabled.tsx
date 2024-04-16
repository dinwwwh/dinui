import { Toggle } from '@dinui/react/toggle'
import { UnderlineIcon } from '@radix-ui/react-icons'

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <UnderlineIcon className="h-4 w-4" />
    </Toggle>
  )
}
