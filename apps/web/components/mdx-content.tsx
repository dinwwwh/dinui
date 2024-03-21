import { ComponentExample } from './component-example'
import '@web/styles/mdx.css'
import * as runtime from 'react/jsx-runtime'

const mdxComponents = {
  ComponentExample,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MdxProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...mdxComponents, ...components }} />
}
