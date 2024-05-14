import ContextMenu from '@dinui/react/context-menu'

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Item inset>
          Back
          <ContextMenu.Item.Shortcut>⌘[</ContextMenu.Item.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset disabled>
          Forward
          <ContextMenu.Item.Shortcut>⌘]</ContextMenu.Item.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset>
          Reload
          <ContextMenu.Item.Shortcut>⌘R</ContextMenu.Item.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.Sub.Trigger inset>More Tools</ContextMenu.Sub.Trigger>
          <ContextMenu.Sub.Content className="w-48">
            <ContextMenu.Item>
              Save Page As...
              <ContextMenu.Item.Shortcut>⇧⌘S</ContextMenu.Item.Shortcut>
            </ContextMenu.Item>
            <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
            <ContextMenu.Item>Name Window...</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Developer Tools</ContextMenu.Item>
          </ContextMenu.Sub.Content>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenu.Item.Shortcut>⌘⇧B</ContextMenu.Item.Shortcut>
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
        <ContextMenu.Separator />
        <ContextMenu.Radio value="pedro">
          <ContextMenu.Label inset>People</ContextMenu.Label>
          <ContextMenu.Separator />
          <ContextMenu.Radio.Item value="pedro">Pedro Duarte</ContextMenu.Radio.Item>
          <ContextMenu.Radio.Item value="colm">Colm Tuite</ContextMenu.Radio.Item>
        </ContextMenu.Radio>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
