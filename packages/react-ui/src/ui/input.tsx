import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const input = tv({
  slots: {
    root: [
      'h-9 w-full rounded-md border px-3 py-1',
      'text-sm shadow-sm transition-colors',
      'placeholder:text-fg-weaker',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'file:rounded-md file:border-border file:border file:bg-transparent file:text-sm file:font-medium',
      '[&[type=file]]:px-2 [&[type=file]]:py-[0.3125rem]',
    ],
  },
})

const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(
  (props, ref) => {
    const { root } = input()

    return (
      <input type="string" {...props} ref={ref} className={root({ className: props.className })} />
    )
  },
)
Input.displayName = 'Input'

export default Input
export { input }
