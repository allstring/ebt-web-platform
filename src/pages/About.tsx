// ============================================================================
// About Page
// 회사 소개 페이지 - 비전, 미션, 핵심 역량 (GSAP 애니메이션)
// ============================================================================

import { useRef } from "react"

import { useLocale } from "@/lib/i18n"
import {
  useHeroAnimation,
  useFadeIn,
  useSlideIn,
  useStaggerAnimation,
  useDualSlideIn,
} from "@/hooks/use-gsap-animation"

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
  const cardsRef = useRef<HTMLDivElement>(null)

  useHeroAnimation(sectionRef, {
    label: labelRef,
    title: titleRef,
    description: desc1Ref,
  })
  useSlideIn(cardsRef, sectionRef, { direction: "right", distance: 80, delay: 0.4 })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:pt-48 lg:pb-24 bg-cover bg-center"
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
              className="text-xs font-semibold uppercase tracking-wider text-accent"
            >
              {t.about.hero.sectionLabel}
            </p>
            <h1
              ref={titleRef}
              className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
            >
              {t.about.hero.title1}
              <br className="hidden md:block" /> {t.about.hero.title2}
            </h1>
            <div ref={desc1Ref}>
          
            <p
              
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              {t.about.hero.description1}
            </p>
            <p 
            className="mt-4 text-base text-muted-foreground leading-relaxed">
              {t.about.hero.description2}
            </p>
            </div>
            
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

  // useFadeIn(mainCardRef, mainCardRef, { y: 40, delay: 0.2 })
  useStaggerAnimation(containerRef, ".why-choose-card", { y: 30, scale: 0.95, stagger: 0.1 })

  return (
    <div ref={containerRef} className="space-y-6">
      {/* 메인 카드 */}
      <div
        ref={mainCardRef}
        className="p-6 bg-card border border-border rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
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
      <div className="grid gap-4 md:grid-cols-2">
        {t.about.whyChoose.cards.map((card) => (
          <div
            key={card.title}
            className="why-choose-card group p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
          >
            <h3 className="text-sm font-semibold tracking-wide text-foreground group-hover:text-accent transition-colors duration-200">
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

  useDualSlideIn(sectionRef, visionRef, missionRef, { duration: 0.2 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32 border-t border-border">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vision */}
          <div ref={visionRef} className="group p-8 bg-card/50 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t.about.vision.sectionLabel}
            </p>
            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {t.about.vision.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.about.vision.description}
            </p>
            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-20 transition-all duration-500" />
          </div>

          {/* Mission */}
          <div ref={missionRef} className="group p-8 bg-card/50 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t.about.mission.sectionLabel}
            </p>
            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {t.about.mission.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.about.mission.description}
            </p>
            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-20 transition-all duration-500" />
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

  useFadeIn(cardRef, cardRef, { y: 10, duration: 0.3 })

  return (
    <div
      ref={cardRef}
      className="group p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* 인덱스 번호 */}
      <span className="text-4xl font-light text-muted-foreground/30 group-hover:text-accent/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* 제목 */}
      <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* 설명 */}
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Hover 시 나타나는 액센트 라인 */}
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-16 transition-all duration-500" />
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

  useFadeIn(headerRef, headerRef, { y: 10 })

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
        <div ref={headerRef} className="max-w-3xl space-y-4 mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.about.capabilities.sectionLabel}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.about.capabilities.title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t.about.capabilities.description}
          </p>
        </div>

        {/* 역량 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
  return (
    <div>
      <HeroSection />
      <VisionMissionSection />
      <CoreCapabilitiesSection />
    </div>
  )
}
