import { useRef, useEffect, type RefObject } from "react"

/**
 * useScrollSnap - 섹션 스크롤 스냅 훅 (Wheel + scrollTo)
 * 마우스 휠/터치 이벤트에 따라 전체 화면 섹션을 스크롤합니다.
 *
 * @param containerRef - 섹션들을 감싸는 컨테이너의 ref
 * @param sectionSelector - 스냅될 섹션들의 CSS 선택자
 */
export function useScrollSnap(
  containerRef: RefObject<HTMLElement>,
  sectionSelector: string = ".snap-section",
) {
  const currentIndex = useRef(0)
  const isScrolling = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // 매 이벤트마다 섹션을 새로 쿼리 (lazy loading, 조건부 렌더링 대응)
    const getSections = (): HTMLElement[] => {
      if (!containerRef.current) return []
      return Array.from(
        containerRef.current.querySelectorAll(sectionSelector),
      ) as HTMLElement[]
    }

    const getCurrentVisibleIndex = (sections: HTMLElement[]): number => {
      const viewportHeight = window.innerHeight
      const viewportCenter = window.scrollY + viewportHeight / 2

      let closestIndex = 0
      let closestDistance = Infinity

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = window.scrollY + rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - sectionCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      return closestIndex
    }

    const scrollToSection = (section: HTMLElement) => {
      const targetY = section.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: targetY, behavior: "smooth" })
    }

    const scheduleUnlock = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        isScrolling.current = false
        const fresh = getSections()
        if (fresh.length > 0) {
          currentIndex.current = getCurrentVisibleIndex(fresh)
        }
      }, 800)
    }

    const navigateToNext = (sections: HTMLElement[], direction: number) => {
      if (isScrolling.current) return

      const actualIndex = getCurrentVisibleIndex(sections)
      currentIndex.current = actualIndex

      let nextIndex = actualIndex
      if (direction > 0) {
        nextIndex = Math.min(actualIndex + 1, sections.length - 1)
      } else {
        nextIndex = Math.max(actualIndex - 1, 0)
      }

      if (actualIndex !== nextIndex) {
        currentIndex.current = nextIndex
        const targetSection = sections[nextIndex]
        if (targetSection) {
          isScrolling.current = true
          scrollToSection(targetSection)
          scheduleUnlock()
        }
      }
    }

    // ── Wheel ──
    const onWheel = (e: WheelEvent) => {
      const sections = getSections()
      if (sections.length === 0) return // 섹션 없으면 기본 스크롤 허용

      e.preventDefault()
      e.stopPropagation()

      const direction = e.deltaY > 0 ? 1 : -1
      navigateToNext(sections, direction)
    }

    // ── Scroll (수동 스크롤바 드래그 등) ──
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null
    const onScroll = () => {
      if (isScrolling.current) return
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const sections = getSections()
        if (sections.length > 0) {
          currentIndex.current = getCurrentVisibleIndex(sections)
        }
      }, 100)
    }

    // ── Touch ──
    let touchStartY = 0
    const SWIPE_THRESHOLD = 50

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const sections = getSections()
      if (sections.length === 0) return

      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY
      if (Math.abs(diff) < SWIPE_THRESHOLD) return

      const direction = diff > 0 ? 1 : -1
      navigateToNext(sections, direction)
    }

    // ── CSS 레벨 스크롤 방지 (backup) ──
    const html = document.documentElement
    html.style.overscrollBehavior = "none"

    // ── 이벤트 등록 ──
    // window 캡처 단계: 다른 스크립트보다 먼저 이벤트를 잡음
    // passive: false 명시 → preventDefault() 보장
    window.addEventListener("wheel", onWheel, { passive: false, capture: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("wheel", onWheel, { capture: true })
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("scroll", onScroll)
      html.style.overscrollBehavior = ""
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [containerRef, sectionSelector])
}
