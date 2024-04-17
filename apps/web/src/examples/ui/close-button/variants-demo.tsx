import CloseButton from '@dinui/react/close-button'
import { IconCircleX } from '@tabler/icons-react'

export default function CloseButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CloseButton wsize="xs" />

      <CloseButton wsize="sm" />

      <CloseButton wsize="md" />

      <CloseButton wsize="lg" />

      <CloseButton>
        <IconCircleX />
      </CloseButton>
    </div>
  )
}
