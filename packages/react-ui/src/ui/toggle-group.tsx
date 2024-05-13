'use client'

import Toggle, { toggle } from './toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { createContext, forwardRef, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import type { Merge } from 'type-fest'

const toggleGroup = tv({
  slots: {
    group: 'flex items-center justify-center gap-1',
  },
})

type ToggleVariantProps = VariantProps<typeof toggle>

const ToggleGroupContext = createContext<ToggleVariantProps>(toggle.defaultVariants)

const ToggleGroupRoot = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  Merge<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, ToggleVariantProps>
>(({ variant, icon, size, ...props }, ref) => {
  const variantProps = { variant, icon, size }
  const { group } = toggleGroup()

  return (
    <ToggleGroupContext.Provider value={variantProps}>
      <ToggleGroupPrimitive.Root
        {...props}
        ref={ref}
        className={group({ className: props.className })}
      />
    </ToggleGroupContext.Provider>
  )
})
ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  Merge<
    React.ComponentPropsWithoutRef<typeof Toggle>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
  >
>(({ children, asChild, ...props }, ref) => {
  const variantProps = useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item {...variantProps} {...props} ref={ref} asChild>
      <Toggle asChild={asChild}>{children}</Toggle>
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: Object.assign({ ...Toggle }, ToggleGroupItem),
})

export default ToggleGroup
export { toggleGroup, toggle, ToggleGroupPrimitive }
