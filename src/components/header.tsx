'use client'

import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navigationItems = [
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            WeThink
          </span>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink 
                  href={item.href} 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground/80 hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-full text-base font-medium hover:bg-accent/50"
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button 
          className="rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          variant="default"
        >
          Get Started
        </Button>
      </div>
    </header>
  )
}