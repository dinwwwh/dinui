import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const skeleton = tv({
  slots: {
    root: 'animate-pulse rounded-md bg-bg--muted',
  },
})

const Skeleton = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => {
  const { root } = skeleton()

  return <div {...props} ref={ref} className={root({ className: props.className })} />
})

export default Skeleton
