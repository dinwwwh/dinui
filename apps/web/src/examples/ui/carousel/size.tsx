import Card from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm"
    >
      <Carousel.Content>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="flex items-center justify-center aspect-square">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  )
}
