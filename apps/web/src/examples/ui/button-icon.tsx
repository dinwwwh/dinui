import { Button } from '@dinui/react/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  )
}
