// ============================================================================
// AccessGate - 쿠키 동의 배너
// 처음 방문 시 표시되는 일반적인 쿠키 안내 배너
// Cookie 기반 저장 방식
// ============================================================================

import { useState, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { useLocale, type Locale } from "@/lib/i18n"

const ACCESS_COOKIE_NAME = "cookie-consent"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1년

// 다국어 텍스트
const TEXTS: Record<Locale, {
  title: string
  description: string
  details: {
    essential: { title: string; desc: string }
    analytics: { title: string; desc: string }
    security: { title: string; desc: string }
  }
  buttons: { accept: string; decline: string }
  learnMore: string
}> = {
  en: {
    title: "Cookie Notice",
    description: "This website uses cookies for security and analytics purposes to improve your browsing experience.",
    details: {
      essential: {
        title: "Essential Cookies",
        desc: "Required for basic site functionality such as page navigation and access to secure areas.",
      },
      analytics: {
        title: "Analytics Cookies",
        desc: "Help us understand how visitors interact with our website to improve user experience.",
      },
      security: {
        title: "Security Cookies",
        desc: "Used to maintain session security and protect against unauthorized access.",
      },
    },
    buttons: { accept: "Accept All", decline: "Decline" },
    learnMore: "By continuing to use this site, you consent to our use of cookies.",
  },
  ko: {
    title: "쿠키 사용 안내",
    description: "이 웹사이트는 보안 및 통계 목적으로 쿠키를 사용하여 더 나은 브라우징 경험을 제공합니다.",
    details: {
      essential: {
        title: "필수 쿠키",
        desc: "페이지 탐색 및 보안 영역 접근 등 기본적인 사이트 기능에 필요합니다.",
      },
      analytics: {
        title: "분석 쿠키",
        desc: "방문자가 웹사이트와 상호작용하는 방식을 파악하여 사용자 경험을 개선합니다.",
      },
      security: {
        title: "보안 쿠키",
        desc: "세션 보안을 유지하고 무단 접근으로부터 보호하는 데 사용됩니다.",
      },
    },
    buttons: { accept: "모두 동의", decline: "거부" },
    learnMore: "이 사이트를 계속 사용하면 쿠키 사용에 동의하는 것으로 간주됩니다.",
  },
}

// 쿠키 유틸리티 함수
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() ?? null
  }
  return null
}

function setCookie(name: string, value: string, maxAge: number): void {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Strict; Secure`
}

function deleteCookie(name: string): void {
  document.cookie = `${name}=; path=/; max-age=0`
}

interface AccessGateProps {
  children: ReactNode
}

export function AccessGate({ children }: AccessGateProps) {
  const { locale } = useLocale()
  const text = TEXTS[locale] ?? TEXTS.en

  const [showBanner, setShowBanner] = useState<boolean | null>(null)

  useEffect(() => {
    const consent = getCookie(ACCESS_COOKIE_NAME)
    setShowBanner(!consent)
  }, [])

  const handleClose = (choice: "accepted" | "declined") => {
    setCookie(ACCESS_COOKIE_NAME, choice, COOKIE_MAX_AGE)
    setShowBanner(false)
    // DetailPageGate에 알림 (이미 마운트된 경우 상태 업데이트)
    if (choice === "accepted") {
      window.dispatchEvent(new CustomEvent("cookie-consent-accepted"))
    }
  }

  // 로딩 중
  if (showBanner === null) {
    return (
      <>
        <div className="fixed inset-0 z-[9999] bg-neutral-950" />
      </>
    )
  }

  return (
    <>
      {/* 쿠키 배너 (Navigation 아래) */}
      {showBanner && (
        <div className="fixed inset-0 top-16 z-[9999] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm overflow-y-auto py-8">
          <div className="w-full max-w-lg mx-4 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
            {/* 헤더 */}
            <div className="p-6 pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.733-.08-1.448-.232-2.136a1 1 0 00-1.396-.706c-.63.294-1.348.342-2.022.137a3.5 3.5 0 01-2.145-2.145c-.205-.674-.157-1.392.137-2.022a1 1 0 00-.706-1.396A10.053 10.053 0 0012 2zm-1.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 5a1 1 0 110 2 1 1 0 010-2zm6.5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 3.5a1 1 0 110 2 1 1 0 010-2z"/>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-white">{text.title}</h2>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {text.description}
              </p>
            </div>

            {/* 쿠키 종류 설명 */}
            <div className="px-6 pb-4">
              <div className="space-y-3">
                {/* 필수 쿠키 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{text.details.essential.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{text.details.essential.desc}</p>
                  </div>
                </div>

                {/* 분석 쿠키 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/50">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{text.details.analytics.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{text.details.analytics.desc}</p>
                  </div>
                </div>

                {/* 보안 쿠키 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-800/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{text.details.security.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{text.details.security.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 푸터 */}
            <div className="px-6 pb-6">
              <p className="text-xs text-neutral-500 mb-4">{text.learnMore}</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleClose("declined")}
                  className="flex-1 py-2.5 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                >
                  {text.buttons.decline}
                </Button>
                <Button
                  onClick={() => handleClose("accepted")}
                  className="flex-1 py-2.5 bg-accent hover:bg-accent/90 text-white font-medium"
                >
                  {text.buttons.accept}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  )
}

// 디버깅용 유틸리티
export const AccessGateDebug = {
  getStatus: () => getCookie(ACCESS_COOKIE_NAME),
  reset: () => {
    deleteCookie(ACCESS_COOKIE_NAME)
    console.log("Cookie consent cleared. Refresh the page.")
  },
  accept: () => {
    setCookie(ACCESS_COOKIE_NAME, "accepted", COOKIE_MAX_AGE)
    console.log("Cookie consent accepted. Refresh the page.")
  },
}

if (import.meta.env.DEV) {
  ;(window as unknown as { AccessGateDebug: typeof AccessGateDebug }).AccessGateDebug = AccessGateDebug
}
