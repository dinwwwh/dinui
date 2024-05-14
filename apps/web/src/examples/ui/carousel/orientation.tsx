import Card from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'

export default function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <Carousel.Content className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="flex items-center justify-center p-6">
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
