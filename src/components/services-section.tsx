'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { useFadeIn } from "@/hooks/use-animation"

const services = [
  {
    value: "web-dev",
    title: "Web Development",
    project: "Red Cross",
    description: "We built a full-featured online store with a custom CMS, secure payment gateway, and a design optimized for conversion. The platform now handles thousands of daily transactions.",
    image: "/project-1.jpg",
    stats: "470,000+ Downloads"
  },
  {
    value: "software-dev",
    title: "Software Development",
    project: "Custom CRM System",
    description: "An enterprise-level CRM solution for a major financial services firm. The system includes advanced reporting, workflow automation, and third-party integrations.",
    image: "/project-2.jpg",
    stats: "40% Increase in Productivity"
  },
  {
    value: "mobile-dev",
    title: "Mobile App Development",
    project: "Healthcare Portal",
    description: "A HIPAA-compliant telemedicine app connecting patients with doctors. Features include video consultations, appointment scheduling, and secure messaging.",
    image: "/project-3.jpg",
    stats: "50k+ Active Users"
  },
  {
    value: "ui-ux-design",
    title: "UI/UX Design",
    project: "SaaS Analytics Dashboard",
    description: "A complete redesign of a SaaS analytics platform. We created a modern, intuitive interface with a focus on data visualization and user experience.",
    image: "/project-4.jpg",
    stats: "70% User Engagement Increase"
  },
]

export function ServicesSection() {
  const fadeIn = useFadeIn()

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            We're experts in various fields
          </Typography>
          <Typography variant="lead" className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            From web and mobile development to UI/UX design, we have the skills to bring your vision to life.
          </Typography>
        </div>

        <Tabs defaultValue="web-dev" className="w-full">
          {/* Main content area with image background and overlaid card */}
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden mb-16 service-background-container">
            {services.map((service) => (
              <TabsContent key={`${service.value}-image`} value={service.value} className="m-0 absolute inset-0">
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.project}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </TabsContent>
            ))}
            
            {/* Content card overlayed on top of the image */}
            {services.map((service) => (
              <TabsContent key={`${service.value}-content`} value={service.value} style={fadeIn.style} className="m-0 absolute inset-0 flex items-center">
                <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl service-card p-10 ml-8 md:ml-16 border border-gray-100 shadow-xl">
                  <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                    CASE STUDY
                  </div>
                  <Typography variant="h3" className="text-2xl font-bold text-gray-900 mb-4">
                    {service.project}
                  </Typography>
                  <Typography className="text-gray-600 mb-8 text-lg">
                    {service.description}
                  </Typography>
                  <Button variant="default" className="mb-8 bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full">
                    Read case
                  </Button>
                  <div className="pt-6 border-t border-gray-100">
                    <Typography className="text-lg font-semibold text-gray-900">
                      {service.stats}
                    </Typography>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>

          {/* Tabs positioned below the main content area */}
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-gray-100 rounded-full p-1 max-w-4xl mx-auto">
            {services.map((service) => (
              <TabsTrigger key={service.value} value={service.value} className="py-4 text-sm md:text-base rounded-full text-gray-700 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md hover:text-gray-900 transition-all duration-200">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}