'use client'

import { Typography } from "@/components/ui/typography"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/hero-background.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <Typography variant="h1" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Innovate, Create, Elevate
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-[700px] text-gray-200 md:text-xl mt-4">
          We craft bespoke digital experiences that drive growth and inspire audiences.
        </Typography>
      </div>
    </section>
  )
}
