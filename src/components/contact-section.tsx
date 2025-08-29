import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Start Your Project?
            </Typography>
            <Typography variant="lead" className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how we can help transform your ideas into reality.
            </Typography>
          </div>
          <div className="w-full max-w-sm space-y-2 pt-8">
            <form className="flex flex-col space-y-4">
              <input 
                className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                type="text"
              />
              <input 
                className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                type="email"
              />
              <textarea 
                className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="Tell us about your project"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}