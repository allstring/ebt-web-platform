// ============================================================================
// Home Page
// 메인 랜딩 페이지 - 회사 소개 및 솔루션 개요 (GSAP 애니메이션)
// ============================================================================

import { useEffect, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Settings, Shield, Zap, Target, Users, Wrench } from "lucide-react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"
import DefenseRadarHero from "@/components/defense-radar-hero"

// Assets
import heroVideo from "@/assets/videos/home/hero-video.webm"
import heroMainImg from "@/assets/images/home/hero-main.webp"

gsap.registerPlugin(ScrollTrigger)

// ============================================================================
// 상수 정의
// ============================================================================

/** 솔루션 카드 링크 (solutions.items 순서와 매칭) */
const SOLUTION_HREFS = [
  "/solution/ew",
  "/solution/nc",
  "/solution/c-uas",
] as const

/** Capabilities 섹션 아이콘 (capabilities.items 순서와 매칭) */
const CAPABILITY_ICONS = [Settings, Shield, Zap, Target, Users, Wrench] as const

// ============================================================================
// Hero Section - DefenseRadarHero를 활용한 메인 비주얼 영역
// ============================================================================

function HeroSection() {
  const { t } = useLocale()

  // 솔루션과 연결된 레이더 타겟 생성 (로컬라이제이션 데이터 활용)
  const radarTargets = useMemo(() => {
    const solutionTargets = t.home.solutions.items.map((item, index) => ({
      id: index + 1,
      label: item.label,
      description: item.description,
      link: SOLUTION_HREFS[index] ?? "/solution",
    }))

    // 마지막에 RESOLVE (featured) 추가
    return [
      ...solutionTargets,
      {
        id: solutionTargets.length + 1,
        label: t.home.featured.label,
        description: t.home.featured.description,
        link: "/solution",
      },
    ]
  }, [t])

  return (
    <DefenseRadarHero
      targets={radarTargets}
      strings={t.home.radar}
      title="EBT"
      titleAccent="TECHNOLOGY"
      subtitle={`${t.home.hero.description1} ${t.home.hero.description2}`}
      videoSrc={heroVideo}
    />
  )
}

// ============================================================================
// Featured Product Section - 주력 제품 소개
// ============================================================================

function FeaturedProductSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 텍스트 영역 등장
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
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

      // 이미지 영역 등장
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
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
    <div ref={sectionRef} className="mt-16 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 lg:p-12 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors duration-300">
        {/* 텍스트 영역 */}
        <div ref={textRef}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.home.featured.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.home.featured.title}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t.home.featured.description}
          </p>

          {/* 기능 목록 */}
          <ul className="mt-8 space-y-3">
            {t.home.featured.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              className="border-border group"
            >
              <Link to="/solution">
                {t.home.featured.viewSpecs}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div
          ref={imageRef}
          className="relative aspect-[4/3] bg-secondary/50 border border-border rounded-lg overflow-hidden group"
        >
          <img
            src={heroMainImg}
            alt={t.home.featured.imageAlt}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Solution Card - 솔루션 카드 컴포넌트
// ============================================================================

interface SolutionCardProps {
  title: string
  description: string
  href: string
  index: number
  learnMoreText: string
}

function SolutionCard({ title, description, href, index, learnMoreText }: SolutionCardProps) {
  return (
    <Link
      to={href}
      className="solution-card group preserve-text-rendering relative p-8 bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-accent/30"
    >
      {/* 인덱스 번호 */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl font-light text-muted-foreground/50 group-hover:text-accent/50 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* 제목 */}
      <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* 설명 */}
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Learn More 링크 */}
      <div className="mt-6 flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
        <span className="mr-2">{learnMoreText}</span>
        <ArrowRight className="h-3 w-3 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </Link>
  )
}

// ============================================================================
// Solutions Section - 솔루션 목록
// ============================================================================

function SolutionsSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 섹션 헤더 등장
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      // 솔루션 카드 순차 등장
      gsap.fromTo(
        ".solution-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.home.solutions.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.home.solutions.sectionTitle}
          </h2>
        </div>

        {/* 주력 제품 */}
        <FeaturedProductSection />

        {/* 솔루션 카드 그리드 */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.home.solutions.items.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              href={SOLUTION_HREFS[index]}
              index={index}
              learnMoreText={t.home.solutions.learnMore}
            />
          ))}
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
  isEven: boolean
}

function CapabilityCard({ title, description, index, isEven }: CapabilityCardProps) {
  const Icon = CAPABILITY_ICONS[index]
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: isEven ? -80 : 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [isEven])

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* 아이콘 & 번호 영역 */}
      <div className="flex-shrink-0 w-full lg:w-1/3">
        <div className="relative">
          {/* 배경 블러 효과 */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-[filter] duration-500" />

          <div className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl group-hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              {/* 아이콘 */}
              <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-8 h-8 text-accent" />
              </div>

              {/* 번호 */}
              <span className="text-6xl lg:text-7xl font-light text-muted-foreground/30 group-hover:text-accent/30 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 w-full lg:w-2/3">
        <div className="h-full flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Hover 시 나타나는 액센트 라인 */}
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Capabilities Section - 회사 역량 소개
// ============================================================================

function CapabilitiesSection() {
  const { t } = useLocale()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-3xl space-y-4 mb-20 text-center mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.home.capabilities.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {t.home.capabilities.sectionTitle}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t.home.capabilities.sectionDescription}
          </p>
        </div>

        {/* 역량 카드 목록 */}
        <div className="space-y-8 lg:space-y-12">
          {t.home.capabilities.items.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA Section - Contact 유도 영역
// ============================================================================

function CTASection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div ref={contentRef} className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {t.home.cta.title}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {t.home.cta.description}
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              {t.home.cta.contactUs}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <CTASection />
    </>
  )
}
