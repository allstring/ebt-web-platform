import { useRef, useCallback, type KeyboardEvent } from "react"
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down"
import { Link, useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"
import { solutionCategories, navItems, type DropdownLink } from "./types"

interface DesktopNavProps {
  pathname: string
  t: Record<string, any>
  solutionDropdownOpen: boolean
  setSolutionDropdownOpen: (open: boolean) => void
  focusedDropdownIndex: number
  setFocusedDropdownIndex: (index: number | ((prev: number) => number)) => void
  dropdownLinks: DropdownLink[]
  handleNavClick: (href: string) => void
}

export function DesktopNav({
  pathname,
  t,
  solutionDropdownOpen,
  setSolutionDropdownOpen,
  focusedDropdownIndex,
  setFocusedDropdownIndex,
  dropdownLinks,
  handleNavClick,
}: DesktopNavProps) {
  const navigate = useNavigate()
  const solutionDropdownRef = useRef<HTMLDivElement>(null)
  const dropdownItemsRef = useRef<(HTMLAnchorElement | null)[]>([])

  const handleSolutionItemClick = () => {
    setSolutionDropdownOpen(false)
    setFocusedDropdownIndex(-1)
  }

  // Keyboard navigation for Solution dropdown
  const handleSolutionKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!solutionDropdownOpen) {
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
          setFocusedDropdownIndex((prev: number) => {
            const next = prev < dropdownLinks.length - 1 ? prev + 1 : 0
            dropdownItemsRef.current[next]?.focus()
            return next
          })
          break
        case "ArrowUp":
          e.preventDefault()
          setFocusedDropdownIndex((prev: number) => {
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
          setSolutionDropdownOpen(false)
          setFocusedDropdownIndex(-1)
          break
      }
    },
    [solutionDropdownOpen, dropdownLinks.length, setSolutionDropdownOpen, setFocusedDropdownIndex]
  )

  const handleDropdownItemKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleSolutionItemClick()
      navigate(href)
    }
  }

  return (
    <div className="text-md hidden flex-1 items-center justify-center lg:flex lg:gap-x-10">
      {navItems.map((item) =>
        item.key === "solution" ? (
          <div
            key={item.key}
            ref={solutionDropdownRef}
            className="relative"
            onKeyDown={handleSolutionKeyDown}
          >
            <button
              type="button"
              onClick={() => setSolutionDropdownOpen(!solutionDropdownOpen)}
              aria-expanded={solutionDropdownOpen}
              aria-controls="solution-dropdown-menu"
              aria-haspopup="true"
              className={cn(
                "text-lg font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 cursor-pointer select-none",
                pathname.startsWith("/solution")
                  ? "text-foreground"
                  : "text-foreground/70"
              )}
            >
              {t.nav[item.key]}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  solutionDropdownOpen && "rotate-180"
                )}
              />
            </button>

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
                      ref={(el) => {
                        dropdownItemsRef.current[0] = el
                      }}
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
                          <div
                            key={category.key}
                            role="group"
                            aria-label={t.nav.solutionDropdown[category.key].title}
                          >
                            <Link
                              ref={(el) => {
                                dropdownItemsRef.current[itemIndex++] = el
                              }}
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
                                      ref={(el) => {
                                        dropdownItemsRef.current[currentIndex] = el
                                      }}
                                      to={subItem.href}
                                      role="menuitem"
                                      tabIndex={-1}
                                      onClick={handleSolutionItemClick}
                                      onKeyDown={(e) =>
                                        handleDropdownItemKeyDown(e, subItem.href)
                                      }
                                      className={cn(
                                        "text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded block",
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
              pathname === item.href ? "text-foreground" : "text-foreground/70"
            )}
          >
            {t.nav[item.key]}
          </Link>
        )
      )}
    </div>
  )
}
