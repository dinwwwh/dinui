import { lazy } from 'react'

export function ComponentExample({ name }: { name: string }) {
  const Component = lazy(() => import('../examples/button'))

  return (
    <div>
      <Component />
    </div>
  )
}
