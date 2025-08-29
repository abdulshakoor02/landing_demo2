'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { useFadeIn } from "@/hooks/use-animation";

const services = [
  {
    value: "web-dev",
    title: "Web Development",
    project: "E-Commerce Platform",
    description: "We built a full-featured online store with a custom CMS, secure payment gateway, and a design optimized for conversion. The platform now handles thousands of daily transactions.",
    image: "/project-1.jpg",
    stats: [
      { value: "+200%", label: "Conversion Rate" },
      { value: "-50%", label: "Bounce Rate" },
    ]
  },
  {
    value: "software-dev",
    title: "Software Development",
    project: "Custom CRM System",
    description: "An enterprise-level CRM solution for a major financial services firm. The system includes advanced reporting, workflow automation, and third-party integrations.",
    image: "/project-2.jpg",
    stats: [
      { value: "+40%", label: "Productivity" },
      { value: "-30%", label: "Operational Costs" },
    ]
  },
  {
    value: "mobile-dev",
    title: "Mobile App Development",
    project: "Healthcare Portal",
    description: "A HIPAA-compliant telemedicine app connecting patients with doctors. Features include video consultations, appointment scheduling, and secure messaging.",
    image: "/project-3.jpg",
    stats: [
      { value: "50k+", label: "Active Users" },
      { value: "4.8/5", label: "App Store Rating" },
    ]
  },
  {
    value: "ui-ux-design",
    title: "UI/UX Design",
    project: "SaaS Analytics Dashboard",
    description: "A complete redesign of a SaaS analytics platform. We created a modern, intuitive interface with a focus on data visualization and user experience.",
    image: "/project-4.jpg",
    stats: [
      { value: "+70%", label: "User Engagement" },
      { value: "-60%", label: "User Errors" },
    ]
  },
]

export function ServicesSection() {
  const fadeIn = useFadeIn()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            We're experts in various fields
          </Typography>
          <Typography variant="lead" className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From web and mobile development to UI/UX design, we have the skills to bring your vision to life.
          </Typography>
        </div>

        <Tabs defaultValue="web-dev" className="w-full">
          {services.map((service) => (
            <TabsContent key={service.value} value={service.value} style={fadeIn.style}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="p-8 bg-gray-800 rounded-2xl shadow-inner">
                  <Typography variant="small" className="font-semibold text-gray-400">
                    Case Study
                  </Typography>
                  <Typography variant="h3" className="text-3xl font-bold mt-2 text-white">
                    {service.project}
                  </Typography>
                  <Typography className="mt-4 text-gray-300 text-lg">
                    {service.description}
                  </Typography>
                  <div className="mt-8 flex space-x-8">
                    {service.stats.map((stat) => (
                      <div key={stat.label}>
                        <Typography variant="h2" className="text-4xl font-bold text-white">{stat.value}</Typography>
                        <Typography className="text-gray-400">{stat.label}</Typography>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[50vh] relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    alt={service.project}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    layout="fill"
                    src={service.image}
                  />
                </div>
              </div>
            </TabsContent>
          ))}

          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 mt-12 bg-gray-800 rounded-full p-2">
            {services.map((service) => (
              <TabsTrigger key={service.value} value={service.value} className="py-3 text-lg">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}