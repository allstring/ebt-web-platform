import { useState, useEffect, useCallback } from "react"

/**
 * useTheme - 테마 상태 관리 훅
 * navigation.tsx와 footer.tsx의 중복 로직을 통합
 * View Transitions API를 사용하여 부드러운 테마 전환 지원
 */

// View Transitions API 지원 여부 확인
const supportsViewTransitions = () =>
  typeof document !== "undefined" &&
  "startViewTransition" in document

// 테마 변경 실행
const applyTheme = (theme: "light" | "dark") => {
  const html = document.documentElement
  const isLight = theme === "light"

  if (isLight) {
    html.classList.add("light")
  } else {
    html.classList.remove("light")
  }

  window.localStorage.setItem("theme", theme)
  return isLight
}

export function useTheme() {
  const [isLight, setIsLight] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("light")
      : false
  )

  // 테마 변경 감지 (다른 컴포넌트에서 변경 시)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    const html = document.documentElement
    const nextTheme = html.classList.contains("light") ? "dark" : "light"

    // View Transitions API가 지원되면 부드러운 전환 사용
    if (supportsViewTransitions()) {
      document.startViewTransition(() => {
        const newIsLight = applyTheme(nextTheme)
        setIsLight(newIsLight)
      })
    } else {
      // Fallback: CSS transition 사용
      html.classList.add("theme-transition")
      const newIsLight = applyTheme(nextTheme)
      setIsLight(newIsLight)

      // transition 완료 후 클래스 제거 (CSS duration 350ms + buffer)
      setTimeout(() => {
        html.classList.remove("theme-transition")
      }, 400)
    }
  }, [])

  const setTheme = useCallback((theme: "light" | "dark") => {
    const html = document.documentElement
    const shouldBeLight = theme === "light"

    if (html.classList.contains("light") === shouldBeLight) return

    if (supportsViewTransitions()) {
      document.startViewTransition(() => {
        applyTheme(theme)
        setIsLight(shouldBeLight)
      })
    } else {
      html.classList.add("theme-transition")
      applyTheme(theme)
      setIsLight(shouldBeLight)

      setTimeout(() => {
        html.classList.remove("theme-transition")
      }, 400)
    }
  }, [])

  return { isLight, toggleTheme, setTheme }
}
