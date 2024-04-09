import { CodeBlock } from './code-block'
import { Tabs } from './tabs'
import { cn } from '@dinui/react/utils'
import { IconLoader2 } from '@tabler/icons-react'
import { Suspense, lazy } from 'react'

const exampleComponents = import.meta.glob('../examples/**/*.tsx') as {
  [key: string]: () => Promise<{
    default: React.ComponentType
  }>
}

const exampleCodes = import.meta.glob('../examples/**/*.tsx', {
  query: '?raw',
  import: 'default',
}) as {
  [key: string]: () => Promise<string>
}

interface ExampleProps extends React.ComponentPropsWithoutRef<'div'> {
  path: string
}

export function Example({ path, ...props }: ExampleProps) {
  const fullPath = `../examples/${path}.tsx`

  return (
    <div {...props} className={cn('group relative my-4 flex flex-col space-y-2', props.className)}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <Tabs.List>
          <Tabs.List.Trigger value="preview">Preview</Tabs.List.Trigger>
          <Tabs.List.Trigger value="code">Code</Tabs.List.Trigger>
        </Tabs.List>

        <Tabs.Content
          value="preview"
          className="relative rounded-md border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-center p-5 md:p-12 min-h-[350px]">
            <ExamplePreview fullPath={fullPath} />
          </div>
        </Tabs.Content>
        <Tabs.Content value="code">
          <ExampleCode fullPath={fullPath} />
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

function ExamplePreview(props: { fullPath: string }) {
  const loadComponent = exampleComponents[props.fullPath]

  if (!loadComponent) {
    throw new Error(`Component does not exists on [${props.fullPath}]`)
  }

  const Component = lazy(loadComponent)

  return (
    <Suspense
      fallback={
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 justify-center">
          <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}

function ExampleCode(props: { fullPath: string }) {
  const loadCode = exampleCodes[props.fullPath]

  if (!loadCode) {
    throw new Error(`Component does not exists on [${props.fullPath}]`)
  }

  return <CodeBlock code={loadCode} />
}
