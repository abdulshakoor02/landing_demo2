import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"

const faqs = [
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "The timeline varies depending on project complexity, but most custom software projects take 3-6 months from initial concept to deployment. We provide detailed project timelines during our initial consultation."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and TypeScript. For mobile applications, we work with React Native and Flutter. For databases, we use PostgreSQL, MongoDB, and MySQL."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your software continues to perform optimally. Our support includes bug fixes, updates, and feature enhancements."
  },
  {
    question: "How do you ensure the security of our data and applications?",
    answer: "We follow industry best practices for security, including encryption, secure authentication, regular security audits, and compliance with data protection regulations. Security is integrated into every phase of our development process."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We have extensive experience integrating new solutions with existing systems, whether they're legacy systems, third-party APIs, or cloud services. We ensure seamless data flow and functionality across all platforms."
  }
]

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </Typography>
            <Typography variant="lead" className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about our services and process.
            </Typography>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}