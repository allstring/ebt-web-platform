import { createContext, useContext, useState, useCallback, createElement, type ReactNode } from "react"

import { home as homeEn } from "@/localize/en/home"
import { home as homeKo } from "@/localize/ko/home"
// import { home as homeJa } from "@/localize/ja/home"
// import { home as homeFr } from "@/localize/fr/home"

import { about as aboutEn } from "@/localize/en/about"
import { about as aboutKo } from "@/localize/ko/about"
// import { about as aboutJa } from "@/localize/ja/about"
// import { about as aboutFr } from "@/localize/fr/about"

import { rnd as rndEn } from "@/localize/en/rnd"
import { rnd as rndKo } from "@/localize/ko/rnd"
// import { rnd as rndJa } from "@/localize/ja/rnd"
// import { rnd as rndFr } from "@/localize/fr/rnd"

import { contact as contactEn } from "@/localize/en/contact"
import { contact as contactKo } from "@/localize/ko/contact"
// import { contact as contactJa } from "@/localize/ja/contact"
// import { contact as contactFr } from "@/localize/fr/contact"

import { nav as navEn } from "@/localize/en/nav"
import { nav as navKo } from "@/localize/ko/nav"
// import { nav as navJa } from "@/localize/ja/nav"
// import { nav as navFr } from "@/localize/fr/nav"

import { solution as solutionEn } from "@/localize/en/solution"
import { solution as solutionKo } from "@/localize/ko/solution"
// import { solution as solutionJa } from "@/localize/ja/solution"
// import { solution as solutionFr } from "@/localize/fr/solution"

import { footer as footerEn } from "@/localize/en/footer"
import { footer as footerKo } from "@/localize/ko/footer"
// import { footer as footerJa } from "@/localize/ja/footer"
// import { footer as footerFr } from "@/localize/fr/footer"

import { notFound as notFoundEn } from "@/localize/en/notFound"
import { notFound as notFoundKo } from "@/localize/ko/notFound"
// import { notFound as notFoundJa } from "@/localize/ja/notFound"
// import { notFound as notFoundFr } from "@/localize/fr/notFound"

// export type Locale = "en" | "ko" 
// export type Locale = "en" | "ko" | "ja" | "fr"


const LOCALE_KEY = "locale"
// const VALID_LOCALES: Locale[] = ["en", "ko"]
// const VALID_LOCALES: Locale[] = ["en", "ko", "ja", "fr"]

const RESOURCES = {
  en: {
    home: homeEn,
    about: aboutEn,
    rnd: rndEn,
    contact: contactEn,
    nav: navEn,
    solution: solutionEn,
    footer: footerEn,
    notFound: notFoundEn,
  },
  ko: {
    home: homeKo,
    about: aboutKo,
    rnd: rndKo,
    contact: contactKo,
    nav: navKo,
    solution: solutionKo,
    footer: footerKo,
    notFound: notFoundKo,
  },
  // ja: { ... },
  // fr: { ... },
} as const


export type Locale = keyof typeof RESOURCES
export type Namespace = keyof typeof RESOURCES["en"]

const SUPPORTED_LOCALES = Object.keys(RESOURCES) as Locale[]
const DEFAULT_LOCALE: Locale = "en"

let currentLocale: Locale = getInitialLocale()

function updateHtmlLang(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale
  }
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(LOCALE_KEY) as Locale
  return SUPPORTED_LOCALES.includes(stored) ? stored : DEFAULT_LOCALE
}

// 초기화 실행
if (typeof document !== "undefined") {
  const init = () => updateHtmlLang(currentLocale)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
  } else {
    init()
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

// --- 3. 번역 객체 (Proxy 사용으로 코드 대폭 단축) ---

/**
 * t 객체는 현재 설정된 currentLocale에 맞는 번역 리소스를 반환합니다.
 * 리소스가 없으면 기본 언어(en)로 폴백합니다.
 */
export const t = new Proxy({} as typeof RESOURCES[typeof DEFAULT_LOCALE], {
  get: (_target, namespace: Namespace) => {
    const localeResources = RESOURCES[currentLocale] || RESOURCES[DEFAULT_LOCALE]
    return localeResources[namespace] ?? RESOURCES[DEFAULT_LOCALE][namespace]
  },
})

// --- React Context for reactive locale switching ---

type TranslationResources = typeof RESOURCES[Locale]

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationResources
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }): ReactNode {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const handleSetLocale = useCallback((newLocale: Locale) => {
    currentLocale = newLocale
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_KEY, newLocale)
      updateHtmlLang(newLocale)
    }
  }, [])

  const translations = RESOURCES[locale] || RESOURCES[DEFAULT_LOCALE]

  const contextValue: LocaleContextType = {
    locale,
    setLocale: handleSetLocale,
    t: translations,
  }

  return createElement(LocaleContext.Provider, { value: contextValue }, children)
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}