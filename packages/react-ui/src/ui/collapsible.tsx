'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

const Collapsible = Object.assign(CollapsiblePrimitive.Root, {
  Trigger: CollapsiblePrimitive.CollapsibleTrigger,
  Content: CollapsiblePrimitive.CollapsibleContent,
})

export default Collapsible
export { CollapsiblePrimitive }
