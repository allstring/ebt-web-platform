import { useRef, useEffect, useCallback, type RefObject } from "react"

/**
 * useScrollSnap - 섹션 스크롤 스냅 훅 (Wheel + scrollIntoView)
 * 마우스 휠 이벤트에 따라 전체 화면 섹션을 스크롤합니다.
 * 수동 스크롤(스크롤바 드래그 등) 후에도 정확한 섹션으로 이동합니다.
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

  // 현재 화면에 가장 많이 보이는 섹션의 인덱스를 계산
  const getCurrentVisibleIndex = useCallback((sections: HTMLElement[]): number => {
    if (typeof window === "undefined") return 0

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
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const sections = Array.from(
      containerRef.current.querySelectorAll(sectionSelector),
    ) as HTMLElement[]

    if (sections.length === 0) return

    // 초기 인덱스 설정
    currentIndex.current = getCurrentVisibleIndex(sections)

    const onWheel = (e: WheelEvent) => {
      // 휠 이벤트의 기본 스크롤 동작 방지
      e.preventDefault()

      if (isScrolling.current) return

      // 휠 이벤트 전에 현재 실제 위치 기반으로 인덱스 동기화
      const actualIndex = getCurrentVisibleIndex(sections)
      currentIndex.current = actualIndex

      const scrollDirection = e.deltaY > 0 ? 1 : -1
      let nextIndex = actualIndex

      if (scrollDirection > 0) {
        nextIndex = Math.min(actualIndex + 1, sections.length - 1)
      } else {
        nextIndex = Math.max(actualIndex - 1, 0)
      }

      // 인덱스 변경이 있을 때만 스크롤
      if (actualIndex !== nextIndex) {
        currentIndex.current = nextIndex
        const targetSection = sections[nextIndex]

        if (targetSection) {
          isScrolling.current = true

          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          // 스크롤 애니메이션 완료 후 잠금 해제
          timeoutRef.current = setTimeout(() => {
            isScrolling.current = false
            // 스크롤 완료 후 인덱스 재동기화
            currentIndex.current = getCurrentVisibleIndex(sections)
          }, 800)
        }
      }
    }

    // 수동 스크롤(스크롤바 드래그 등) 감지하여 인덱스 동기화
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null
    const onScroll = () => {
      // 프로그래매틱 스크롤 중이면 무시
      if (isScrolling.current) return

      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // 스크롤이 멈춘 후 인덱스 동기화
      scrollTimeout = setTimeout(() => {
        currentIndex.current = getCurrentVisibleIndex(sections)
      }, 100)
    }

    // 터치 이벤트 핸들러 (모바일 지원)
    let touchStartY = 0
    const SWIPE_THRESHOLD = 50

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return

      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY

      // 스와이프 거리가 임계값 이상일 때만 처리
      if (Math.abs(diff) < SWIPE_THRESHOLD) return

      const actualIndex = getCurrentVisibleIndex(sections)
      currentIndex.current = actualIndex

      const scrollDirection = diff > 0 ? 1 : -1
      let nextIndex = actualIndex

      if (scrollDirection > 0) {
        nextIndex = Math.min(actualIndex + 1, sections.length - 1)
      } else {
        nextIndex = Math.max(actualIndex - 1, 0)
      }

      if (actualIndex !== nextIndex) {
        currentIndex.current = nextIndex
        const targetSection = sections[nextIndex]

        if (targetSection) {
          isScrolling.current = true

          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          timeoutRef.current = setTimeout(() => {
            isScrolling.current = false
            currentIndex.current = getCurrentVisibleIndex(sections)
          }, 800)
        }
      }
    }

    // document.documentElement에 바인딩하여 passive 강제 해제
    // window 레벨 이벤트는 일부 브라우저에서 passive가 기본값으로 강제됨
    const target = document.documentElement

    // 명시적으로 passive: false를 설정하여 preventDefault() 동작 보장
    target.addEventListener("wheel", onWheel, { passive: false, capture: true })
    target.addEventListener("touchstart", onTouchStart, { passive: true })
    target.addEventListener("touchend", onTouchEnd, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      target.removeEventListener("wheel", onWheel, { capture: true })
      target.removeEventListener("touchstart", onTouchStart)
      target.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("scroll", onScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [containerRef, sectionSelector, getCurrentVisibleIndex])
}
