import * as React from 'react'

type ButtonProps = React.ComponentPropsWithRef<'button'>

export function Button(props: ButtonProps) {
  return <button {...props} />
}
