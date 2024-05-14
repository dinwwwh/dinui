import Button from '@dinui/react/button'

export default function ButtonVariantDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <Button variant="filled">Button</Button>

      <Button variant="outline">Button</Button>

      <Button variant="ghost">Button</Button>
    </div>
  )
}
