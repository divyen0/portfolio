import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#6495ED]" />
            <a href="mailto:divyyen@gmail.com" className="hover:text-[#6495ED] transition-colors">
              divyyen@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#6495ED]" />
            <span>Conway, SC</span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Divyen Patel. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
