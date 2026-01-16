// ============================================================================
// CookieConsent - 쿠키 동의 배너
// 사이트 첫 방문 시 하단에 표시되는 쿠키 동의 요청 배너
// ============================================================================

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLocale, type Locale } from "@/lib/i18n"

const COOKIE_CONSENT_KEY = "cookie-consent"

// 다국어 텍스트
const TEXTS: Record<Locale, {
  title: string
  description: string
  accept: string
  decline: string
}> = {
  en: {
    title: "We use cookies",
    description: "This website uses cookies to enhance your browsing experience.",
    accept: "Accept",
    decline: "Decline",
  },
  ko: {
    title: "쿠키 사용 안내",
    description: "이 웹사이트는 더 나은 사용자 경험을 위해 쿠키를 사용합니다.",
    accept: "동의",
    decline: "거부",
  },
}

export function CookieConsent() {
  const { locale } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  // 현재 언어에 맞는 텍스트 (없으면 영어로 폴백)
  const text = TEXTS[locale] ?? TEXTS.en

  useEffect(() => {
    // 이미 동의/거부한 적이 있으면 배너를 표시하지 않음
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // 약간의 딜레이 후 나타나게 (페이지 로드 후 자연스럽게)
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = (choice: "accepted" | "declined") => {
    console.log(`Cookie Consent: ${choice === "accepted" ? "Accepted" : "Declined"}`)
    localStorage.setItem(COOKIE_CONSENT_KEY, choice)

    // 닫기 애니메이션 시작
    setIsClosing(true)

    // 애니메이션 후 컴포넌트 제거 (500ms 후)
    setTimeout(() => setIsVisible(false), 500)
  }

  if (!isVisible) return null

  return (
    <div
      className={`
        fixed inset-x-0 bottom-0 z-50 p-4
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isClosing
          ? "translate-y-[120%] opacity-0 scale-95 animate-slide-down"
          : "translate-y-0 opacity-100 scale-100 animate-slide-up"
        }
      `}
    >
      {/* 다크모드: 더 어둡고 부드러운 톤 / 라이트모드: 밝은 톤 */}
      <div className="
        mx-auto max-w-2xl rounded-2xl overflow-hidden
        border border-border/50
        bg-neutral-900/95 light:bg-white/95
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.4)] light:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      ">
        {/* 상단 액센트 바 - 다크모드에서 톤다운 */}
        <div className="
          h-0.5
          bg-gradient-to-r from-transparent via-accent/60 to-transparent
          light:from-transparent light:via-accent light:to-transparent
        " />

        <div className="p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* 쿠키 아이콘 */}
            <div className="
              hidden sm:flex shrink-0 w-11 h-11 rounded-full
              items-center justify-center
              bg-accent/10 light:bg-accent/15
            ">
              <svg
                className="w-5 h-5 text-accent/80 light:text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.733-.08-1.448-.232-2.136a1 1 0 00-1.396-.706c-.63.294-1.348.342-2.022.137a3.5 3.5 0 01-2.145-2.145c-.205-.674-.157-1.392.137-2.022a1 1 0 00-.706-1.396A10.053 10.053 0 0012 2zm-1.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 5a1 1 0 110 2 1 1 0 010-2zm6.5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 3.5a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
            </div>

            {/* 텍스트 영역 */}
            <div className="flex-1 min-w-0">
              <h3 className="
                text-sm font-medium
                text-neutral-100 light:text-neutral-900
              ">
                {text.title}
              </h3>
              <p className="
                mt-1 text-sm
                text-neutral-400 light:text-neutral-600
              ">
                {text.description}
              </p>
            </div>

            {/* 버튼 영역 */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleClose("declined")}
                className="
                  flex-1 sm:flex-none sm:min-w-[80px]
                  text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800
                  light:text-neutral-500 light:hover:text-neutral-900 light:hover:bg-neutral-100
                  transition-colors
                "
              >
                {text.decline}
              </Button>
              <Button
                size="sm"
                onClick={() => handleClose("accepted")}
                className="
                  flex-1 sm:flex-none sm:min-w-[80px]
                  bg-accent/90 hover:bg-accent text-white
                  light:bg-accent light:hover:bg-accent/90
                  transition-colors
                "
              >
                {text.accept}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
