import Button from '@dinui/react/button'

const variants = ['filled', 'outline', 'ghost'] as const
const colors = ['default', 'brand', 'danger'] as const

export default function ButtonColors() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      {variants.map((v) => (
        <div key={v} className="flex items-center gap-6 justify-center">
          {colors.map((c) => (
            <Button key={v + c} variant={v} color={c}>
              Button
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}
