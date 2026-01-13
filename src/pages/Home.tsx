// ============================================================================
// Home Page
// 메인 랜딩 페이지 - 회사 소개 및 솔루션 개요
// ============================================================================

import { Link } from "react-router-dom"
import { ArrowRight, Settings, Shield, Zap, Target, Users, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"

// Assets
import videoPosterImg from "@/assets/images/home/hero-video-poster.webp"
import heroMainImg from "@/assets/images/home/hero-main.webp"

// ============================================================================
// 상수 정의
// ============================================================================

/** 솔루션 카드 링크 (solutions.items 순서와 매칭) */
const SOLUTION_HREFS = [
  "/solution/electronic-warfare",
  "/solution/chemical-warfare",
  "/solution/biological-warfare",
] as const

/** Capabilities 섹션 아이콘 (capabilities.items 순서와 매칭) */
const CAPABILITY_ICONS = [Settings, Shield, Zap, Target, Users, Wrench] as const

// ============================================================================
// Hero Section - 메인 비주얼 영역
// ============================================================================

function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* 배경 비디오 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster={videoPosterImg}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="src/assets/videos/home/hero-video.webm" type="video/mp4" />
      </video>

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-background/40 light:bg-background/80" />

      {/* 콘텐츠 */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance max-w-4xl mx-auto animate-fade-in">
          {t.home.hero.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
          {t.home.hero.description1}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
          {t.home.hero.description2}
        </p>

        {/* CTA 버튼 */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
          >
            <Link to="/solution">
              {t.home.hero.exploreSolutions}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary bg-transparent transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">{t.home.hero.contactUs}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Featured Product Section - 주력 제품 소개
// ============================================================================

function FeaturedProductSection() {
  const { t } = useLocale()

  return (
    <div className="mt-16 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 lg:p-12 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors duration-300">
        {/* 텍스트 영역 */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.home.featured.label}
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
              className="border-border hover:bg-secondary bg-transparent group"
            >
              <Link to="/solution">
                {t.home.featured.viewSpecs}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="relative aspect-[4/3] bg-secondary/50 border border-border rounded-lg overflow-hidden group">
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
      className="group preserve-text-rendering relative p-8 bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-accent/30"
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

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="max-w-2xl">
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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

  return (
    <div
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

  return (
    <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="max-w-3xl space-y-4 mb-20 text-center mx-auto">
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

  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
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
