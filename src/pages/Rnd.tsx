// ============================================================================
// R&D Page
// 연구개발 페이지 - 핵심 기술, 연구 분야, 개발 프로세스
// ============================================================================

import { Zap, Target, Settings } from "lucide-react"
import { useLocale } from "@/lib/i18n"

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

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
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
        <div className="mt-16 aspect-video w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
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
    <div className="p-8 bg-background border border-border hover:-translate-y-1 transition-transform">
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

  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
    <div className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:-translate-y-1 transition-transform">
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

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 border-t border-border bg-cover bg-center"
      style={{ backgroundImage: `url(${researchBgImg})` }}
    >
      <div className="absolute inset-0 bg-background/20 light:bg-background/75 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      className="relative transition-all duration-300 ease-out
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

  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">
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

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
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
          <div className="aspect-[4/3] w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
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

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
