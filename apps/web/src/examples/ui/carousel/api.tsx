import Card from '@dinui/react/card'
import Carousel, { type CarouselApi } from '@dinui/react/carousel'
import * as React from 'react'

export default function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Content.Item key={index}>
              <Card className="flex items-center justify-center aspect-square">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </Card>
            </Carousel.Content.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
      <div className="py-2 text-center text-sm text-wgray-500">
        Slide {current} of {count}
      </div>
    </div>
  )
}
