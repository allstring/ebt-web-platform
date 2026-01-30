import { useState, useEffect, useMemo } from "react"
import Menu from "lucide-react/dist/esm/icons/menu"
import Sun from "lucide-react/dist/esm/icons/sun"
import Moon from "lucide-react/dist/esm/icons/moon"
import X from "lucide-react/dist/esm/icons/x"
import Globe from "lucide-react/dist/esm/icons/globe"
import { Link, useLocation } from "react-router-dom"

import { cn, scrollToTop } from "@/lib/utils"
import { useLocale, type Locale } from "@/lib/i18n"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTheme } from "@/hooks/use-theme"

import LogoLight from "@/assets/images/navigation/EBT-logo.svg?react"
import LogoDark from "@/assets/images/navigation/EBT-logo--dark.svg?react"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { solutionCategories, localeLabels, localeNames } from "./types"

/* ==========================================================================
   Navigation Component
   ========================================================================== */

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname
  const isMobile = useIsMobile()
  const { isLight, toggleTheme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false)
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false)
  const [focusedDropdownIndex, setFocusedDropdownIndex] = useState(-1)

  const { locale: currentLocale, setLocale, t } = useLocale()

  // Build flat list of dropdown links for keyboard navigation (memoized)
  const dropdownLinks = useMemo(
    () => [
      { href: "/solution", label: t.nav.solutionDropdown.viewAll },
      ...solutionCategories.flatMap((category) => [
        { href: category.href, label: t.nav.solutionDropdown[category.key].title },
        ...category.items.map((item) => ({
          href: item.href,
          label: (
            t.nav.solutionDropdown[category.key as "ew" | "nc" | "cuas"]
              .items as Record<string, string>
          )[item.key],
        })),
      ]),
    ],
    [t]
  )

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

  // Reset focus index when dropdown closes
  useEffect(() => {
    if (!solutionDropdownOpen) {
      setFocusedDropdownIndex(-1)
    }
  }, [solutionDropdownOpen])

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
        "fixed top-0 left-0 right-0 z-[10000] border-b border-border transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/20"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 mx-0"
          >
            {isLight ? (
              <LogoDark className="h-6 w-auto object-contain" />
            ) : (
              <LogoLight className="h-6 w-auto object-contain" />
            )}
            <span className="sr-only">EBTech</span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav
            pathname={pathname}
            t={t}
            solutionDropdownOpen={solutionDropdownOpen}
            setSolutionDropdownOpen={setSolutionDropdownOpen}
            focusedDropdownIndex={focusedDropdownIndex}
            setFocusedDropdownIndex={setFocusedDropdownIndex}
            dropdownLinks={dropdownLinks}
            handleNavClick={handleNavClick}
          />

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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-accent/30 overflow-hidden"
              aria-label={isLight ? t.nav.switchToDark : t.nav.switchToLight}
            >
              {isLight ? (
                <Moon className="h-4 w-4 theme-toggle-icon theme-toggle-icon-enter" key="moon" />
              ) : (
                <Sun className="h-4 w-4 theme-toggle-icon theme-toggle-icon-enter" key="sun" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={t.nav.openMenu}
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

        {/* Mobile Navigation */}
        <MobileNav
          pathname={pathname}
          t={t}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          handleNavClick={handleNavClick}
        />
      </nav>
    </header>
  )
}
