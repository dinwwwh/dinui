import Resizable from '@dinui/react/resizable'

export default function ResizableDemo() {
  return (
    <Resizable
      direction="horizontal"
      className="max-w-md rounded-lg border-wgray-200 dark:border-wgray-800 border"
    >
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </Resizable.Panel>

      <Resizable.Handle />

      <Resizable.Panel defaultSize={50}>
        <Resizable direction="vertical">
          <Resizable.Panel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </Resizable.Panel>

          <Resizable.Handle />

          <Resizable.Panel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </Resizable.Panel>
        </Resizable>
      </Resizable.Panel>
    </Resizable>
  )
}
