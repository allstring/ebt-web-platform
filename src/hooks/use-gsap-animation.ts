import { useEffect, type RefObject } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ============================================================================
// 타입 정의
// ============================================================================

type AnimationDirection = "up" | "down" | "left" | "right"

interface BaseAnimationOptions {
  duration?: number
  delay?: number
  ease?: string
  start?: string
  toggleActions?: string
}

interface FadeInOptions extends BaseAnimationOptions {
  y?: number
}

interface SlideInOptions extends BaseAnimationOptions {
  direction?: AnimationDirection
  distance?: number
}

interface StaggerOptions extends BaseAnimationOptions {
  stagger?: number
  y?: number
  x?: number
  scale?: number
}

// ============================================================================
// 통일된 기본값
// ============================================================================

const DEFAULTS = {
  duration: 0.8,
  ease: "power3.out",
  start: "top 85%",
  toggleActions: "play none none reverse",
  stagger: 0.12,
} as const

// ============================================================================
// useFadeIn - 페이드인 애니메이션 (스크롤 트리거 포함)
// ============================================================================

export function useFadeIn(
  ref: RefObject<HTMLElement | null>,
  triggerRef?: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
) {
  const {
    duration = DEFAULTS.duration,
    delay = 0,
    ease = DEFAULTS.ease,
    start = DEFAULTS.start,
    toggleActions = DEFAULTS.toggleActions,
    y = 40,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: triggerRef?.current ?? ref.current,
            start,
            toggleActions,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [ref, triggerRef, duration, delay, ease, start, toggleActions, y])
}

// ============================================================================
// useSlideIn - 슬라이드 애니메이션 (스크롤 트리거 포함)
// ============================================================================

export function useSlideIn(
  ref: RefObject<HTMLElement | null>,
  triggerRef?: RefObject<HTMLElement | null>,
  options: SlideInOptions = {}
) {
  const {
    duration = DEFAULTS.duration,
    delay = 0,
    ease = DEFAULTS.ease,
    start = DEFAULTS.start,
    toggleActions = DEFAULTS.toggleActions,
    direction = "left",
    distance = 60,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const fromVars: gsap.TweenVars = { opacity: 0 }
    const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease }

    switch (direction) {
      case "left":
        fromVars.x = -distance
        toVars.x = 0
        break
      case "right":
        fromVars.x = distance
        toVars.x = 0
        break
      case "up":
        fromVars.y = distance
        toVars.y = 0
        break
      case "down":
        fromVars.y = -distance
        toVars.y = 0
        break
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: triggerRef?.current ?? ref.current,
          start,
          toggleActions,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [ref, triggerRef, duration, delay, ease, start, toggleActions, direction, distance])
}

// ============================================================================
// useStaggerAnimation - 순차 등장 애니메이션 (스크롤 트리거 포함)
// ============================================================================

export function useStaggerAnimation(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options: StaggerOptions = {}
) {
  const {
    duration = 0.6,
    delay = 0,
    ease = DEFAULTS.ease,
    start = DEFAULTS.start,
    toggleActions = DEFAULTS.toggleActions,
    stagger = DEFAULTS.stagger,
    y = 50,
    x = 0,
    scale = 1,
  } = options

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y, x, scale: scale < 1 ? scale : 1 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease,
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, selector, duration, delay, ease, start, toggleActions, stagger, y, x, scale])
}

// ============================================================================
// useParallax - 패럴랙스 스크롤 효과
// ============================================================================

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed: number = 0.5
) {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [ref, speed])
}

// ============================================================================
// useHeroAnimation - 히어로 섹션 초기 애니메이션 (스크롤 트리거 없음)
// ============================================================================

interface HeroAnimationRefs {
  label?: RefObject<HTMLElement | null>
  title?: RefObject<HTMLElement | null>
  description?: RefObject<HTMLElement | null>
  extra?: RefObject<HTMLElement | null>
}

export function useHeroAnimation(
  containerRef: RefObject<HTMLElement | null>,
  refs: HeroAnimationRefs
) {
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      if (refs.label?.current) {
        timeline.fromTo(
          refs.label.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0
        )
      }

      if (refs.title?.current) {
        timeline.fromTo(
          refs.title.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          0.15
        )
      }

      if (refs.description?.current) {
        timeline.fromTo(
          refs.description.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.35
        )
      }

      if (refs.extra?.current) {
        timeline.fromTo(
          refs.extra.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, refs])
}

// ============================================================================
// useDualSlideIn - 좌우 동시 슬라이드 애니메이션
// ============================================================================

export function useDualSlideIn(
  containerRef: RefObject<HTMLElement | null>,
  leftRef: RefObject<HTMLElement | null>,
  rightRef: RefObject<HTMLElement | null>,
  options: BaseAnimationOptions = {}
) {
  const {
    duration = 1,
    delay = 0,
    ease = DEFAULTS.ease,
    start = DEFAULTS.start,
    toggleActions = DEFAULTS.toggleActions,
  } = options

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              toggleActions,
            },
          }
        )
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              toggleActions,
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, leftRef, rightRef, duration, delay, ease, start, toggleActions])
}
