// ============================================================================
// i18n (Internationalization) Module
// 다국어 지원을 위한 번역 시스템
// ============================================================================
//
// 📌 새로운 언어 추가 방법:
// 1. /src/localize/{언어코드}/ 폴더 생성 (예: /src/localize/ja/)
// 2. 해당 폴더에 각 네임스페이스별 파일 생성 (home.ts, about.ts, ...)
// 3. 아래 STEP 1, 2, 3 주석을 따라 import 및 RESOURCES에 추가
//
// 📌 지원 언어코드 예시:
// - en: English (영어) - 기본 언어
// - ko: 한국어
// - ja: 日本語 (일본어)
// - zh: 中文 (중국어)
// - fr: Français (프랑스어)
// - de: Deutsch (독일어)
// - es: Español (스페인어)
// ============================================================================

import {
  createContext,
  useContext,
  useState,
  useCallback,
  createElement,
  type ReactNode,
} from "react"

// ============================================================================
// STEP 1: 언어별 리소스 Import
// 새 언어 추가 시 아래 패턴을 따라 import 추가
// ============================================================================

// --- English (en) - 기본 언어 ---
import { home as homeEn } from "@/localize/en/home"
import { about as aboutEn } from "@/localize/en/about"
import { rnd as rndEn } from "@/localize/en/rnd"
import { contact as contactEn } from "@/localize/en/contact"
import { nav as navEn } from "@/localize/en/nav"
import { solution as solutionEn } from "@/localize/en/solution"
import { footer as footerEn } from "@/localize/en/footer"
import { notFound as notFoundEn } from "@/localize/en/notFound"
import { comingSoon as comingSoonEn } from "@/localize/en/comingSoon"

// --- Korean (ko) ---
import { home as homeKo } from "@/localize/ko/home"
import { about as aboutKo } from "@/localize/ko/about"
import { rnd as rndKo } from "@/localize/ko/rnd"
import { contact as contactKo } from "@/localize/ko/contact"
import { nav as navKo } from "@/localize/ko/nav"
import { solution as solutionKo } from "@/localize/ko/solution"
import { footer as footerKo } from "@/localize/ko/footer"
import { notFound as notFoundKo } from "@/localize/ko/notFound"
import { comingSoon as comingSoonKo } from "@/localize/ko/comingSoon"

// --- Japanese (ja) - 일본어 추가 시 주석 해제 ---
// import { home as homeJa } from "@/localize/ja/home"
// import { about as aboutJa } from "@/localize/ja/about"
// import { rnd as rndJa } from "@/localize/ja/rnd"
// import { contact as contactJa } from "@/localize/ja/contact"
// import { nav as navJa } from "@/localize/ja/nav"
// import { solution as solutionJa } from "@/localize/ja/solution"
// import { footer as footerJa } from "@/localize/ja/footer"
// import { notFound as notFoundJa } from "@/localize/ja/notFound"

// --- French (fr) - 프랑스어 추가 시 주석 해제 ---
// import { home as homeFr } from "@/localize/fr/home"
// import { about as aboutFr } from "@/localize/fr/about"
// import { rnd as rndFr } from "@/localize/fr/rnd"
// import { contact as contactFr } from "@/localize/fr/contact"
// import { nav as navFr } from "@/localize/fr/nav"
// import { solution as solutionFr } from "@/localize/fr/solution"
// import { footer as footerFr } from "@/localize/fr/footer"
// import { notFound as notFoundFr } from "@/localize/fr/notFound"

// ============================================================================
// STEP 2: 리소스 객체 정의
// 새 언어 추가 시 RESOURCES 객체에 해당 언어 키 추가
// ============================================================================

const RESOURCES = {
  // English - 기본 언어 (DEFAULT_LOCALE)
  en: {
    home: homeEn,
    about: aboutEn,
    rnd: rndEn,
    contact: contactEn,
    nav: navEn,
    solution: solutionEn,
    footer: footerEn,
    notFound: notFoundEn,
    comingSoon: comingSoonEn,
  },

  // Korean
  ko: {
    home: homeKo,
    about: aboutKo,
    rnd: rndKo,
    contact: contactKo,
    nav: navKo,
    solution: solutionKo,
    footer: footerKo,
    notFound: notFoundKo,
    comingSoon: comingSoonKo,
  },

  // Japanese - 일본어 추가 시 주석 해제
  // ja: {
  //   home: homeJa,
  //   about: aboutJa,
  //   rnd: rndJa,
  //   contact: contactJa,
  //   nav: navJa,
  //   solution: solutionJa,
  //   footer: footerJa,
  //   notFound: notFoundJa,
  // },

  // French - 프랑스어 추가 시 주석 해제
  // fr: {
  //   home: homeFr,
  //   about: aboutFr,
  //   rnd: rndFr,
  //   contact: contactFr,
  //   nav: navFr,
  //   solution: solutionFr,
  //   footer: footerFr,
  //   notFound: notFoundFr,
  // },
} as const

// ============================================================================
// STEP 3: 타입 및 설정 (자동 추론 - 수정 불필요)
// RESOURCES 객체에 언어를 추가하면 타입이 자동으로 추론됨
// ============================================================================

/** 지원되는 언어 코드 타입 (RESOURCES 키에서 자동 추론) */
export type Locale = keyof typeof RESOURCES

/** 번역 네임스페이스 타입 (페이지/컴포넌트별 구분) */
export type Namespace = keyof (typeof RESOURCES)["en"]

/** 지원되는 모든 언어 목록 */
const SUPPORTED_LOCALES = Object.keys(RESOURCES) as Locale[]

/** 기본 언어 (번역이 없을 때 폴백) */
const DEFAULT_LOCALE: Locale = "en"

/** localStorage에 저장되는 언어 설정 키 */
const LOCALE_KEY = "locale"

// ============================================================================
// 내부 상태 및 유틸리티 함수
// ============================================================================

/** 현재 선택된 언어 (모듈 레벨 상태) */
let currentLocale: Locale = getInitialLocale()

/**
 * HTML lang 속성 업데이트
 * SEO 및 접근성을 위해 문서 언어를 설정
 */
function updateHtmlLang(locale: Locale): void {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale
  }
}

/**
 * 초기 언어 설정 가져오기
 * 우선순위: localStorage > 기본값(en)
 */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE

  const stored = window.localStorage.getItem(LOCALE_KEY) as Locale
  return SUPPORTED_LOCALES.includes(stored) ? stored : DEFAULT_LOCALE
}

// 페이지 로드 시 HTML lang 속성 초기화
if (typeof document !== "undefined") {
  const initHtmlLang = () => updateHtmlLang(currentLocale)

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHtmlLang)
  } else {
    initHtmlLang()
  }
}

// ============================================================================
// 공개 API - 언어 설정 함수
// ============================================================================

/**
 * 언어 설정 변경
 * @param locale - 변경할 언어 코드
 */
export function setLocale(locale: Locale): void {
  currentLocale = locale

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_KEY, locale)
    updateHtmlLang(locale)
  }
}

/**
 * 현재 언어 설정 가져오기
 * @returns 현재 설정된 언어 코드
 */
export function getLocale(): Locale {
  return currentLocale
}

// ============================================================================
// 번역 객체 (Proxy 기반)
// 사용법: t.home.title, t.nav.about 등
// ============================================================================

/**
 * 번역 Proxy 객체
 * 현재 언어의 번역을 반환하며, 없으면 기본 언어(en)로 폴백
 *
 * @example
 * // 컴포넌트 외부에서 사용 (비권장 - 언어 변경 시 리렌더링 안됨)
 * import { t } from "@/lib/i18n"
 * console.log(t.home.title)
 *
 * // 컴포넌트 내부에서는 useLocale() 훅 사용 권장
 */
export const t = new Proxy({} as (typeof RESOURCES)[typeof DEFAULT_LOCALE], {
  get: (_target, namespace: Namespace) => {
    const localeResources = RESOURCES[currentLocale] || RESOURCES[DEFAULT_LOCALE]
    return localeResources[namespace] ?? RESOURCES[DEFAULT_LOCALE][namespace]
  },
})

// ============================================================================
// React Context - 반응형 언어 전환
// 컴포넌트에서 언어 변경 시 자동 리렌더링 지원
// ============================================================================

/** 번역 리소스 타입 */
type TranslationResources = (typeof RESOURCES)[Locale]

/** LocaleContext 값 타입 */
type LocaleContextType = {
  /** 현재 언어 */
  locale: Locale
  /** 언어 변경 함수 */
  setLocale: (locale: Locale) => void
  /** 번역 객체 */
  t: TranslationResources
}

const LocaleContext = createContext<LocaleContextType | null>(null)

/**
 * 언어 Provider 컴포넌트
 * 앱 최상위에서 감싸서 사용
 *
 * @example
 * // App.tsx 또는 main.tsx
 * <LocaleProvider>
 *   <App />
 * </LocaleProvider>
 */
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

/**
 * 언어 훅 - 컴포넌트에서 번역 사용
 * 언어 변경 시 자동으로 리렌더링됨
 *
 * @returns { locale, setLocale, t }
 *
 * @example
 * function MyComponent() {
 *   const { t, locale, setLocale } = useLocale()
 *
 *   return (
 *     <div>
 *       <h1>{t.home.title}</h1>
 *       <p>현재 언어: {locale}</p>
 *       <button onClick={() => setLocale("ko")}>한국어</button>
 *     </div>
 *   )
 * }
 */
export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }

  return context
}
