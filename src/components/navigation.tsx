import { useState, useEffect } from "react"
import { Menu, Sun, Moon, X, Globe } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { cn, scrollToTop } from "@/lib/utils"
import { useLocale, type Locale } from "@/lib/i18n"
import { useIsMobile } from "@/hooks/use-mobile"


import LogoLight from "@/assets/images/navigation/EBT-logo.svg?react"
import LogoDark from "@/assets/images/navigation/EBT-logo--dark.svg?react"
/* ==========================================================================
   Constants
   ========================================================================== */

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
}

const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
}

const navItems = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "solution" as const, href: "/solution" },
  { key: "rnd" as const, href: "/rnd" },
  { key: "contact" as const, href: "/contact" },
]

/* ==========================================================================
   Navigation Component
   ========================================================================== */

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname
  const isMobile = useIsMobile()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLight, setIsLight] = useState(
    () => document.documentElement.classList.contains("light")
  )
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false)

  const { locale: currentLocale, setLocale, t } = useLocale()

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const nextIsLight = !html.classList.contains("light")

    // 테마 전환 전 transition 클래스 추가
    html.classList.add("theme-transition")

    if (nextIsLight) {
      html.classList.add("light")
      window.localStorage.setItem("theme", "light")
    } else {
      html.classList.remove("light")
      window.localStorage.setItem("theme", "dark")
    }

    setIsLight(nextIsLight)

    // transition 완료 후 클래스 제거 (global.css의 duration과 동일하게)
    setTimeout(() => {
      html.classList.remove("theme-transition")
    }, 1500)
  }

  const handleNavClick = (href: string) => {
    if (pathname === href) {
      scrollToTop()
    }
  }

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setLocaleMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/20"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 mx-6"
          >
            {isLight ? (
              <LogoDark className="h-6 w-auto object-contain" />
            ) : (
              <LogoLight className="h-6 w-auto object-contain" />
            )}
            <span className="sr-only">EBTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex lg:gap-x-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-foreground",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/70"
                )}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
                className="inline-flex h-9 items-center gap-1.5 px-2.5 rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30"
                aria-label={t.nav.selectLanguage}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {localeLabels[currentLocale]}
                </span>
              </button>

              {localeMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLocaleMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-background shadow-lg z-50">
                    {(Object.keys(localeLabels) as Locale[]).map((locale) => (
                      <button
                        key={locale}
                        type="button"
                        onClick={() => handleLocaleChange(locale)}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm transition-colors hover:bg-accent/30",
                          currentLocale === locale
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        )}
                      >
                        {localeNames[locale]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30"
              aria-label={isLight ? t.nav.switchToDark : t.nav.switchToLight}
            >
              {isLight ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{t.nav.openMenu}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out relative z-50",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 mt-2 rounded-xl bg-background/95 backdrop-blur-lg border border-border shadow-lg">
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => {
                    handleNavClick(item.href)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "text-base font-semibold transition-all duration-200 py-3 px-4 rounded-lg",
                    "hover:bg-accent/50 hover:translate-x-1",
                    pathname === item.href
                      ? "text-foreground bg-accent/30"
                      : "text-foreground/70"
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
