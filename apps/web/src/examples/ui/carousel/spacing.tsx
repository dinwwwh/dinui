import Card from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'

export default function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <Carousel.Content className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="flex items-center justify-center aspect-square">
                <span className="text-2xl font-semibold">{index + 1}</span>
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
