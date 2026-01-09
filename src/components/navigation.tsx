"use client"

import { useState, useEffect } from "react"
import { Menu, Sun, Moon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solution", href: "/solution" },
  { name: "R&D with Technology", href: "/rnd" },
  // { name: "News & Media", href: "/news" },
  { name: "Contact & Career", href: "/contact" },
]

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 현재 html의 .light 클래스 상태를 읽어서 버튼 UI와 동기화
  useEffect(() => {
    if (typeof document === "undefined") return
    setIsLight(document.documentElement.classList.contains("light"))
  }, [])

  const toggleTheme = () => {
    if (typeof document === "undefined") return

    const html = document.documentElement
    const nextIsLight = !html.classList.contains("light")

    if (nextIsLight) {
      html.classList.add("light")
      window.localStorage.setItem("theme", "light")
    } else {
      html.classList.remove("light")
      window.localStorage.setItem("theme", "dark")
    }

    setIsLight(nextIsLight)
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/20"
    )}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/EBT_logo.svg" alt="EBTech" className="h-6 w-auto object-contain" />
            <span className="sr-only">EBTech</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex lg:gap-x-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-foreground",
                  pathname === item.href ? "text-foreground" : "text-foreground/70",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30"
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-foreground py-2",
                    pathname === item.href ? "text-foreground" : "text-foreground/70",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
