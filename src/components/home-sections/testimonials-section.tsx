'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/carousel'
import { Card, CardContent } from '@/ui/card'
import Image from 'next/image'

const testimonialsData = [
  '/testimonials/1-hydro.jpg',
  '/testimonials/2-bloomberg.jpg',
  '/testimonials/3-bank-of-england.jpg',
  '/testimonials/4-national-geographic.jpg',
  '/testimonials/5-terra-magna.jpg',
  '/testimonials/6-agro-cumaru.jpg',
  '/testimonials/7-abinbev.jpg',
  '/testimonials/8-google.jpg',
]

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            TRANSFORMAÇÕES REAIS
          </h2>
          <p className="text-lg text-gray-600">
            Profissionais que elevaram sua comunicação e impacto
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="p-0">
                  <Card className="overflow-hidden">
                    <CardContent className="relative aspect-3/4 p-0">
                      <Image
                        src={testimonial}
                        alt={`Testimonial ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
