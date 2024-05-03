import Button from '@dinui/react/button'
import Input from '@dinui/react/input'

export default function InputWithButton() {
  return (
    <form className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" required />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
