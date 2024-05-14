import { IconLoader2 } from '@tabler/icons-react'
import { Suspense, lazy } from 'react'

const globExampleComponentImports = import.meta.glob<{
  default: React.ComponentType
}>('./**/*.tsx')

const globExampleCodeImports = import.meta.glob<string>('./**/*.tsx', {
  query: '?raw',
  import: 'default',
})

export async function loadExampleComponent(opts: { path: string }) {
  const loadFn = globExampleComponentImports[resolveGlobPath(opts.path)]
  if (!loadFn) throw new Error(`Example does not exists on "${opts.path}" path`)

  return await loadFn()
}

export async function loadExampleCode(opts: { path: string }) {
  const loadFn = globExampleCodeImports[resolveGlobPath(opts.path)]
  if (!loadFn) throw new Error(`Example does not exists on "${opts.path}" path`)

  return await loadFn()
}

export function ExampleComponent(opts: { path: string }) {
  const Component = lazy(() => loadExampleComponent({ path: opts.path }))

  return (
    <Suspense
      fallback={
        <div className="flex items-center text-sm text-fg-weak justify-center">
          <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}

function resolveGlobPath(path: string) {
  return `./${path}.tsx`
}
