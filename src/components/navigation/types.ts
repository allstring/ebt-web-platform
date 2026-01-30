import type { Locale } from "@/lib/i18n"

/* ==========================================================================
   Types
   ========================================================================== */

export interface SolutionCategory {
  key: "ew" | "cuas" | "nc"
  href: string
  items: { key: string; href: string }[]
}

export interface NavItem {
  key: "home" | "about" | "solution" | "rnd" | "contact"
  href: string
}

export interface DropdownLink {
  href: string
  label: string
}

/* ==========================================================================
   Constants
   ========================================================================== */

export const solutionCategories: SolutionCategory[] = [
  {
    key: "ew",
    href: "/solution/ew",
    items: [
      { key: "goldenBatEws", href: "/solution/ew/GoldenBat-EWS" },
      { key: "perceive", href: "/solution/ew/PERCEIVE" },
      { key: "resolve", href: "/solution/ew/RESOLVE" },
      { key: "microGoldenBat", href: "/solution/ew/Micro-GoldenBat" },
      { key: "phobosM4", href: "/solution/ew/PHOBOS-M4" },
      { key: "deceive", href: "/solution/ew/DECEIVE" },
      { key: "mapview", href: "/solution/ew/MAPVIEW" },
    ],
  },
  {
    key: "cuas",
    href: "/solution/c-uas",
    items: [
      { key: "ebtPes", href: "/solution/c-uas/eBT-PES" },
      { key: "spectraC2", href: "/solution/c-uas/Spectra-C2" },
    ],
  },
  {
    key: "nc",
    href: "/solution/nc",
    items: [
      { key: "chemproX", href: "/solution/nc/CHEMPRO-X" },
      { key: "ncMonitoring", href: "/solution/nc/NC-MONITORING-SYSTEM" },
      { key: "ranidX", href: "/solution/nc/RanidX" },
    ],
  },
]

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
}

export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "solution", href: "/solution" },
  { key: "rnd", href: "/rnd" },
  { key: "contact", href: "/contact" },
]
