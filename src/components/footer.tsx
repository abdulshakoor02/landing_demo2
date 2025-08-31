import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Custom Software", href: "#" },
      { name: "Website Development", href: "#" },
      { name: "CRM Solutions", href: "#" },
      { name: "Consulting", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="w-full py-16 bg-gradient-to-b from-background to-background/80 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WeThink
              </span>
            </div>
            <Typography variant="p" className="text-muted-foreground mb-6 max-w-md">
              Transforming ideas into digital reality with innovative software solutions.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-full px-4 py-2 flex-1"
              />
              <Button className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
          
          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <Typography variant="h4" className="font-bold mb-6 text-lg">
                {section.title}
              </Typography>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:pl-1 flex items-center"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Divider and copyright */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="p" className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} WeThink. All rights reserved.
            </Typography>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}