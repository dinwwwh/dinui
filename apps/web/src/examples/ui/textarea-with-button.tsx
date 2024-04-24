import Button from '@dinui/react/button'
import { Textarea } from '@dinui/react/textarea'

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
