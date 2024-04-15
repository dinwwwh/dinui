import { Avatar, AvatarFallback, AvatarImage } from '@dinui/react/avatar'

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/dinwwwh.png" alt="@dinwwwh" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
