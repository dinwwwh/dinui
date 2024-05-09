import Card from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

export default function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <Carousel.Content>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Content.Item key={index}>
            <div className="p-1">
              <Card className="flex items-center justify-center aspect-square">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </Card>
            </div>
          </Carousel.Content.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  )
}
