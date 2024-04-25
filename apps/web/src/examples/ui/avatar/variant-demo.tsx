import Avatar from '@dinui/react/avatar'

export default function AvatarVariantDemo() {
  return (
    <Avatar>
      <Avatar.Image src="https://github.com/dinwwwh.png" alt="@dinwwwh" />
      <Avatar.Fallback>DN</Avatar.Fallback>
    </Avatar>
  )
}
