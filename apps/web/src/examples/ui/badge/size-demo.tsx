import Badge from '@dinui/react/badge'

const variants = ['filled'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export default function BadgeColorDemo() {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center">
      {variants.map((v) => (
        <div key={v} className="flex gap-6 flex-wrap items-center justify-center">
          {sizes.map((s) => (
            <Badge key={s} variant={v} size={s}>
              <Badge.LeftDot />
              Badge
            </Badge>
          ))}
        </div>
      ))}
    </div>
  )
}
