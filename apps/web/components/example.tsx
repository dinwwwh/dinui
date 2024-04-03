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

export function Example({ path }: { path: string }) {
  const fullPath = `../examples/${path}.tsx`

  return (
    <div>
      <ExamplePreview fullPath={fullPath} />
      <ExampleCode fullPath={fullPath} />
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
    // TODO
    <Suspense fallback="loading...">
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
    // TODO
    <Suspense fallback="loading...">
      <Code />
    </Suspense>
  )
}
