import AlertDialog from '@dinui/react/alert-dialog'
import Button from '@dinui/react/button'
import { IconSignRight } from '@tabler/icons-react'

export default function AlertDialogVariantDemo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Content.Title>Are you absolutely sure?</AlertDialog.Content.Title>

        <AlertDialog.Content.Description>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialog.Content.Description>

        <AlertDialog.Content.Actions>
          <AlertDialog.Content.Cancel>Cancel</AlertDialog.Content.Cancel>

          <AlertDialog.Content.Action>
            Continue
            <AlertDialog.Content.Action.RightIcon>
              <IconSignRight />
            </AlertDialog.Content.Action.RightIcon>
          </AlertDialog.Content.Action>
        </AlertDialog.Content.Actions>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
