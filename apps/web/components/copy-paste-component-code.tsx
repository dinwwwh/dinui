import { CodeBlock } from './code-block'
import { UnifiedPackageManager } from './unified-package-manager'
import { IconLoader2 } from '@tabler/icons-react'
import { Suspense, lazy } from 'react'

const componentCodeFetchFns = import.meta.glob('../../../packages/react-ui/**/*.tsx', {
  query: '?raw',
  import: 'default',
}) as {
  [key: string]: () => Promise<string>
}

export function CopyPasteComponentCode({ path }: { path: string }) {
  const fullPath = `../../../packages/react-ui/${path}.tsx`

  return <ComponentCode fullPath={fullPath} />
}

function ComponentCode(props: { fullPath: string }) {
  const fetchCode = componentCodeFetchFns[props.fullPath]

  if (!fetchCode) {
    throw new Error(`Component does not exists on [${props.fullPath}]`)
  }

  return <CodeBlock code={fetchCode} />
}

export function ComponentDependenciesInstallation({ path }: { path: string }) {
  const fullPath = `../../../packages/react-ui/${path}.tsx`

  const fetchCode = componentCodeFetchFns[fullPath]

  if (!fetchCode) {
    throw new Error(`Component does not exists on [${fullPath}]`)
  }

  const Cli = lazy(async () => {
    const codeString = await fetchCode()

    const dependencies = [
      ...codeString.matchAll(/from '((@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*))/g),
    ]
      .map((m) => m[1] as string)
      .filter((d) => !['react'].includes(d))

    return {
      default: () => {
        return (
          <UnifiedPackageManager action="add" name={dependencies.join(' ') || '@dinui/react'} />
        )
      },
    }
  })

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-5 md:p-12 h-[103.98px] border border-gray-200 dark:border-gray-800 rounded-md">
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 justify-center">
            <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </div>
        </div>
      }
    >
      <Cli />
    </Suspense>
  )
}
