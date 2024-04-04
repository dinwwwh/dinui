'use client'

import { Button } from '@dinui/react/button'
import { ToastAction } from '@dinui/react/toast'
import { useToast } from '@dinui/react/use-toast'

export default function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
