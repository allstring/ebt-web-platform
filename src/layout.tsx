import React, { useEffect } from "react"
import "@/styles/global.css"
import { BackToTopButton } from "@/components/back-to-top-button"
import { getLocale } from "@/lib/i18n"

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = getLocale()
    document.body.classList.add("font-sans", "antialiased")

    // 초기 테마 설정: localStorage > 시스템 설정 > 기본 다크
    try {
      const storedTheme = window.localStorage.getItem("theme")
      const systemPrefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches
      // 기본은 다크, light일 때만 .light 클래스 사용
      const isLight = storedTheme === "light" || (!storedTheme && systemPrefersLight)

      if (isLight) {
        document.documentElement.classList.add("light")
      } else {
        document.documentElement.classList.remove("light")
      }
    } catch {
      // 실패해도 렌더링에는 영향 없도록 무시
    }
  }, [])

  return (
    <>
      {children}
      <BackToTopButton />
    </>
  )
}
