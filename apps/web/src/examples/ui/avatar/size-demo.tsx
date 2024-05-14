import Avatar from '@dinui/react/avatar'

export default function AvatarVariantDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Avatar size="sm">
        <Avatar.Image src="https://github.com/dinwwwh.png" alt="@dinwwwh" />
        <Avatar.Fallback>DN</Avatar.Fallback>
      </Avatar>

      <Avatar size="md">
        <Avatar.Image src="https://github.com/dinwwwh.png" alt="@dinwwwh" />
        <Avatar.Fallback>DN</Avatar.Fallback>
      </Avatar>

      <Avatar size="lg">
        <Avatar.Image src="https://github.com/dinwwwh.png" alt="@dinwwwh" />
        <Avatar.Fallback>DN</Avatar.Fallback>
      </Avatar>
    </div>
  )
}
