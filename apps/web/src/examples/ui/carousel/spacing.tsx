import { Card, CardContent } from '@dinui/react/card'
import Carousel from '@dinui/react/carousel'

export default function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <Carousel.Content className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Content.Item key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
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