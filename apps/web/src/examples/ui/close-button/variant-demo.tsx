import CloseButton from '@dinui/react/close-button'
import { IconCircleX } from '@tabler/icons-react'

export default function CloseButtonVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CloseButton size="xs" />

      <CloseButton size="sm" />

      <CloseButton size="md" />

      <CloseButton size="lg" />

      <CloseButton>
        <IconCircleX />
      </CloseButton>
    </div>
  )
}
