"use client"

import React, { useState, useEffect, useMemo, memo } from "react"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  CaretUpIcon,
  CaretDownIcon,
  Link1Icon,
  MagnifyingGlassIcon
} from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface FaqItem {
  id: string
  question: string
  answer: string // HTML content
  category?: string
}

interface FaqSectionProps {
  title?: string
  description?: string
  faqs?: FaqItem[]
  enableSearch?: boolean
  enableCategoryFilter?: boolean
  enableExpandAll?: boolean
}

const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to develop a custom software solution?",
    answer: "The timeline varies depending on project complexity, but most custom software projects take 3-6 months from initial concept to deployment. We provide detailed project timelines during our initial consultation.",
    category: "Development"
  },
  {
    id: "faq-2",
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and TypeScript. For mobile applications, we work with React Native and Flutter. For databases, we use PostgreSQL, MongoDB, and MySQL.",
    category: "Technologies"
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your software continues to perform optimally. Our support includes bug fixes, updates, and feature enhancements.",
    category: "Support"
  },
  {
    id: "faq-4",
    question: "How do you ensure the security of our data and applications?",
    answer: "We follow industry best practices for security, including encryption, secure authentication, regular security audits, and compliance with data protection regulations. Security is integrated into every phase of our development process.",
    category: "Security"
  },
  {
    id: "faq-5",
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We have extensive experience integrating new solutions with existing systems, whether they're legacy systems, third-party APIs, or cloud services. We ensure seamless data flow and functionality across all platforms.",
    category: "Integration"
  },
  {
    id: "faq-6",
    question: "What is your pricing model?",
    answer: "Our pricing is transparent and tailored to each project. We offer fixed-price contracts for well-defined projects and time-and-materials pricing for more flexible engagements. Contact us for a detailed quote based on your specific requirements.",
    category: "Pricing"
  },
  {
    id: "faq-7",
    question: "Do you offer UI/UX design services?",
    answer: "Yes, our team includes experienced UI/UX designers who work closely with developers to create intuitive, user-friendly interfaces. We follow a user-centered design approach to ensure optimal user experience.",
    category: "Design"
  },
  {
    id: "faq-8",
    question: "How do we get started with a project?",
    answer: "Getting started is simple. Contact us through our website or phone, and we'll schedule a consultation to discuss your requirements. We'll then provide a project proposal with timeline and cost estimates.",
    category: "Process"
  }
]

// Memoized FAQ Item component for performance
const FaqItemComponent = memo(({ 
  faq,
  isExpanded,
  onToggle,
  feedback,
  onFeedback,
  copiedIds,
  onCopyLink,
  relatedFaqs,
  onRelatedFaqClick
}: {
  faq: FaqItem
  isExpanded: boolean
  onToggle: (id: string) => void
  feedback: Record<string, 'helpful' | 'not-helpful' | null>
  onFeedback: (id: string, isHelpful: boolean) => void
  copiedIds: Set<string>
  onCopyLink: (id: string) => void
  relatedFaqs: FaqItem[]
  onRelatedFaqClick: (id: string) => void
}) => {
  return (
    <AccordionItem 
      key={faq.id} 
      value={faq.id}
      id={faq.id}
      className="border border-input rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <AccordionTrigger 
        className="px-4 py-4 hover:no-underline"
        onClick={() => onToggle(faq.id)}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-left font-medium">{faq.question}</span>
          {faq.category && (
            <Badge variant="secondary" className="ml-2">
              {faq.category}
            </Badge>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        <div 
          className="pb-4 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
        
        {/* Feedback section */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Was this helpful?</span>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 w-8 p-0",
                  feedback[faq.id] === 'helpful' && "bg-green-100 hover:bg-green-200 text-green-700"
                )}
                onClick={() => onFeedback(faq.id, true)}
                aria-label="This was helpful"
              >
                <CaretUpIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 w-8 p-0",
                  feedback[faq.id] === 'not-helpful' && "bg-red-100 hover:bg-red-200 text-red-700"
                )}
                onClick={() => onFeedback(faq.id, false)}
                aria-label="This was not helpful"
              >
                <CaretDownIcon className="h-4 w-4" />
              </Button>
            </div>
            {feedback[faq.id] && (
              <span className="text-sm text-muted-foreground ml-2">
                Thank you for your feedback!
              </span>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            onClick={() => onCopyLink(faq.id)}
            aria-label="Copy link to this FAQ"
          >
            <Link1Icon className="h-4 w-4" />
            {copiedIds.has(faq.id) && (
              <span className="ml-2 text-xs text-green-600">Copied!</span>
            )}
          </Button>
        </div>
        
        {/* Related FAQs */}
        {isExpanded && relatedFaqs.length > 0 && (
          <div className="pt-4 mt-4 border-t border-border">
            <Typography variant="small" className="font-medium mb-2 block">
              Related questions:
            </Typography>
            <div className="flex flex-wrap gap-2">
              {relatedFaqs.map(relatedFaq => (
                <Button
                  key={relatedFaq.id}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs h-7"
                  onClick={() => onRelatedFaqClick(relatedFaq.id)}
                >
                  {relatedFaq.question}
                </Button>
              ))}
            </div>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  )
})

FaqItemComponent.displayName = 'FaqItemComponent'

export function FaqSection({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about our services and process.",
  faqs = defaultFaqs,
  enableSearch = true,
  enableCategoryFilter = true,
  enableExpandAll = true
}: FaqSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [feedback, setFeedback] = useState<Record<string, 'helpful' | 'not-helpful' | null>>({})
  const [copiedIds, setCopiedIds] = useState<Set<string>>(new Set())

  // Get unique categories
  const categories = useMemo(() => {
    const cats = faqs
      .map(faq => faq.category)
      .filter((cat): cat is string => cat !== undefined)
    return Array.from(new Set(cats))
  }, [faqs])

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === null || faq.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [faqs, searchQuery, selectedCategory])

  // Get related FAQs for a given FAQ
  const getRelatedFaqs = (currentFaq: FaqItem) => {
    if (!currentFaq.category) return []
    return faqs
      .filter(faq => faq.category === currentFaq.category && faq.id !== currentFaq.id)
      .slice(0, 3)
  }

  // Handle expand/collapse all
  const expandAll = () => {
    setExpandedItems(new Set(filteredFaqs.map(faq => faq.id)))
  }

  const collapseAll = () => {
    setExpandedItems(new Set())
  }

  // Handle individual FAQ expand/collapse
  const toggleFaq = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // Handle feedback submission
  const handleFeedback = (id: string, isHelpful: boolean) => {
    setFeedback(prev => ({
      ...prev,
      [id]: isHelpful ? 'helpful' : 'not-helpful'
    }))
  }

  // Handle copy link
  const handleCopyLink = (id: string) => {
    const url = new URL(window.location.href)
    url.hash = id
    navigator.clipboard.writeText(url.toString())
    
    setCopiedIds(prev => new Set(prev).add(id))
    setTimeout(() => {
      setCopiedIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })
    }, 2000)
  }

  // Handle related FAQ click
  const handleRelatedFaqClick = (id: string) => {
    setExpandedItems(prev => new Set(prev).add(id))
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  // Handle anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash && faqs.some(faq => faq.id === hash)) {
        setExpandedItems(prev => new Set(prev).add(hash))
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [faqs])

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6 w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {title}
            </Typography>
            <Typography variant="lead" className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </Typography>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          {/* Search and Filter Controls */}
          <div className="mb-8 space-y-4">
            {enableSearch && (
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-input bg-background focus-visible:ring-2 focus-visible:ring-ring"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                    onClick={() => setSearchQuery("")}
                  >
                    <ChevronUpIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}

            {enableCategoryFilter && categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}

            {enableExpandAll && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={expandAll}
                  className="rounded-full"
                >
                  Expand All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={collapseAll}
                  className="rounded-full"
                >
                  Collapse All
                </Button>
              </div>
            )}
          </div>

          {/* Results count */}
          {searchQuery && (
            <div className="mb-4 text-sm text-muted-foreground">
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} found
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              <Accordion
                type="multiple"
                value={Array.from(expandedItems)}
                onValueChange={(values) => setExpandedItems(new Set(values))}
                className="w-full"
              >
                {filteredFaqs.map((faq) => (
                  <FaqItemComponent
                    key={faq.id}
                    faq={faq}
                    isExpanded={expandedItems.has(faq.id)}
                    onToggle={toggleFaq}
                    feedback={feedback}
                    onFeedback={handleFeedback}
                    copiedIds={copiedIds}
                    onCopyLink={handleCopyLink}
                    relatedFaqs={getRelatedFaqs(faq)}
                    onRelatedFaqClick={handleRelatedFaqClick}
                  />
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <Typography variant="large" className="mb-2">
                  No FAQs found
                </Typography>
                <Typography variant="muted">
                  Try adjusting your search or filter criteria
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}