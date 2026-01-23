import { useLayoutEffect, type RefObject } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

/**
 * useScrollSnap - 섹션 스크롤 스냅 훅
 * 스크롤 시 지정된 섹션들에 자동으로 스냅되도록 설정
 *
 * @param containerRef - 스냅을 적용할 컨테이너의 ref
 * @param sectionSelector - 스냅 포인트가 될 섹션들의 CSS 선택자 (기본값: ".snap-section")
 *
 * @example
 * function MyPage() {
 *   const containerRef = useRef<HTMLDivElement>(null)
 *   useScrollSnap(containerRef)
 *
 *   return (
 *     <div ref={containerRef}>
 *       <section className="snap-section">Section 1</section>
 *       <section className="snap-section">Section 2</section>
 *     </div>
 *   )
 * }
 */
export function useScrollSnap(
  containerRef: RefObject<HTMLDivElement | null>,
  sectionSelector: string = ".snap-section"
) {
  useLayoutEffect(() => {
    if (!containerRef.current) return

    // 약간의 지연 후 스냅 포인트 계산 (레이아웃 안정화 대기)
    const timeoutId = setTimeout(() => {
      const sections = gsap.utils.toArray<HTMLElement>(sectionSelector)
      if (sections.length === 0) return

      const snapPoints = sections.map((section) => {
        const rect = section.getBoundingClientRect()
        const scrollTop = window.pageYOffset
        const sectionTop = rect.top + scrollTop
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        return Math.min(Math.max(sectionTop / docHeight, 0), 1)
      })

      ScrollTrigger.create({
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.2, max: 0.6 },
          delay: 0,
          ease: "power2.inOut",
        },
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.snap) t.kill()
      })
    }
  }, [containerRef, sectionSelector])
}
