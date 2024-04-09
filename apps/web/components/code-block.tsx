import { Button } from '@dinui/react/button'
import { IconCheck, IconCopy, IconLoader2 } from '@tabler/icons-react'
import { useClipboard } from 'foxact/use-clipboard'
import { Suspense, lazy } from 'react'

export function CodeBlock({ code }: { code: string | (() => Promise<string>) }) {
  const Code = lazy(async () => {
    const [{ codeToHtml }, githubDarkDimmed] = await Promise.all([
      import('shiki'),
      import('shiki/themes/github-dark-dimmed.mjs'),
    ])

    const codeString = typeof code === 'string' ? code : await code()
    const html = await codeToHtml(codeString, {
      lang: 'tsx',
      theme: 'github-light',
      themes: {
        light: 'github-light',
        dark: githubDarkDimmed as unknown as undefined,
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
          line: (el) => {
            el.properties.class += ' min-h-[25.5px]'
            return el
          },
        },
      ],
    })

    return {
      default: () => {
        const { copy, copied } = useClipboard()

        return (
          <div className="vocs_CodeBlock relative">
            <div className="vocs_Pre_wrapper" dangerouslySetInnerHTML={{ __html: html }} />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-6 absolute top-3 right-3 text-gray-700"
              onClick={() => copy(codeString)}
            >
              {copied ? <IconCheck className="size-3.5" /> : <IconCopy className="size-3.5" />}
            </Button>
          </div>
        )
      },
    }
  })

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-5 md:p-12 min-h-[350px] border border-gray-200 dark:border-gray-800 rounded-md">
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 justify-center">
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
