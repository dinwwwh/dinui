import { Button } from '@dinui/react/button'
import { toast } from '@dinui/react/sonner'

export default function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => alert('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}