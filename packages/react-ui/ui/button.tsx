import type React from 'react'

type ButtonProps = React.ComponentPropsWithRef<'button'>

export function Button(props: ButtonProps) {
  return <button {...props} />
}
