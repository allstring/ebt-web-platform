// ============================================================================
// About Page
// 회사 소개 페이지 - 비전, 미션, 핵심 역량 (GSAP 애니메이션)
// ============================================================================

import { useEffect, useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLocale } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

// ============================================================================
// Scroll Snap Hook
// ============================================================================

function useScrollSnap(containerRef: React.RefObject<HTMLDivElement>) {
  useLayoutEffect(() => {
    if (!containerRef.current) return

    // 약간의 지연 후 스냅 포인트 계산 (레이아웃 안정화 대기)
    const timeoutId = setTimeout(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".snap-section")
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
  }, [containerRef])
}

// Assets
import heroBgImg from "@/assets/images/about/hero-bg.webp"
import capabilityBgImg from "@/assets/images/about/capability-bg.webp"

// ============================================================================
// Hero Section - 회사 개요
// ============================================================================

function HeroSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const desc1Ref = useRef<HTMLParagraphElement>(null)
  const desc2Ref = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 라벨 등장
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )

      // 타이틀 애니메이션
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      )

      // 설명 텍스트 순차 등장
      gsap.fromTo(
        [desc1Ref.current, desc2Ref.current],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15, delay: 0.5 }
      )

      // 카드 영역 등장
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:pt-48 lg:pb-18 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-background/80 light:bg-background/90 transition-colors duration-200" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* 왼쪽: 회사 소개 텍스트 */}
          <div className="max-w-xl">
            <p
              ref={labelRef}
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {t.about.hero.sectionLabel}
            </p>
            <h1
              ref={titleRef}
              className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
            >
              {t.about.hero.title1}
              <br className="hidden md:block" /> {t.about.hero.title2}
            </h1>
            <p
              ref={desc1Ref}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              {t.about.hero.description1}
            </p>
            <p
              ref={desc2Ref}
              className="mt-4 text-base text-muted-foreground leading-relaxed"
            >
              {t.about.hero.description2}
            </p>
          </div>

          {/* 오른쪽: Why Choose Us 카드 */}
          <div ref={cardsRef}>
            <WhyChooseUsCards />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Why Choose Us Cards - 선택 이유 카드
// ============================================================================

function WhyChooseUsCards() {
  const { t } = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const mainCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 메인 카드 등장
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // 서브 카드들 순차 등장
      gsap.fromTo(
        ".why-choose-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".why-choose-card",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-6">
      {/* 메인 카드 */}
      <div
        ref={mainCardRef}
        className="p-6 bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {t.about.whyChoose.sectionLabel}
        </p>
        <h2 className="mt-3 text-xl font-medium text-foreground">
          {t.about.whyChoose.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {t.about.whyChoose.description}
        </p>
      </div>

      {/* 서브 카드 그리드 */}
      <div className="grid gap-6 md:grid-cols-2">
        {t.about.whyChoose.cards.map((card) => (
          <div
            key={card.title}
            className="why-choose-card p-6 bg-card border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
          >
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Vision & Mission Section - 비전과 미션
// ============================================================================

function VisionMissionSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision 카드 - 왼쪽에서 등장
      gsap.fromTo(
        visionRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      // Mission 카드 - 오른쪽에서 등장
      gsap.fromTo(
        missionRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 lg:py-28 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Vision */}
          <div ref={visionRef} className="group">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.vision.sectionLabel}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {t.about.vision.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.about.vision.description}
            </p>
          </div>

          {/* Mission */}
          <div ref={missionRef} className="group">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.mission.sectionLabel}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {t.about.mission.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Capability Card - 역량 카드 컴포넌트
// ============================================================================

interface CapabilityCardProps {
  title: string
  description: string
  index: number
}

function CapabilityCard({ title, description, index }: CapabilityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.5, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group p-6 bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
    >
      {/* 인덱스 번호 */}
      <span className="text-4xl font-light text-muted-foreground/50 group-hover:text-accent/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* 제목 */}
      <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* 설명 */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Hover 시 나타나는 액센트 라인 */}
      <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

// ============================================================================
// Core Capabilities Section - 핵심 역량
// ============================================================================

function CoreCapabilitiesSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 섹션 헤더 등장
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${capabilityBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-background/85 light:bg-background/90 transition-colors duration-200" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.about.capabilities.sectionLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t.about.capabilities.title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t.about.capabilities.description}
          </p>
        </div>

        {/* 역량 카드 그리드 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {t.about.capabilities.items.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollSnap(containerRef)

  return (
    <div ref={containerRef}>
      <section className="snap-section">
        <HeroSection />
      </section>
      <section className="snap-section">
        <VisionMissionSection />
      </section>
      <section className="snap-section">
        <CoreCapabilitiesSection />
      </section>
    </div>
  )
}
