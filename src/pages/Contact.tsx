// ============================================================================
// Contact Page
// 연락처 페이지 - 회사 위치, 연락처, 채용 정보 (GSAP 애니메이션)
// ============================================================================

import { useRef } from "react"
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right"
import MapPin from "lucide-react/dist/esm/icons/map-pin"
import Phone from "lucide-react/dist/esm/icons/phone"
import Mail from "lucide-react/dist/esm/icons/mail"

import { useLocale } from "@/lib/i18n"
import {
  useHeroAnimation,
  useFadeIn,
  useStaggerAnimation,
} from "@/hooks/use-gsap-animation"

// Assets
import icoHan from "@/assets/images/contact/ico_han.png"
import icoPdf from "@/assets/images/contact/ico_pdf.png"
import icoWord from "@/assets/images/contact/ico_word.png"

// ============================================================================
// Constants
// ============================================================================

/** 입사지원서 파일 목록 (career.docs 순서와 매칭) */
const APPLICATION_DOC_FILES = [
  { href: "files/ebt-recruit.hwp", icon: icoHan, alt: "HWP icon" },
  { href: "files/ebt-recruit.docx", icon: icoWord, alt: "Word icon" },
  { href: "files/ebt-recruit.pdf", icon: icoPdf, alt: "PDF icon" },
] as const

// ============================================================================
// Hero & Location Section - 페이지 헤더 + 회사 위치 및 연락처
// ============================================================================

function HeroLocationSection() {
  const { t, locale } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useHeroAnimation(
    sectionRef,
    { label: labelRef, title: titleRef, description: descRef },
    { key: locale }
  )
  useFadeIn(infoRef, sectionRef, { y: 30, delay: 0.3, key: locale })
  useFadeIn(mapRef, sectionRef, { y: 30, delay: 0.4, key: locale })

  return (
    <section ref={sectionRef} className="snap-section min-h-screen flex flex-col justify-center py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <p
            ref={labelRef}
            className="text-xs font-semibold uppercase tracking-wider text-accent"
          >
            {t.contact.hero.sectionLabel}
          </p>
          <h1
            ref={titleRef}
            className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
          >
            {t.contact.hero.title}
          </h1>
          <p
            ref={descRef}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            {t.contact.hero.description}
          </p>
        </div>

        {/* 연락처 정보 - 가로 3열 */}
        <div ref={infoRef} className="mb-10">
          <CompanyInfo />
        </div>

        {/* 지도 */}
        <div
          ref={mapRef}
          className="rounded-2xl overflow-hidden border border-border bg-background hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
        >
          <iframe
            title="EBTech Office Location - Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1584.5348376758109!2d127.09348!3d37.411828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7c7e7677691%3A0x2c4282e124e93f95!2zTEgg7YyQ6rWQ7KCcMu2FjO2BrOuFuOuwuOumrCDquLDsl4XshLHsnqXshLzthLA!5e0!3m2!1sko!2skr!4v1767849458960!5m2!1sko!2skr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full map-iframe"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex items-center gap-2 text-muted-foreground animate-pulse">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Company Info - 회사 정보 컴포넌트
// ============================================================================

function CompanyInfo() {
  const { t } = useLocale()

  const contactItems = [
    {
      href: "https://maps.google.com/?q=경기도+성남시+분당구+판교로228번길+15",
      target: "_blank",
      icon: MapPin,
      label: t.contact.location.addressLabel,
      value: t.contact.location.address,
    },
    {
      href: `tel:${t.contact.location.phone}`,
      icon: Phone,
      label: t.contact.location.phoneLabel,
      value: t.contact.location.phone,
    },
    {
      href: `mailto:${t.contact.location.email}`,
      icon: Mail,
      label: t.contact.location.emailLabel,
      value: t.contact.location.email,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.target}
          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
        >
          {/* 호버 시 배경 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-foreground leading-relaxed text-sm group-hover:text-accent transition-colors duration-300">
                {item.value}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

// ============================================================================
// Application Doc Card - 입사지원서 다운로드 카드 컴포넌트
// ============================================================================

interface ApplicationDocCardProps {
  title: string
  description: string
  href: string
  icon: string
  iconAlt: string
  downloadText: string
}

function ApplicationDocCard({
  title,
  description,
  href,
  icon,
  iconAlt,
  downloadText,
}: ApplicationDocCardProps) {
  return (
    <a
      href={href}
      download
      className="doc-card group relative flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* 호버 시 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="relative flex items-center gap-4">
        <div className="rounded-xl bg-muted p-3 group-hover:bg-accent/10 transition-colors duration-300">
          <img src={icon} alt={iconAlt} className="h-6 w-6" />
        </div>
        <div>
          <p className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <span className="text-sm text-accent group-hover:text-foreground transition-colors duration-300">
        {downloadText}
      </span>
    </a>
  )
}

// ============================================================================
// Career Section - 채용 정보
// ============================================================================

function CareerSection() {
  const { t, locale } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)

  useFadeIn(headerRef, sectionRef, { y: 30, key: locale })
  useStaggerAnimation(docsRef, ".doc-card", { y: 30, stagger: 0.1, key: locale })

  return (
    <section ref={sectionRef} className="snap-section min-h-screen flex flex-col justify-center py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.contact.career.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.contact.career.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.contact.career.description}
          </p>
        </div>

        {/* 입사지원서 다운로드 */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-foreground mb-6">
            {t.contact.career.applicationDocs}
          </h3>
          <div ref={docsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.contact.career.docs.map((doc, index) => {
              const file = APPLICATION_DOC_FILES[index]
              return (
                <ApplicationDocCard
                  key={doc.title}
                  title={doc.title}
                  description={doc.description}
                  href={file.href}
                  icon={file.icon}
                  iconAlt={file.alt}
                  downloadText={t.contact.career.download}
                />
              )
            })}
          </div>
        </div>

        {/* 이력서 안내 */}
        <div className="p-6 bg-background rounded-xl border border-border">
          <p className="text-sm text-muted-foreground">
            {t.contact.career.resumeText}{" "}
            <a
              href="mailto:info@ebtech.kr"
              className="text-accent hover:text-foreground transition-colors duration-200 font-medium"
            >
              info@ebtech.kr
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export default function ContactPage() {
  return (
    <>
      <HeroLocationSection />
      <CareerSection />
    </>
  )
}
