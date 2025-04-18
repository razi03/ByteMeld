"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  company: string
  image: string
  text: string
  verifyUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "ByteMeld transformed our digital presence with their innovative solutions. Their team&apos;s expertise and dedication to quality are unmatched.",
    verifyUrl: "#",
  },
  {
    id: "2",
    name: "James Wilson",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    text: "Working with ByteMeld was a game-changer for our business. They delivered a cutting-edge solution that exceeded our expectations.",
    verifyUrl: "#",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "FutureScale",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "The team at ByteMeld brought our vision to life with their technical expertise and creative approach. Highly recommended!",
    verifyUrl: "#",
  },
]

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  React.useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Card className="h-full p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.name}
                        </p>
                      </div>
                      <a
                        href={testimonial.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Verify
                        <ExternalLink className="ml-1 inline-block h-3 w-3" />
                      </a>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}