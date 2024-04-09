import { cn } from '@dinui/react/utils'

type Props = React.ComponentPropsWithoutRef<'aside'> & {
  type?: 'note' | 'info' | 'warning' | 'danger' | 'tip' | 'success'
}

export function Callout({ type = 'note', ...props }: Props) {
  return <aside {...props} className={cn(`vocs_Callout vocs_Callout_${type}`)} />
}
