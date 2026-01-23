// ============================================================================
// R&D Page
// 연구개발 페이지 - 핵심 기술, 연구 분야, 개발 프로세스 (GSAP 애니메이션)
// ============================================================================

import { useRef } from "react"
import Zap from "lucide-react/dist/esm/icons/zap";
import Target from "lucide-react/dist/esm/icons/target";
import Settings from "lucide-react/dist/esm/icons/settings";

import { useLocale } from "@/lib/i18n"
import {
  useHeroAnimation,
  useFadeIn,
  useStaggerAnimation,
  useDualSlideIn,
} from "@/hooks/use-gsap-animation"

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

  useHeroAnimation(sectionRef, { title: textRef })
  useFadeIn(imageRef, sectionRef, { y: 30, delay: 0.3 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={textRef} className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.rnd.hero.sectionLabel}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
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
          className="mt-16 aspect-video w-full bg-secondary/50 border border-border rounded-2xl overflow-hidden group"
        >
          <img
            src={heroMainImg}
            alt={t.rnd.hero.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
    <div className="core-tech-card group p-8 bg-background border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <span className="text-5xl font-light text-muted-foreground/30 group-hover:text-accent/40 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {name}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-16 transition-all duration-500" />
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

  useFadeIn(headerRef, headerRef, { y: 30 })
  useStaggerAnimation(cardsRef, ".core-tech-card", { y: 40, stagger: 0.12 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.rnd.coreTechnologies.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.rnd.coreTechnologies.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.coreTechnologies.description}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
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
    <div className="research-area-card group p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg">
      <span className="text-4xl font-light text-muted-foreground/30 group-hover:text-accent/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-14 transition-all duration-500" />
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

  useFadeIn(headerRef, headerRef, { y: 30 })
  useStaggerAnimation(cardsRef, ".research-area-card", { y: 30, stagger: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32 border-t border-border bg-cover bg-center"
      style={{ backgroundImage: `url(${researchBgImg})` }}
    >
      <div className="absolute inset-0 bg-background/20 light:bg-background/75 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.rnd.researchAreas.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.rnd.researchAreas.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.researchAreas.description}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      className="process-step-card group relative p-6 bg-card/50 rounded-xl border border-border transition-all duration-300 hover:border-accent/50 hover:bg-card hover:shadow-lg"
    >
      {/* 연결선 */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border group-hover:bg-accent/50 transition-colors duration-300" />
      )}

      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-mono text-sm group-hover:bg-accent group-hover:text-background transition-all duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
        {phase}
      </h3>
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

  useFadeIn(headerRef, headerRef, { y: 30 })
  useStaggerAnimation(stepsRef, ".process-step-card", { x: -20, y: 0, stagger: 0.15 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.rnd.developmentProcess.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.rnd.developmentProcess.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.rnd.developmentProcess.description}
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

  useDualSlideIn(sectionRef, textRef, imageRef, { duration: 0.9 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div ref={textRef}>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t.rnd.team.sectionLabel}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
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
            className="aspect-[4/3] w-full bg-secondary/50 border border-border rounded-2xl overflow-hidden group"
          >
            <img
              src={teamMainImg}
              alt={t.rnd.team.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

  useFadeIn(contentRef, sectionRef, { y: 30 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.rnd.commitment.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
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
  return (
    <div className="pt-16">
      <HeroSection />
      <CoreTechnologiesSection />
      <ResearchAreasSection />
      <DevelopmentProcessSection />
      <TeamSection />
      <CommitmentSection />
    </div>
  )
}
