// ============================================================================
// R&D Page
// 연구개발 페이지 - 핵심 기술, 연구 분야, 개발 프로세스 (GSAP 애니메이션)
// ============================================================================

import { useEffect, useRef, useLayoutEffect } from "react"
import { Zap, Target, Settings } from "lucide-react"
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
import heroMainImg from "@/assets/images/rnd/hero-main.webp"
import researchBgImg from "@/assets/images/rnd/research-bg.webp"
import teamMainImg from "@/assets/images/rnd/team-main.webp"

// ============================================================================
// 상수 정의
// ============================================================================

/** Core Technologies 섹션 아이콘 (items 순서와 매칭) */
const CORE_TECH_ICONS = [Zap, Settings, Target] as const

// ============================================================================
// Hero Section - R&D 개요
// ============================================================================

function HeroSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 텍스트 영역 등장
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )

      // 이미지 영역 등장
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={textRef} className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.rnd.hero.sectionLabel}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {t.rnd.hero.title1}
            <br className="hidden md:block" /> {t.rnd.hero.title2}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.rnd.hero.description}
          </p>
        </div>

        {/* Hero Image */}
        <div
          ref={imageRef}
          className="mt-16 aspect-video w-full bg-secondary/50 border border-border rounded-lg overflow-hidden"
        >
          <img
            src={heroMainImg}
            alt={t.rnd.hero.imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Core Tech Card - 핵심 기술 카드 컴포넌트
// ============================================================================

interface CoreTechCardProps {
  name: string
  description: string
  index: number
}

function CoreTechCard({ name, description, index }: CoreTechCardProps) {
  const Icon = CORE_TECH_ICONS[index]

  return (
    <div className="core-tech-card p-8 bg-background border border-border hover:-translate-y-1 transition-transform">
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <span className="text-5xl font-light text-muted-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-lg font-medium text-foreground">{name}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// ============================================================================
// Core Technologies Section - 핵심 기술
// ============================================================================

function CoreTechnologiesSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        ".core-tech-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.rnd.coreTechnologies.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.rnd.coreTechnologies.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.coreTechnologies.description}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.rnd.coreTechnologies.items.map((tech, index) => (
            <CoreTechCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Research Area Card - 연구 분야 카드 컴포넌트
// ============================================================================

interface ResearchAreaCardProps {
  title: string
  description: string
  index: number
}

function ResearchAreaCard({ title, description, index }: ResearchAreaCardProps) {
  return (
    <div className="research-area-card p-6 bg-card/80 backdrop-blur-sm border border-border hover:-translate-y-1 transition-transform">
      <span className="text-4xl font-light text-muted-foreground/50">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-lg font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// ============================================================================
// Research Areas Section - 연구 분야
// ============================================================================

function ResearchAreasSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        ".research-area-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32 border-t border-border bg-cover bg-center"
      style={{ backgroundImage: `url(${researchBgImg})` }}
    >
      <div className="absolute inset-0 bg-background/20 light:bg-background/75 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.rnd.researchAreas.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.rnd.researchAreas.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.researchAreas.description}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.rnd.researchAreas.items.map((area, index) => (
            <ResearchAreaCard
              key={area.title}
              title={area.title}
              description={area.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Process Step Card - 개발 프로세스 단계 카드 컴포넌트
// ============================================================================

interface ProcessStepCardProps {
  phase: string
  description: string
  index: number
  isLast: boolean
}

function ProcessStepCard({ phase, description, index, isLast }: ProcessStepCardProps) {
  return (
    <div
      className="process-step-card relative transition-all duration-300 ease-out
                group-hover:opacity-40 group-hover:scale-95
                hover:!opacity-100 hover:!scale-105 hover:z-10"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm font-mono text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <div className="hidden lg:block flex-1 h-px bg-border" />
        )}
      </div>
      <h3 className="text-lg font-medium text-foreground">{phase}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// ============================================================================
// Development Process Section - 개발 프로세스
// ============================================================================

function DevelopmentProcessSection() {
  const { t } = useLocale()
  const items = t.rnd.developmentProcess.items
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        ".process-step-card",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.rnd.developmentProcess.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.rnd.developmentProcess.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.developmentProcess.description}
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">
          {items.map((step, index) => (
            <ProcessStepCard
              key={step.phase}
              phase={step.phase}
              description={step.description}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Team Section - R&D 팀 & 시설
// ============================================================================

function TeamSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div ref={textRef}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.rnd.team.sectionLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {t.rnd.team.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.rnd.team.description1}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.rnd.team.description2}
            </p>
          </div>

          {/* Team Image */}
          <div
            ref={imageRef}
            className="aspect-[4/3] w-full bg-secondary/50 border border-border rounded-lg overflow-hidden"
          >
            <img
              src={teamMainImg}
              alt={t.rnd.team.imageAlt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Commitment Section - R&D 비전
// ============================================================================

function CommitmentSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.rnd.commitment.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.rnd.commitment.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.rnd.commitment.description1}
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {t.rnd.commitment.description2}
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export default function RndPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollSnap(containerRef)

  return (
    <div ref={containerRef} className="pt-16">
      <section className="snap-section">
        <HeroSection />
      </section>
      <section className="snap-section">
        <CoreTechnologiesSection />
      </section>
      <section className="snap-section">
        <ResearchAreasSection />
      </section>
      <section className="snap-section">
        <DevelopmentProcessSection />
      </section>
      <section className="snap-section">
        <TeamSection />
      </section>
      <section className="snap-section">
        <CommitmentSection />
      </section>
    </div>
  )
}
