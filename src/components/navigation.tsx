"use client"

import { useState, useEffect } from "react"
import { Menu, Sun, Moon, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, useLocation } from 'react-router-dom'
import { getLocale, setLocale, t, type Locale } from "@/lib/i18n"

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
  // ja: "JA",
  // fr: "FR",
}

const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  // ja: "日本語",
  // fr: "Français",
}

const navItems = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "solution" as const, href: "/solution" },
  { key: "rnd" as const, href: "/rnd" },
  { key: "contact" as const, href: "/contact" },
]

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>(getLocale())
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false)

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

  const handleNavClick = (href: string) => {
    if (typeof window === "undefined") return

    // 같은 페이지로 이동할 때는 맨 위로 스크롤만
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleLocaleChange = (locale: Locale) => {
    setLocale(locale)
    setCurrentLocale(locale)
    setLocaleMenuOpen(false)
    window.location.reload()
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/20"
    )}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2"
          >
            {/* Dark theme logo - hidden in light mode */}
            <img
              src="/EBT_logo.svg"
              alt="EBTech"
              className="h-6 w-auto object-contain block light:hidden"
            />
            {/* Light theme logo - only shown in light mode */}
            <img
              src="/EBT_logo_white.svg"
              alt="EBTech"
              className="h-6 w-auto object-contain hidden light:block"
            />
            <span className="sr-only">EBTech</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex lg:gap-x-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-foreground",
                  pathname === item.href ? "text-foreground" : "text-foreground/70",
                )}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
                className="inline-flex h-9 items-center gap-1.5 px-2.5 rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30"
                aria-label={t.nav.selectLanguage}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{localeLabels[currentLocale]}</span>
              </button>
              {localeMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-background shadow-lg">
                  {(Object.keys(localeLabels) as Locale[]).map((locale) => (
                    <button
                      key={locale}
                      type="button"
                      onClick={() => handleLocaleChange(locale)}
                      className={cn(
                        "w-full px-4 py-2 text-left text-sm transition-colors hover:bg-accent/30",
                        currentLocale === locale ? "text-foreground font-medium" : "text-muted-foreground"
                      )}
                    >
                      {localeNames[locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30"
              aria-label={isLight ? t.nav.switchToDark : t.nav.switchToLight}
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{t.nav.openMenu}</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => {
                    handleNavClick(item.href)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-foreground py-2",
                    pathname === item.href ? "text-foreground" : "text-foreground/70",
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
