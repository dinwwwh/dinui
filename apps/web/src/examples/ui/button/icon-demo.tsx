import Button from '@dinui/react/button'
import { Icon12Hours, IconLoader } from '@tabler/icons-react'

export default function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Button size="sm" icon>
        <Button.Icon />
      </Button>

      <Button size="md" icon>
        <Button.Icon className="animate-spin">
          <IconLoader />
        </Button.Icon>
      </Button>

      <Button size="lg" icon>
        <Button.Icon>
          <Icon12Hours />
        </Button.Icon>
      </Button>
    </div>
  )
}
