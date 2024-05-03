'use client'

import Button from './button'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import * as React from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const carousel = tv({
  slots: {
    root: 'relative',
    content: 'flex',
    content_wrapper: 'overflow-hidden',
    item: 'min-w-0 shrink-0 grow-0 basis-full',
    previous: 'absolute rounded-full',
    next: 'absolute rounded-full',
  },
  variants: {
    orientation: {
      horizontal: {
        content: '-ml-4',
        item: 'pl-4',
        previous: '-left-12 top-1/2 -translate-y-1/2',
        next: '-right-12 top-1/2 -translate-y-1/2',
      },
      vertical: {
        content: '-mt-4 flex-col',
        item: 'pt-4',
        previous: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        next: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const CarouselRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, ...props }, ref) => {
  const { root } = carousel({ orientation })

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        {...props}
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={root({ className: props.className })}
      />
    </CarouselContext.Provider>
  )
})
CarouselRoot.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  Merge<
    React.HTMLAttributes<HTMLDivElement>,
    {
      wrapperProps?: React.ComponentProps<'div'>
    }
  >
>(({ wrapperProps, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  const { content, content_wrapper } = carousel({ orientation })

  return (
    <div
      {...wrapperProps}
      ref={carouselRef}
      className={content_wrapper({ className: wrapperProps?.className })}
    >
      <div {...props} ref={ref} className={content({ className: props.className })} />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { orientation } = useCarousel()
    const { item } = carousel({ orientation })

    return (
      <div
        role="group"
        aria-roledescription="slide"
        {...props}
        ref={ref}
        className={item({ className: props.className })}
      />
    )
  },
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  Merge<
    React.ComponentPropsWithoutRef<typeof Button>,
    {
      iconProps?: React.ComponentProps<typeof Button.Icon>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  const { previous } = carousel({ orientation })

  return (
    <Button
      variant={'outline'}
      size={'sm'}
      icon
      {...props}
      ref={ref}
      className={previous({ className: props.className })}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
    >
      <Button.Icon {...iconProps}>
        <IconArrowLeft />
      </Button.Icon>

      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  Merge<
    React.ComponentPropsWithoutRef<typeof Button>,
    {
      iconProps?: React.ComponentProps<typeof Button.Icon>
    }
  >
>(({ iconProps, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  const { next } = carousel({ orientation })

  return (
    <Button
      variant={'outline'}
      size={'sm'}
      icon
      {...props}
      ref={ref}
      className={next({ className: props.className })}
      disabled={!canScrollNext}
      onClick={scrollNext}
    >
      <Button.Icon {...iconProps}>
        <IconArrowRight />
      </Button.Icon>

      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = 'CarouselNext'

const Carousel = Object.assign(CarouselRoot, {
  Content: Object.assign(CarouselContent, {
    Item: CarouselItem,
  }),
  Previous: CarouselPrevious,
  Next: CarouselNext,
})

export default Carousel
export { carousel, type CarouselApi }
export * as CarouselPrimitive from 'embla-carousel-react'
