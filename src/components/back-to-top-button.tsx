import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn, scrollToTop } from "@/lib/utils"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setVisible(y > 320)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => scrollToTop()}
      aria-label="Back to top"
      className={cn(
        "fixed right-4 bottom-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur-md transition-all duration-300",
        "hover:bg-accent/30 hover:text-foreground",
        "sm:right-6 sm:bottom-6 sm:h-11 sm:w-11",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}

