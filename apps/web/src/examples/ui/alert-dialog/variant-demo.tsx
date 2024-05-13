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
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>

        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialog.Description>

        <AlertDialog.Actions>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>

          <AlertDialog.Action variant="danger-filled">
            Continue
            <AlertDialog.Action.RightIcon>
              <IconSignRight />
            </AlertDialog.Action.RightIcon>
          </AlertDialog.Action>
        </AlertDialog.Actions>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
