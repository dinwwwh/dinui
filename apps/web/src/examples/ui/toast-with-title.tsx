'use client'

import Button from '@dinui/react/button'
import { useToast } from '@dinui/react/use-toast'

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
