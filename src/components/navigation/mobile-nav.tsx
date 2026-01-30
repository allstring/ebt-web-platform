import { useState } from "react"
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { solutionCategories, navItems } from "./types"

interface MobileNavProps {
  pathname: string
  t: Record<string, any>
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  handleNavClick: (href: string) => void
}

export function MobileNav({
  pathname,
  t,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
}: MobileNavProps) {
  const [mobileSolutionExpanded, setMobileSolutionExpanded] = useState(false)

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out relative z-50",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="py-4 mt-2 rounded-xl bg-background/95 backdrop-blur-lg border border-border shadow-lg max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col gap-1 px-2">
            {navItems.map((item, index) =>
              item.key === "solution" ? (
                <div key={item.key}>
                  {/* Solution Header with Expand Toggle */}
                  <button
                    type="button"
                    onClick={() => setMobileSolutionExpanded(!mobileSolutionExpanded)}
                    aria-expanded={mobileSolutionExpanded}
                    aria-controls="mobile-solution-submenu"
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
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileSolutionExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Solution Submenu */}
                  <div
                    id="mobile-solution-submenu"
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobileSolutionExpanded
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
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
                                  t.nav.solutionDropdown[
                                    category.key as "ew" | "nc" | "cuas"
                                  ].items as Record<string, string>
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
            )}
          </div>
        </div>
      </div>
    </>
  )
}
