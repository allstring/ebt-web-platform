// ============================================================================
// About Page
// 회사 소개 페이지 - docx 문서 기반 완전 재설계 (GSAP 애니메이션)
// ============================================================================

import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Radio from "lucide-react/dist/esm/icons/radio"
import Plane from "lucide-react/dist/esm/icons/plane"
import FlaskConical from "lucide-react/dist/esm/icons/flask-conical"
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right"
import Mail from "lucide-react/dist/esm/icons/mail"
import Phone from "lucide-react/dist/esm/icons/phone"
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"
import {
  useHeroAnimation,
  useFadeIn,
  useSlideIn,
  useStaggerAnimation,
} from "@/hooks/use-gsap-animation"

// Assets
import heroBgImg from "@/assets/images/about/hero-bg.webp"
import capabilityBgImg from "@/assets/images/about/capability-bg.webp"

// ============================================================================
// Constants
// ============================================================================

const CAPABILITY_ICONS = [Radio, Plane, FlaskConical] as const

// ============================================================================
// Hero Section - 메인 히어로 영역
// ============================================================================

function HeroSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLDivElement>(null)

  useHeroAnimation(sectionRef, {
    label: labelRef,
    title: titleRef,
    description: descRef,
    extra: taglineRef,
  })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* 장식적 그라데이션 */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label - 회사 소개 (크게) */}
          <h2
            ref={labelRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {t.about.hero.sectionLabel}
          </h2>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-sm md:text-base font-medium text-accent mb-8 tracking-wide uppercase"
          >
            {t.about.hero.tagline}
          </p>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            {t.about.hero.title}
            <br />
            <span className="text-accent">{t.about.hero.titleAccent}</span>
          </h1>

          {/* Description - 한 줄로 합침 */}
          <div ref={descRef} className="mt-8 md:mt-10 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.about.hero.description}{" "}
              <span className="text-foreground/80 font-medium">{t.about.hero.subtitle}</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 md:mt-20 flex items-center justify-center gap-2 text-muted-foreground animate-pulse">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Value Proposition Item (미니멀 리스트 스타일)
// ============================================================================

interface ValuePropItemProps {
  title: string
  description: string
  index: number
}

function ValuePropItem({ title, description, index }: ValuePropItemProps) {
  return (
    <div className="value-item group relative py-8 md:py-10 border-b border-border/50 last:border-b-0 transition-all duration-300 hover:bg-accent/[0.02]">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        {/* Number */}
        <div className="flex-shrink-0">
          <span className="text-5xl md:text-6xl lg:text-7xl font-extralight text-muted-foreground/30 group-hover:text-accent transition-colors duration-500 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1 md:pt-3">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Hover Indicator */}
        <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-[2px] bg-accent" />
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Value Propositions Section (미니멀 리스트 레이아웃)
// ============================================================================

function ValuePropsSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useStaggerAnimation(listRef, ".value-item", { y: 15, stagger: 0.15, duration: 0.3 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Value Items List */}
        <div ref={listRef} className="border-t border-border/50">
          {t.about.valueProps.items.map((item, index) => (
            <ValuePropItem
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Capability Card (기존 카드 스타일 + 링크)
// ============================================================================

const CAPABILITY_LINKS = ["/solution/ew", "/solution/c-uas", "/solution/nc"] as const

interface CapabilityCardProps {
  title: string
  description: string
  index: number
}

function CapabilityCard({ title, description, index }: CapabilityCardProps) {
  const Icon = CAPABILITY_ICONS[index]
  const link = CAPABILITY_LINKS[index]

  return (
    <Link
      to={link}
      className="capability-card group relative block p-8 md:p-10 bg-card/60 backdrop-blur-sm border border-border rounded-2xl transition-all duration-500 hover:bg-card/80 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
    >
      {/* 배경 글로우 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Icon Circle */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-accent" />
        </div>

        {/* Number */}
        <div className="absolute top-8 right-8 text-6xl md:text-7xl font-extralight text-muted-foreground/10 group-hover:text-accent/20 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Arrow Link Indicator */}
        <div className="flex items-center gap-2 text-muted-foreground/50 group-hover:text-accent transition-all duration-300">
          <span className="text-sm font-medium">자세히 보기</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  )
}

// ============================================================================
// Core Capabilities Section
// ============================================================================

function CapabilitiesSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useFadeIn(headerRef, sectionRef, { y: 30 })
  useStaggerAnimation(cardsRef, ".capability-card", { y: 20, stagger: 0.12, duration: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${capabilityBgImg})` }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-background/90 light:bg-background/95" />

      {/* 장식 요소 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {t.about.capabilities.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t.about.capabilities.title}
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.about.capabilities.items.map((item, index) => (
            <CapabilityCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// System Integration Section
// ============================================================================

function SystemSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useFadeIn(headerRef, sectionRef, { y: 40 })
  useStaggerAnimation(stepsRef, ".step-item", { y: 30, stagger: 0.12 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text Content */}
          <div ref={headerRef} className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {t.about.systemSection.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.about.systemSection.description}
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              {t.about.systemSection.highlight}
            </p>

            {/* Interactive Step Labels */}
            <p className="text-lg leading-relaxed mb-6">
              {t.about.systemSection.stepLabels.map((label, index) => (
                <span key={label}>
                  <span
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      cursor-pointer transition-all duration-300 inline-block
                      ${hoveredIndex === index
                        ? "text-accent font-semibold scale-105"
                        : hoveredIndex !== null
                          ? "text-muted-foreground/50 scale-95"
                          : "text-foreground hover:text-accent"
                      }
                    `}
                  >
                    {label}
                  </span>
                  {index < t.about.systemSection.stepLabels.length - 1 && (
                    <span className="text-muted-foreground">, </span>
                  )}
                </span>
              ))}
            </p>

            <p className="text-base font-medium text-accent">
              {t.about.systemSection.conclusion}
            </p>
          </div>

          {/* Right: Process Steps */}
          <div ref={stepsRef} className="relative">
            <div className="space-y-6">
              {t.about.systemSection.steps.map((step, index) => {
                const isHighlighted = hoveredIndex === index
                const isDimmed = hoveredIndex !== null && hoveredIndex !== index

                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      step-item flex items-start gap-4 cursor-pointer
                      transition-all duration-300 ease-out
                      ${isDimmed ? "opacity-40" : ""}
                    `}
                  >
                    {/* Step Number */}
                    <span className={`
                      text-2xl font-bold transition-all duration-300 flex-shrink-0
                      ${isHighlighted
                        ? "text-accent scale-110"
                        : "text-muted-foreground/50"
                      }
                    `}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Step Content */}
                    <div>
                      <h3 className={`
                        text-lg font-semibold mb-1 transition-all duration-300
                        ${isHighlighted
                          ? "text-accent scale-[1.02] origin-left"
                          : "text-foreground"
                        }
                      `}>
                        {step.title}
                      </h3>
                      <p className={`
                        text-sm transition-all duration-300
                        ${isHighlighted ? "text-foreground" : "text-muted-foreground"}
                      `}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Scalability Section
// ============================================================================

function ScalabilitySection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useSlideIn(contentRef, sectionRef, { direction: "up", distance: 60 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card/30 border-t border-border relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {/* {t.about.scalability.sectionLabel} */}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
            {t.about.scalability.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t.about.scalability.description}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            {t.about.scalability.keyword}
          </p>
          <p className="whitespace-pre-line text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            {t.about.scalability.subtitle}
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Contact CTA Section
// ============================================================================

function ContactSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useFadeIn(contentRef, sectionRef, { y: 40 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div ref={contentRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-background via-background to-accent/5 border border-border overflow-hidden">
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                {t.about.contact.sectionLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.about.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.about.contact.description}
              </p>
            </div>

            {/* Right: Contact Info & CTA */}
            <div className="space-y-6">
              {/* Contact Items */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${t.about.contact.email}`}
                  className="flex items-center gap-3 px-5 py-4 bg-card/50 border border-border rounded-xl hover:border-accent/50 hover:bg-card transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-foreground group-hover:text-accent transition-colors duration-200">
                    {t.about.contact.email}
                  </span>
                </a>
                <a
                  href={`tel:${t.about.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 px-5 py-4 bg-card/50 border border-border rounded-xl hover:border-accent/50 hover:bg-card transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-foreground group-hover:text-accent transition-colors duration-200">
                    {t.about.contact.phone}
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Link to="/contact">
                  {t.about.contact.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
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
      <ValuePropsSection />
      <CapabilitiesSection />
      <SystemSection />
      <ScalabilitySection />
      <ContactSection />
    </div>
  )
}
