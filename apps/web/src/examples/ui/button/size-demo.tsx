import Button from '@dinui/react/button'
import { IconUserCircle } from '@tabler/icons-react'

export default function ButtonSizeDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Button size="sm">
        <Button.LeftIcon>
          <IconUserCircle />
        </Button.LeftIcon>
        Button
        <Button.RightIcon>
          <IconUserCircle />
        </Button.RightIcon>
      </Button>

      <Button size="md">
        <Button.LeftIcon />
        Button
      </Button>

      <Button size="lg">
        Button
        <Button.RightIcon />
      </Button>
    </div>
  )
}
