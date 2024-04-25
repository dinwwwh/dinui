import Badge from '@dinui/react/badge'

const variants = ['filled', 'outline'] as const
const colors = ['brand', 'danger', 'gray', 'blue', 'pink', 'orange'] as const

export default function BadgeColorDemo() {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center">
      {variants.map((v) => (
        <div key={v} className="flex gap-6 flex-wrap items-center justify-center">
          {colors.map((c) => (
            <Badge key={c} variant={v} color={c}>
              <Badge.LeftDot />
              Badge
            </Badge>
          ))}
        </div>
      ))}
    </div>
  )
}
