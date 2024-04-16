import { Button } from '@dinui/react/button'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'

export default function ButtonWithIcon() {
  return (
    <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}
