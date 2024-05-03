import Resizable from '@dinui/react/resizable'

export default function ResizableDemo() {
  return (
    <Resizable direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
      <Resizable.Panel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </Resizable.Panel>

      <Resizable.Handle withIndicator />

      <Resizable.Panel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </Resizable.Panel>
    </Resizable>
  )
}
