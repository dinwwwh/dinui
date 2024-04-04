import { Tabs, TabsContent, TabsList, TabsTrigger } from '@dinui/react/tabs'
import { cn } from '@dinui/react/utils'
import { IconLoader2 } from '@tabler/icons-react'
import { Suspense, lazy } from 'react'
import { codeToHtml } from 'shiki'
import githubDarkDimmed from 'shiki/themes/github-dark-dimmed.mjs'

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
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b border-gray-200 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-gray-700 shadow-none transition-none data-[state=active]:border-b-gray-500 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-gray-700 shadow-none transition-none data-[state=active]:border-b-gray-500 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-center p-5 md:p-12 min-h-[350px]">
            <ExamplePreview fullPath={fullPath} />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <ExampleCode fullPath={fullPath} />
        </TabsContent>
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
        <div className="flex items-center text-sm text-gray-700 justify-center">
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

  const Code = lazy(async () => {
    const code = await loadCode()
    const html = await codeToHtml(code, {
      lang: 'tsx',
      theme: 'github-light',
      themes: {
        light: 'github-light',
        dark: githubDarkDimmed,
        // dim: 'github-dimmed',
      },
      transformers: [
        {
          pre: (el) => {
            el.properties.class += ' vocs_Pre'
            return el
          },
          code: (el) => {
            el.properties.class += ' vocs_Code'
            return el
          },
          span: (el) => {
            el.properties.class += ' vocs_Span'
            return el
          },
        },
      ],
    })
    return {
      default: () => {
        return (
          <div className="vocs_CodeBlock">
            <div className="vocs_Pre_wrapper" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      },
    }
  })

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-5 md:p-12 min-h-[350px] border border-gray-200 rounded-md">
          <div className="flex items-center text-sm text-gray-700 justify-center">
            <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </div>
        </div>
      }
    >
      <Code />
    </Suspense>
  )
}
