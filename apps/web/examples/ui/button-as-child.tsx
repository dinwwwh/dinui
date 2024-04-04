import { Button } from '@dinui/react/button'

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <a href="#">Login</a>
    </Button>
  )
}
