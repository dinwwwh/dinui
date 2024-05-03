import Label from '@dinui/react/label'
import Textarea from '@dinui/react/textarea'

export default function TextareaWithTextDemo() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-fg-weaker">Your message will be copied to the support team.</p>
    </div>
  )
}
