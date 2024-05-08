import Menubar from '@dinui/react/menubar'

export default function MenubarDemo() {
  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New Tab <Menubar.Item.Shortcut>⌘T</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            New Window <Menubar.Item.Shortcut>⌘N</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Item disabled>New Incognito Window</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.Sub.Trigger>Share</Menubar.Sub.Trigger>
            <Menubar.Sub.Content>
              <Menubar.Item>Email link</Menubar.Item>
              <Menubar.Item>Messages</Menubar.Item>
              <Menubar.Item>Notes</Menubar.Item>
            </Menubar.Sub.Content>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>
            Print... <Menubar.Item.Shortcut>⌘P</Menubar.Item.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Undo <Menubar.Item.Shortcut>⌘Z</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Redo <Menubar.Item.Shortcut>⇧⌘Z</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.Sub.Trigger>Find</Menubar.Sub.Trigger>
            <Menubar.Sub.Content>
              <Menubar.Item>Search the web</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Find...</Menubar.Item>
              <Menubar.Item>Find Next</Menubar.Item>
              <Menubar.Item>Find Previous</Menubar.Item>
            </Menubar.Sub.Content>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
          <Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Item inset>
            Reload <Menubar.Item.Shortcut>⌘R</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Item disabled inset>
            Force Reload <Menubar.Item.Shortcut>⇧⌘R</Menubar.Item.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Hide Sidebar</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Radio value="benoit">
            <Menubar.Radio.Item value="andy">Andy</Menubar.Radio.Item>
            <Menubar.Radio.Item value="benoit">Benoit</Menubar.Radio.Item>
            <Menubar.Radio.Item value="Luis">Luis</Menubar.Radio.Item>
          </Menubar.Radio>
          <Menubar.Separator />
          <Menubar.Item inset>Edit...</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}
