import Button from '@dinui/react/button'

export default function ButtonDisabledDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Button disabled variant="filled">
        Button
      </Button>

      <Button disabled variant="outline">
        Button
      </Button>

      <Button disabled variant="ghost">
        Button
      </Button>
    </div>
  )
}
