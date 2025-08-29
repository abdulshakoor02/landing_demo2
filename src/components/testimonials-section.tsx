'use client'

import { Typography } from "@/components/ui/typography"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { QuoteIcon } from "@radix-ui/react-icons"
import { useFadeIn } from "@/hooks/use-animation"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechInnovate",
    content: "The team delivered beyond our expectations. Our new CRM system has transformed how we manage customer relationships.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartUpX",
    content: "Their expertise in custom software development helped us scale our platform to handle 10x the traffic.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GlobalBrand",
    content: "The website they built for us has increased our conversion rate by 40%. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Product Manager, InnovateCo",
    content: "Working with this team was a game-changer for our product launch. Their attention to detail and technical expertise is unmatched.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Jennifer Lee",
    role: "CEO, GrowthHackers",
    content: "The mobile app they developed for us has received thousands of downloads and excellent reviews. Couldn't be happier with the result.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const fadeIn = useFadeIn()
  
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container px-4 md:px-6">
        <div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          style={fadeIn.style}
        >
          <div className="space-y-2">
            <Typography 
              variant="h2" 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900"
            >
              What Our Clients Say
            </Typography>
            <Typography 
              variant="lead" 
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Typography>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2"
                >
                  <div className="p-1">
                    <Card className="transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden">
                      <CardContent className="p-8">
                        <QuoteIcon className="h-8 w-8 text-blue-500 mb-6" />
                        <Typography 
                          variant="p" 
                          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
                        >
                          "{testimonial.content}"
                        </Typography>
                        <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <Typography 
                              variant="p" 
                              className="font-bold text-gray-900 text-lg"
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography 
                              variant="small" 
                              className="text-muted-foreground"
                            >
                              {testimonial.role}
                            </Typography>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none rounded-full w-12 h-12" />
              <CarouselNext className="static transform-none rounded-full w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}