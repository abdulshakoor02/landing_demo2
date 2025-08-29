import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { QuoteIcon } from "@radix-ui/react-icons"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechInnovate",
    content: "The team delivered beyond our expectations. Our new CRM system has transformed how we manage customer relationships.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartUpX",
    content: "Their expertise in custom software development helped us scale our platform to handle 10x the traffic.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GlobalBrand",
    content: "The website they built for us has increased our conversion rate by 40%. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </Typography>
            <Typography variant="lead" className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Typography>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <QuoteIcon className="h-6 w-6 text-muted-foreground" />
                <CardTitle className="sr-only">{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="p" className="text-muted-foreground">
                  "{testimonial.content}"
                </Typography>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="ml-4">
                    <Typography variant="p" className="font-semibold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground">
                      {testimonial.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}