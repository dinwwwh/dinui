import Button from '@dinui/react/button'
import Dialog from '@dinui/react/dialog'
import { Input } from '@dinui/react/input'
import Label from '@dinui/react/label'
import { CopyIcon } from '@radix-ui/react-icons'

export default function DialogCloseButton() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Share</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:max-w-md">
        <Dialog.Content.Title>Share link</Dialog.Content.Title>
        <Dialog.Content.Description>
          Anyone who has this link will be able to view this.
        </Dialog.Content.Description>

        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue="https://ui.dinwwwh.com/installation" readOnly />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <Dialog.Content.Actions className="sm:justify-start">
          <Dialog.Content.Close asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </Dialog.Content.Close>
        </Dialog.Content.Actions>
      </Dialog.Content>
    </Dialog>
  )
}
