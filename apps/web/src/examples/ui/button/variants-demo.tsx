import Button from '@dinui/react/button'

export default function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <Button variant="brand-filled">Button</Button>

      <Button variant="danger-filled">Button</Button>

      <Button variant="outline">Button</Button>

      <Button variant="danger-outline">Button</Button>

      <div className="flex flex-wrap items-center justify-between">
        <Button variant="ghost">Button</Button>

        <Button variant="brand-ghost">Button</Button>

        <Button variant="danger-ghost">Button</Button>
      </div>
    </div>
  )
}
