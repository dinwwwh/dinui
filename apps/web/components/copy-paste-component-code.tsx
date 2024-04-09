import { CodeBlock } from './code-block'

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
