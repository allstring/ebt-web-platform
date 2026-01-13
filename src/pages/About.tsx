// ============================================================================
// About Page
// 회사 소개 페이지 - 비전, 미션, 핵심 역량
// ============================================================================

import { useLocale } from "@/lib/i18n"

// Assets
import heroBgImg from "@/assets/images/about/hero-bg.webp"
import capabilityBgImg from "@/assets/images/about/capability-bg.webp"

// ============================================================================
// Hero Section - 회사 개요
// ============================================================================

function HeroSection() {
  const { t } = useLocale()

  return (
    <section
      className="relative overflow-hidden py-24 lg:pt-48 lg:pb-18 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-background/80 light:bg-background/90 transition-colors duration-200" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* 왼쪽: 회사 소개 텍스트 */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.hero.sectionLabel}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {t.about.hero.title1}
              <br className="hidden md:block" /> {t.about.hero.title2}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.about.hero.description1}
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {t.about.hero.description2}
            </p>
          </div>

          {/* 오른쪽: Why Choose Us 카드 */}
          <WhyChooseUsCards />
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

  return (
    <div className="space-y-6">
      {/* 메인 카드 */}
      <div className="p-6 bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
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
        {t.about.whyChoose.cards.map((card, index) => (
          <div
            key={card.title}
            className="p-6 bg-card border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
            style={{ animationDelay: `${index * 100}ms` }}
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

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Vision */}
          <div className="group">
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
          <div className="group">
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
  return (
    <div className="group p-6 bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
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

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${capabilityBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-background/85 light:bg-background/90 transition-colors duration-200" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="max-w-3xl space-y-4">
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
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <CoreCapabilitiesSection />
    </>
  )
}
