import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const textarea = tv({
  slots: {
    root: [
      'flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2',
      'text-sm shadow-sm placeholder:text-fg-weaker',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  },
})

const Textarea = forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<'textarea'>>(
  (props, ref) => {
    const { root } = textarea()

    return <textarea {...props} ref={ref} className={root({ className: props.className })} />
  },
)
Textarea.displayName = 'Textarea'

export default Textarea
export { textarea }
