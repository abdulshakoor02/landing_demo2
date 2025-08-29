'use client'

import { useState, useEffect, useMemo } from 'react'
import { Typography } from "@/components/ui/typography"
import { StarRating } from "@/components/ui/star-rating"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel"
import { QuoteIcon } from "@radix-ui/react-icons"
import { useFadeIn } from "@/hooks/use-animation"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
  metrics?: {
    value: string
    label: string
    icon: string
  }[]
  industry: string
  companySize: string
  tags: string[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechInnovate",
    content: "The team delivered beyond our expectations. Our new CRM system has transformed how we manage customer relationships.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    metrics: [
      { value: "40%", label: "Increase in efficiency", icon: "📈" },
      { value: "60%", label: "Reduction in response time", icon: "⚡" }
    ],
    industry: "Technology",
    companySize: "500-1000 employees",
    tags: ["CRM", "Enterprise"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "StartUpX",
    content: "Their expertise in custom software development helped us scale our platform to handle 10x the traffic.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.5,
    metrics: [
      { value: "10x", label: "Traffic scalability", icon: "🚀" },
      { value: "50%", label: "Cost reduction", icon: "💰" }
    ],
    industry: "SaaS",
    companySize: "50-100 employees",
    tags: ["Scalability", "Performance"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GlobalBrand",
    content: "The website they built for us has increased our conversion rate by 40%. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    metrics: [
      { value: "40%", label: "Higher conversion rate", icon: "🎯" },
      { value: "2x", label: "Lead generation", icon: "👥" }
    ],
    industry: "E-commerce",
    companySize: "1000+ employees",
    tags: ["Web Design", "Marketing"]
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Product Manager",
    company: "InnovateCo",
    content: "Working with this team was a game-changer for our product launch. Their attention to detail and technical expertise is unmatched.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    metrics: [
      { value: "3x", label: "Faster delivery", icon: "⏱️" },
      { value: "95%", label: "User satisfaction", icon: "😊" }
    ],
    industry: "Fintech",
    companySize: "200-500 employees",
    tags: ["Product Development", "Innovation"]
  },
  {
    id: 5,
    name: "Jennifer Lee",
    role: "CEO",
    company: "GrowthHackers",
    content: "The mobile app they developed for us has received thousands of downloads and excellent reviews. Couldn't be happier with the result.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    metrics: [
      { value: "10K+", label: "Downloads", icon: "📱" },
      { value: "4.8", label: "App Store rating", icon: "⭐" }
    ],
    industry: "Mobile Apps",
    companySize: "10-50 employees",
    tags: ["Mobile Development", "UI/UX"]
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-1">
      <div className="glass-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <QuoteIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
            <div className="ml-2">
              <StarRating rating={testimonial.rating} size="sm" />
            </div>
          </div>
          
          <Typography 
            variant="p" 
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
          >
            "{testimonial.content}"
          </Typography>
          
          {testimonial.metrics && testimonial.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {testimonial.metrics.map((metric, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{metric.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{metric.value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex items-center mt-auto">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {testimonial.name.charAt(0)}
            </div>
            <div className="ml-4 overflow-hidden">
              <Typography 
                variant="p" 
                className="font-bold text-gray-900 dark:text-white text-lg truncate"
              >
                {testimonial.name}
              </Typography>
              <Typography 
                variant="small" 
                className="text-muted-foreground dark:text-gray-400 truncate"
              >
                {testimonial.role}, {testimonial.company}
              </Typography>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {testimonial.industry}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {testimonial.companySize}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {testimonial.tags && testimonial.tags.length > 0 && (
          <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-1">
              {testimonial.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ProgressIndicators({ 
  totalSlides, 
  currentSlide,
  onSlideChange
}: { 
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
}) {
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              index === currentSlide
                ? "bg-blue-500 w-6"
                : "bg-gray-300 dark:bg-gray-600"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
        {currentSlide + 1}/{totalSlides}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const fadeIn = useFadeIn()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  
  // Auto-rotation functionality
  useEffect(() => {
    if (!api || !isAutoPlaying || isHovered) return
    
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [api, isAutoPlaying, isHovered])
  
  // Carousel event handlers
  useEffect(() => {
    if (!api) return
    
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  
  const handleAutoPlayToggle = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }
  
  const handleSlideChange = (index: number) => {
    api?.scrollTo(index)
  }
  
  // Calculate average rating
  const averageRating = useMemo(() => {
    const total = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
    return (total / testimonials.length).toFixed(1)
  }, [])
  
  return (
    <section
      className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full px-4 md:px-6">
        <div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          style={fadeIn.style}
        >
          <div className="space-y-2">
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 dark:text-white"
              id="testimonials-heading"
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="lead"
              className="max-w-[900px] text-muted-foreground dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center"
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Typography>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center">
                <StarRating rating={parseFloat(averageRating)} size="sm" />
                <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  {averageRating} out of 5 stars
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials.length} reviews
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="w-full mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault()
              api?.scrollPrev()
            } else if (e.key === "ArrowRight") {
              e.preventDefault()
              api?.scrollNext()
            }
          }}
          tabIndex={0}
          role="region"
          aria-label="Testimonials carousel"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            aria-roledescription="carousel"
          >
            <CarouselContent
              className="-ml-2 md:-ml-4"
              role="group"
              aria-roledescription="slide"
            >
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2 xl:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none rounded-full w-10 h-10 border-gray-300 dark:border-gray-600" />
              <CarouselNext className="static transform-none rounded-full w-10 h-10 border-gray-300 dark:border-gray-600" />
            </div>
          </Carousel>
          
          <ProgressIndicators 
            totalSlides={count} 
            currentSlide={current}
            onSlideChange={handleSlideChange}
          />
          
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleAutoPlayToggle}
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label={isAutoPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  Auto-rotating ({isHovered ? "paused" : "active"})
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Auto-rotation paused
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}