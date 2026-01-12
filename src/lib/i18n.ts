import { home as homeEn } from "@/localize/en/home"
import { home as homeKo } from "@/localize/ko/home"
import { home as homeJa } from "@/localize/ja/home"
import { home as homeFr } from "@/localize/fr/home"

import { about as aboutEn } from "@/localize/en/about"
import { about as aboutKo } from "@/localize/ko/about"
import { about as aboutJa } from "@/localize/ja/about"
import { about as aboutFr } from "@/localize/fr/about"

import { rnd as rndEn } from "@/localize/en/rnd"
import { rnd as rndKo } from "@/localize/ko/rnd"
import { rnd as rndJa } from "@/localize/ja/rnd"
import { rnd as rndFr } from "@/localize/fr/rnd"

import { contact as contactEn } from "@/localize/en/contact"
import { contact as contactKo } from "@/localize/ko/contact"
import { contact as contactJa } from "@/localize/ja/contact"
import { contact as contactFr } from "@/localize/fr/contact"

import { nav as navEn } from "@/localize/en/nav"
import { nav as navKo } from "@/localize/ko/nav"
import { nav as navJa } from "@/localize/ja/nav"
import { nav as navFr } from "@/localize/fr/nav"

import { solution as solutionEn } from "@/localize/en/solution"
import { solution as solutionKo } from "@/localize/ko/solution"
import { solution as solutionJa } from "@/localize/ja/solution"
import { solution as solutionFr } from "@/localize/fr/solution"

export type Locale = "en" | "ko" | "ja" | "fr"

const LOCALE_KEY = "locale"
const VALID_LOCALES: Locale[] = ["en", "ko", "ja", "fr"]

const fallback = { home: homeEn, about: aboutEn, rnd: rndEn, contact: contactEn, nav: navEn, solution: solutionEn }

const translations: Record<string, {
  home: typeof homeEn
  about: typeof aboutEn
  rnd: typeof rndEn
  contact: typeof contactEn
  nav: typeof navEn
  solution: typeof solutionEn
}> = {
  en: { home: homeEn, about: aboutEn, rnd: rndEn, contact: contactEn, nav: navEn, solution: solutionEn },
  ko: { home: homeKo, about: aboutKo, rnd: rndKo, contact: contactKo, nav: navKo, solution: solutionKo },
  ja: { home: homeJa, about: aboutJa, rnd: rndJa, contact: contactJa, nav: navJa, solution: solutionJa },
  fr: { home: homeFr, about: aboutFr, rnd: rndFr, contact: contactFr, nav: navFr, solution: solutionFr },
}

function updateHtmlLang(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale
  }
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(LOCALE_KEY)
  if (stored && VALID_LOCALES.includes(stored as Locale)) {
    return stored as Locale
  }
  return "en"
}

let currentLocale: Locale = getInitialLocale()

// Set lang attribute when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => updateHtmlLang(currentLocale))
  } else {
    updateHtmlLang(currentLocale)
  }
}

export function setLocale(locale: Locale) {
  currentLocale = locale
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_KEY, locale)
    updateHtmlLang(locale)
  }
}

export function getLocale(): Locale {
  return currentLocale
}

export const t = {
  get home() {
    return translations[currentLocale]?.home ?? fallback.home
  },
  get about() {
    return translations[currentLocale]?.about ?? fallback.about
  },
  get rnd() {
    return translations[currentLocale]?.rnd ?? fallback.rnd
  },
  get contact() {
    return translations[currentLocale]?.contact ?? fallback.contact
  },
  get nav() {
    return translations[currentLocale]?.nav ?? fallback.nav
  },
  get solution() {
    return translations[currentLocale]?.solution ?? fallback.solution
  },
}
