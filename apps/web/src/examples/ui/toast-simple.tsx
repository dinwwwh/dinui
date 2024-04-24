'use client'

import Button from '@dinui/react/button'
import { useToast } from '@dinui/react/use-toast'

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: 'Your message has been sent.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
