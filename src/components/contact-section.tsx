"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  EnvelopeClosedIcon, 
  MobileIcon, 
  HomeIcon, 
  ClockIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon
} from "@radix-ui/react-icons"

// Define the contact info interface
interface ContactInfo {
  type: 'phone' | 'email' | 'address' | 'social'
  value: string
  label: string
  icon: React.ReactNode
}

// Define the business hours interface
interface BusinessHours {
  days: string
  hours: string
}

// Define the props for the ContactSection component
interface ContactSectionProps {
  title?: string
  description?: string
  contactInfo?: ContactInfo[]
  businessHours?: BusinessHours[]
}

// Define the form schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection({
  title = "Get in Touch",
  description = "Have a project in mind or want to learn more about our services? Reach out to us and we'll get back to you as soon as possible.",
  contactInfo = [
    {
      type: "phone",
      value: "+1 (555) 123-4567",
      label: "Call us",
      icon: <MobileIcon className="h-5 w-5" />
    },
    {
      type: "email",
      value: "hello@wethink.com",
      label: "Email us",
      icon: <EnvelopeClosedIcon className="h-5 w-5" />
    },
    {
      type: "address",
      value: "123 Innovation Street, Tech City, TC 10001",
      label: "Visit us",
      icon: <HomeIcon className="h-5 w-5" />
    }
  ],
  businessHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { days: "Sunday", hours: "Closed" }
  ]
}: ContactSectionProps) {
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  })

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form and show success message
      reset()
      setSubmitSuccess(true)
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full min-h-screen bg-background flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </Typography>
            <Typography variant="lead" className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </Typography>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information Column */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-bold">
                Contact Information
              </Typography>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <Typography variant="small" className="font-medium">
                        {info.label}
                      </Typography>
                      {info.type === "phone" ? (
                        <a 
                          href={`tel:${info.value}`} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : info.type === "email" ? (
                        <a 
                          href={`mailto:${info.value}`} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <Typography variant="small" className="text-muted-foreground">
                          {info.value}
                        </Typography>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-primary" />
                <Typography variant="h3" className="text-2xl font-bold">
                  Business Hours
                </Typography>
              </div>
              <div className="space-y-2">
                {businessHours.map((hours, index) => (
                  <div key={index} className="flex justify-between">
                    <Typography variant="small" className="font-medium">
                      {hours.days}
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground">
                      {hours.hours}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-bold">
                Follow Us
              </Typography>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="Twitter">
                    <TwitterLogoIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="GitHub">
                    <GitHubLogoIcon className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Typography variant="h3" className="text-2xl font-bold">
                Send us a Message
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <Typography variant="small" className="text-destructive">
                    {errors.name.message}
                  </Typography>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <Typography variant="small" className="text-destructive">
                    {errors.email.message}
                  </Typography>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or ask us a question..."
                  className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                  {...register("message")}
                />
                {errors.message && (
                  <Typography variant="small" className="text-destructive">
                    {errors.message.message}
                  </Typography>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {/* Success Message */}
              {submitSuccess && (
                <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                  <Typography variant="small" className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </Typography>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="rounded-md bg-destructive/10 p-4">
                  <Typography variant="small" className="text-destructive">
                    {submitError}
                  </Typography>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}