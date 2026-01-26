import { useEffect } from "react"

import "@/styles/global.css"
import { BackToTopButton } from "@/components/back-to-top-button"
import { AccessGate } from "@/components/access-gate"
import { getLocale } from "@/lib/i18n"

// Preload critical images
const PRELOAD_IMAGES = ["/EBT_logo.svg", "/EBT_logo_white.svg"]

function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = getLocale()
    document.body.classList.add("font-sans", "antialiased")

    // Preload images on mount
    preloadImages(PRELOAD_IMAGES)

    // Theme: localStorage > system preference > dark (default)
    try {
      const storedTheme = window.localStorage.getItem("theme")
      const systemPrefersLight = window.matchMedia?.(
        "(prefers-color-scheme: light)"
      ).matches
      const isLight =
        storedTheme === "light" || (!storedTheme && systemPrefersLight)

      if (isLight) {
        document.documentElement.classList.add("light")
      } else {
        document.documentElement.classList.remove("light")
      }
    } catch {
      // Ignore - doesn't affect rendering
    }
  }, [])

  return (
    <AccessGate>
      <main>{children}</main>
      <BackToTopButton />
    </AccessGate>
  )
}
