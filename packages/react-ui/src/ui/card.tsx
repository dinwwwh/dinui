import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const card = tv({
  slots: {
    root: 'rounded-xl border bg-surface shadow p-6',
    title: 'font-semibold leading-none tracking-tight',
    description: 'mt-1.5 text-sm text-fg-weaker',
    actions: 'mt-6 flex items-center',
  },
})

const CardRoot = forwardRef<
  HTMLDivElement,
  Merge<
    React.HTMLAttributes<HTMLDivElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const { root } = card()

  const Comp = asChild ? Slot : 'div'
  return <Comp {...props} ref={ref} className={root({ className: props.className })} />
})
CardRoot.displayName = 'Card'

const CardTitle = forwardRef<
  HTMLParagraphElement,
  Merge<
    React.HTMLAttributes<HTMLHeadElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const { title } = card()

  const Comp = asChild ? Slot : 'h3'
  return <Comp {...props} ref={ref} className={title({ className: props.className })} />
})
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  Merge<
    React.HTMLAttributes<HTMLParagraphElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const { description } = card()

  const Comp = asChild ? Slot : 'p'
  return <Comp {...props} ref={ref} className={description({ className: props.className })} />
})
CardDescription.displayName = 'CardDescription'

const CardActions = forwardRef<
  HTMLDivElement,
  Merge<
    React.HTMLAttributes<HTMLDivElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const { actions } = card()

  const Comp = asChild ? Slot : 'div'
  return <Comp {...props} ref={ref} className={actions({ className: props.className })} />
})
CardActions.displayName = 'CardActions'

const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Description: CardDescription,
  Actions: CardActions,
})

export default Card
export { card }
