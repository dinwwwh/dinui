import { AspectRatio } from '@dinui/react/aspect-ratio'

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
      />
    </AspectRatio>
  )
}
