import { Typography } from "@/components/ui/typography"

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Typography variant="h4" className="font-bold mb-4">WeThink</Typography>
            <Typography variant="p" className="text-muted-foreground">
              Transforming ideas into digital reality with innovative software solutions.
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="font-bold mb-4">Services</Typography>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Custom Software</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Website Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">CRM Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Consulting</a></li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" className="font-bold mb-4">Company</Typography>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <Typography variant="h4" className="font-bold mb-4">Connect</Typography>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <Typography variant="p" className="text-muted-foreground">
            © {new Date().getFullYear()} WeThink. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}