import { useState, useEffect, useRef, useCallback, type KeyboardEvent } from "react"
import Menu from "lucide-react/dist/esm/icons/menu";
import Sun from "lucide-react/dist/esm/icons/sun";
import Moon from "lucide-react/dist/esm/icons/moon";
import X from "lucide-react/dist/esm/icons/x";
import Globe from "lucide-react/dist/esm/icons/globe";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import { Link, useLocation, useNavigate } from "react-router-dom"

import { cn, scrollToTop } from "@/lib/utils"
import { useLocale, type Locale } from "@/lib/i18n"
import { useIsMobile } from "@/hooks/use-mobile"


import LogoLight from "@/assets/images/navigation/EBT-logo.svg?react"
import LogoDark from "@/assets/images/navigation/EBT-logo--dark.svg?react"

/* ==========================================================================
   Solution Dropdown Data
   ========================================================================== */

const solutionCategories = [
  {
    key: "ew" as const,
    href: "/solution/ew",
    items: [
      { key: "goldenBatEws" as const, href: "/solution/ew/GoldenBat-EWS" },
      { key: "perceive" as const, href: "/solution/ew/PERCEIVE" },
      { key: "resolve" as const, href: "/solution/ew/RESOLVE" },
      { key: "microEsm" as const, href: "/solution/ew/MicroESM" },
      { key: "phobosM4" as const, href: "/solution/ew/PHOBOS-M4" },
      { key: "deceive" as const, href: "/solution/ew/DECEIVE" },
      { key: "mapview" as const, href: "/solution/ew/MAPVIEW" },
    ],
  },

  {
    key: "cuas" as const,
    href: "/solution/c-uas",
    items: [
      { key: "ebtPes" as const, href: "/solution/c-uas/eBT-PES" },
      { key: "spectraC2" as const, href: "/solution/c-uas/Spectra-C2" },
    ],
  },
  {
    key: "nc" as const,
    href: "/solution/nc",
    items: [
      { key: "chemproX" as const, href: "/solution/nc/CHEMPRO-X" },
      { key: "ncMonitoring" as const, href: "/solution/nc/NC-MONITORING-SYSTEM" },
      { key: "ranidX" as const, href: "/solution/nc/RanidX" },
    ],
  },
]
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
  const navigate = useNavigate()
  const pathname = location.pathname
  const isMobile = useIsMobile()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLight, setIsLight] = useState(
    () => document.documentElement.classList.contains("light")
  )
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false)
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false)
  const [mobileSolutionExpanded, setMobileSolutionExpanded] = useState(false)
  const [focusedDropdownIndex, setFocusedDropdownIndex] = useState(-1)
  const solutionDropdownRef = useRef<HTMLDivElement>(null)
  const dropdownItemsRef = useRef<(HTMLAnchorElement | null)[]>([])

  const { locale: currentLocale, setLocale, t } = useLocale()

  // Build flat list of dropdown links for keyboard navigation
  const dropdownLinks = [
    { href: "/solution", label: t.nav.solutionDropdown.viewAll },
    ...solutionCategories.flatMap((category) => [
      { href: category.href, label: t.nav.solutionDropdown[category.key].title },
      ...category.items.map((item) => ({
        href: item.href,
        label: (t.nav.solutionDropdown[category.key as "ew" | "nc" | "cuas"].items as Record<string, string>)[item.key],
      })),
    ]),
  ]

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

  const handleSolutionItemClick = () => {
    setSolutionDropdownOpen(false)
    setFocusedDropdownIndex(-1)
  }

  // Keyboard navigation for Solution dropdown
  const handleSolutionKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (!solutionDropdownOpen) {
      // Open dropdown on Enter, Space, or ArrowDown
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault()
        setSolutionDropdownOpen(true)
        setFocusedDropdownIndex(0)
        setTimeout(() => dropdownItemsRef.current[0]?.focus(), 0)
      }
      return
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault()
        setSolutionDropdownOpen(false)
        setFocusedDropdownIndex(-1)
        break
      case "ArrowDown":
        e.preventDefault()
        setFocusedDropdownIndex((prev) => {
          const next = prev < dropdownLinks.length - 1 ? prev + 1 : 0
          dropdownItemsRef.current[next]?.focus()
          return next
        })
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedDropdownIndex((prev) => {
          const next = prev > 0 ? prev - 1 : dropdownLinks.length - 1
          dropdownItemsRef.current[next]?.focus()
          return next
        })
        break
      case "Home":
        e.preventDefault()
        setFocusedDropdownIndex(0)
        dropdownItemsRef.current[0]?.focus()
        break
      case "End":
        e.preventDefault()
        const lastIndex = dropdownLinks.length - 1
        setFocusedDropdownIndex(lastIndex)
        dropdownItemsRef.current[lastIndex]?.focus()
        break
      case "Tab":
        // Close dropdown when tabbing out
        setSolutionDropdownOpen(false)
        setFocusedDropdownIndex(-1)
        break
    }
  }, [solutionDropdownOpen, dropdownLinks.length])

  // Handle dropdown item click via keyboard
  const handleDropdownItemKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleSolutionItemClick()
      navigate(href)
    }
  }

  // Reset focus index when dropdown closes
  useEffect(() => {
    if (!solutionDropdownOpen) {
      setFocusedDropdownIndex(-1)
    }
  }, [solutionDropdownOpen])

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
            // 원래 마진이 있었는데 navigation option들이 많아지다 보니 글씨가 두줄이되서 변동중
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
          <div className="text-md hidden flex-1 items-center justify-center lg:flex lg:gap-x-10">
            {navItems.map((item) => (
              item.key === "solution" ? (
                <div
                  key={item.key}
                  ref={solutionDropdownRef}
                  className="relative"
                  onKeyDown={handleSolutionKeyDown}
                >
                  <div
                    onClick={() => setSolutionDropdownOpen(!solutionDropdownOpen)}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 cursor-pointer select-none",
                      pathname.startsWith("/solution")
                        ? "text-foreground"
                        : "text-foreground/70"
                    )}
                  >
                    {t.nav[item.key]}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      solutionDropdownOpen && "rotate-180"
                    )} />
                  </div>

                  {/* Solution Dropdown */}
                  {solutionDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setSolutionDropdownOpen(false)}
                      />
                      <div
                        id="solution-dropdown-menu"
                        role="menu"
                        aria-label={t.nav.solution}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                      >
                      <div className="bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-xl p-6 min-w-[600px]">
                        {/* View All Link */}
                        <Link
                          ref={(el) => { dropdownItemsRef.current[0] = el }}
                          to="/solution"
                          role="menuitem"
                          tabIndex={focusedDropdownIndex === 0 ? 0 : -1}
                          onClick={handleSolutionItemClick}
                          onKeyDown={(e) => handleDropdownItemKeyDown(e, "/solution")}
                          className="block text-sm font-medium text-primary hover:text-primary/80 mb-4 pb-3 border-b border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        >
                          {t.nav.solutionDropdown.viewAll} →
                        </Link>

                        {/* Categories Grid */}
                        <div className="grid grid-cols-3 gap-6">
                          {(() => {
                            let itemIndex = 1
                            return solutionCategories.map((category) => (
                              <div key={category.key} role="group" aria-label={t.nav.solutionDropdown[category.key].title}>
                                <Link
                                  ref={(el) => { dropdownItemsRef.current[itemIndex++] = el }}
                                  to={category.href}
                                  role="menuitem"
                                  tabIndex={-1}
                                  onClick={handleSolutionItemClick}
                                  onKeyDown={(e) => handleDropdownItemKeyDown(e, category.href)}
                                  className={cn(
                                    "text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded",
                                    pathname === category.href
                                      ? "text-primary"
                                      : "text-foreground hover:text-primary"
                                  )}
                                >
                                  {t.nav.solutionDropdown[category.key].title}
                                </Link>
                                <ul className="mt-3 space-y-2" role="group">
                                  {category.items.map((subItem) => {
                                    const currentIndex = itemIndex++
                                    return (
                                      <li key={subItem.key} role="none">
                                        <Link
                                          ref={(el) => { dropdownItemsRef.current[currentIndex] = el }}
                                          to={subItem.href}
                                          role="menuitem"
                                          tabIndex={-1}
                                          onClick={handleSolutionItemClick}
                                          onKeyDown={(e) => handleDropdownItemKeyDown(e, subItem.href)}
                                          className={cn(
                                            "text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded block",
                                            pathname === subItem.href
                                              ? "text-primary font-medium"
                                              : "text-muted-foreground hover:text-foreground"
                                          )}
                                        >
                                          {
                                            (
                                              t.nav.solutionDropdown[category.key as "ew" | "nc" | "cuas"].items as Record<string, string>
                                            )[subItem.key]
                                          }
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            ))
                          })()}
                        </div>
                      </div>
                    </div>
                    </>
                  )}
                </div>
              ) : (
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
              )
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
            mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 mt-2 rounded-xl bg-background/95 backdrop-blur-lg border border-border shadow-lg max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item, index) => (
                item.key === "solution" ? (
                  <div key={item.key}>
                    {/* Solution Header with Expand Toggle */}
                    <button
                      type="button"
                      onClick={() => setMobileSolutionExpanded(!mobileSolutionExpanded)}
                      className={cn(
                        "w-full text-left text-base font-semibold transition-all duration-200 py-3 px-4 rounded-lg flex items-center justify-between",
                        "hover:bg-accent/50",
                        pathname.startsWith("/solution")
                          ? "text-foreground bg-accent/30"
                          : "text-foreground/70"
                      )}
                      style={{
                        transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                      }}
                    >
                      {t.nav[item.key]}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileSolutionExpanded && "rotate-180"
                      )} />
                    </button>

                    {/* Solution Submenu */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobileSolutionExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pl-4 py-2 space-y-3">
                        {/* View All Link */}
                        <Link
                          to="/solution"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileSolutionExpanded(false)
                          }}
                          className="block text-sm font-medium text-primary py-2 px-4"
                        >
                          {t.nav.solutionDropdown.viewAll}
                        </Link>

                        {/* Categories */}
                        {solutionCategories.map((category) => (
                          <div key={category.key} className="space-y-1">
                            <Link
                              to={category.href}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileSolutionExpanded(false)
                              }}
                              className={cn(
                                "block text-sm font-semibold py-1 px-4",
                                pathname === category.href
                                  ? "text-primary"
                                  : "text-foreground"
                              )}
                            >
                              {t.nav.solutionDropdown[category.key].title}
                            </Link>
                            {category.items.map((subItem) => (
                              <Link
                                key={subItem.key}
                                to={subItem.href}
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setMobileSolutionExpanded(false)
                                }}
                                className={cn(
                                  "block text-sm py-1 px-6",
                                  pathname === subItem.href
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                {
                                    (
                                      t.nav.solutionDropdown[category.key as "ew" | "nc" | "cuas"].items as Record<string, string>
                                    )[subItem.key]
                                  }
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
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
                )
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
