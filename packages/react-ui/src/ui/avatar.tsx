'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { createContext, forwardRef, useContext } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Merge } from 'type-fest'

const avatar = tv({
  slots: {
    root: 'relative flex shrink-0 overflow-hidden rounded-full',
    image: 'object-cover object-center h-full w-full',
    fallback:
      'flex h-full w-full items-center justify-center rounded-full bg-wgray-100 dark:bg-wgray-800',
  },
  variants: {
    size: {
      sm: {
        root: 'size-8',
      },
      md: {
        root: 'size-9',
      },
      lg: {
        root: 'size-10',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type AvatarVariantProps = VariantProps<typeof avatar>

const AvatarContext = createContext<AvatarVariantProps>(avatar.defaultVariants)

const AvatarRoot = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  Merge<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, AvatarVariantProps>
>(({ size, ...props }, ref) => {
  const variantProps = { size }
  const { root } = avatar(variantProps)

  return (
    <AvatarContext.Provider value={variantProps}>
      <AvatarPrimitive.Root {...props} ref={ref} className={root({ className: props.className })} />
    </AvatarContext.Provider>
  )
})
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const variantProps = useContext(AvatarContext)
  const { image } = avatar(variantProps)

  return (
    <AvatarPrimitive.Image {...props} ref={ref} className={image({ className: props.className })} />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const variantProps = useContext(AvatarContext)
  const { fallback } = avatar(variantProps)

  return (
    <AvatarPrimitive.Fallback
      {...props}
      ref={ref}
      className={fallback({ className: props.className })}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
})

export default Avatar
export { avatar, AvatarPrimitive }
