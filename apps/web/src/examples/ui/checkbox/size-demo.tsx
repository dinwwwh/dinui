'use client'

import Checkbox from '@dinui/react/checkbox'

export default function CheckboxSizeDemo() {
  return (
    <div className="flex items-center gap-6">
      <Checkbox size="sm" />
      <Checkbox size="md" />
      <Checkbox size="lg" />
    </div>
  )
}
