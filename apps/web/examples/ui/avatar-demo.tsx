import { Avatar, AvatarFallback, AvatarImage } from '@dinui/react/avatar'

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/dinsterizer.png" alt="@dinsterizer" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
