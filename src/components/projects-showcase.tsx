'use client'

import { useState, useEffect, useRef } from 'react'
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import { cn } from '@/lib/utils'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing and inventory management, designed to provide a seamless shopping experience.",
    category: "Web Development",
    image: "/project-1.jpg",
  },
  {
    title: "Custom CRM System",
    description: "Enterprise-level customer relationship management solution for a financial services company, built for scale and security.",
    category: "Software Development",
    image: "/project-2.jpg",
  },
  {
    title: "Healthcare Portal",
    description: "A HIPAA-compliant patient management and telemedicine platform for modern healthcare providers.",
    category: "Mobile App Development",
    image: "/project-3.jpg",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics and reporting platform for SaaS businesses to track metrics and make data-driven decisions.",
    category: "UI/UX Design",
    image: "/project-4.jpg",
  },
]

export function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: "-200px 0px -200px 0px" }
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setActiveProject(index)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) projectObserver.observe(ref)
    })

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }
      projectRefs.current.forEach((ref) => {
        if (ref) projectObserver.unobserve(ref)
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "w-full transition-colors duration-500 ease-in-out",
        isIntersecting ? "bg-gray-900 text-white" : "bg-white text-black"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:sticky top-24 h-screen">
            <div className="flex flex-col space-y-8 pt-16">
                <Typography variant="h2" className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Our Projects
                </Typography>
                {projects.map((project, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => projectRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }>
                        <Typography variant="h3" className={cn("text-3xl font-bold transition-all duration-300", activeProject === index ? "opacity-100 text-4xl" : "opacity-50")}>
                        {project.title}
                        </Typography>
                        <div className={cn("w-full h-1.5 mt-2 transition-all duration-300", activeProject === index ? (isIntersecting ? "bg-white w-full" : "bg-black w-full") : "bg-gray-600 w-1/2")} />
                    </div>
                ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="grid gap-8">
                {projects.map((project, index) => (
                  index % 2 === 0 && (
                    <div 
                      key={index} 
                      ref={el => projectRefs.current[index] = el}
                      className="grid grid-cols-1 gap-8 items-center"
                    >
                      <div className="w-full h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl group">
                          <Image
                            alt={project.title}
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            layout="fill"
                            src={project.image}
                          />
                      </div>
                      <div className={cn("p-8 rounded-2xl transition-all duration-300 flex flex-col justify-center shadow-lg", isIntersecting ? "bg-gray-800/50 backdrop-blur-sm" : "bg-gray-100/50 backdrop-blur-sm")}>
                          <Typography variant="small" className={cn("font-semibold text-lg", isIntersecting ? "text-gray-300" : "text-gray-600")}>
                              {project.category}
                          </Typography>
                          <Typography variant="h4" className="text-3xl font-bold mt-2">
                              {project.title}
                          </Typography>
                          <Typography className={cn("mt-4 text-lg", isIntersecting ? "text-gray-400" : "text-gray-700")}>
                              {project.description}
                          </Typography>
                      </div>
                    </div>
                  )
                ))}
              </div>
              <div className="grid gap-8 mt-16">
                {projects.map((project, index) => (
                  index % 2 !== 0 && (
                    <div 
                      key={index} 
                      ref={el => projectRefs.current[index] = el}
                      className="grid grid-cols-1 gap-8 items-center"
                    >
                      <div className="w-full h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl group">
                          <Image
                            alt={project.title}
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            layout="fill"
                            src={project.image}
                          />
                      </div>
                      <div className={cn("p-8 rounded-2xl transition-all duration-300 flex flex-col justify-center shadow-lg", isIntersecting ? "bg-gray-800/50 backdrop-blur-sm" : "bg-gray-100/50 backdrop-blur-sm")}>
                          <Typography variant="small" className={cn("font-semibold text-lg", isIntersecting ? "text-gray-300" : "text-gray-600")}>
                              {project.category}
                          </Typography>
                          <Typography variant="h4" className="text-3xl font-bold mt-2">
                              {project.title}
                          </Typography>
                          <Typography className={cn("mt-4 text-lg", isIntersecting ? "text-gray-400" : "text-gray-700")}>
                              {project.description}
                          </Typography>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}