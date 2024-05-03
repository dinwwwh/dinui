import { ScrollArea } from '@dinui/react/scroll-area'
import Separator from '@dinui/react/separator'
import { Fragment } from 'react/jsx-runtime'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border-wgray-200 dark:border-wgray-800 border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
