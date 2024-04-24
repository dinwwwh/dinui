import Button from '@dinui/react/button'

export default function ButtonDisabledDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Button disabled variant="brand-filled">
        Button
      </Button>

      <Button disabled variant="danger-filled">
        Button
      </Button>

      <Button disabled variant="outline">
        Button
      </Button>

      <Button disabled variant="danger-outline">
        Button
      </Button>
    </div>
  )
}
