// ============================================================================
// Contact Page
// 연락처 페이지 - 회사 위치, 연락처, 채용 정보 (GSAP 애니메이션)
// ============================================================================

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useLocale } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

// Assets
import icoHan from "@/assets/images/contact/ico_han.png"
import icoPdf from "@/assets/images/contact/ico_pdf.png"
import icoWord from "@/assets/images/contact/ico_word.png"

// ============================================================================
// 상수 정의
// ============================================================================

/** 입사지원서 파일 목록 (career.docs 순서와 매칭) */
const APPLICATION_DOC_FILES = [
  { href: "files/ebt-recruit.hwp", icon: icoHan, alt: "HWP icon" },
  { href: "files/ebt-recruit.docx", icon: icoWord, alt: "Word icon" },
  { href: "files/ebt-recruit.pdf", icon: icoPdf, alt: "PDF icon" },
] as const

// ============================================================================
// Hero Section - 페이지 헤더
// ============================================================================

function HeroSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
      )

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.15 }
      )

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.3 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            ref={labelRef}
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {t.contact.hero.sectionLabel}
          </p>
          <h1
            ref={titleRef}
            className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
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
      </div>
    </section>
  )
}

// ============================================================================
// Location Section - 회사 위치 및 연락처
// ============================================================================

function LocationSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: mapRef.current,
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
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.contact.location.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {t.contact.location.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.contact.location.description}
          </p>
        </div>

        {/* 연락처 정보 - 가로 3열 */}
        <div ref={infoRef} className="mb-10">
          <CompanyInfo />
        </div>

        {/* 지도 */}
        <div
          ref={mapRef}
          className="rounded-xl overflow-hidden border border-border bg-background hover:border-accent/30 transition-colors duration-300"
        >
          <iframe
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
      </div>
    </section>
  )
}

// ============================================================================
// Company Info - 회사 정보 컴포넌트
// ============================================================================

function CompanyInfo() {
  const { t } = useLocale()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 주소 */}
      <a
        href="https://maps.google.com/?q=경기도+성남시+분당구+판교로228번길+15"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {t.contact.location.addressLabel}
            </p>
            <p className="text-foreground leading-relaxed text-sm">
              {t.contact.location.address}
            </p>
          </div>
        </div>
      </a>

      {/* 전화번호 */}
      <a
        href={`tel:${t.contact.location.phone}`}
        className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {t.contact.location.phoneLabel}
            </p>
            <p className="text-foreground text-sm font-medium">
              {t.contact.location.phone}
            </p>
          </div>
        </div>
      </a>

      {/* 이메일 */}
      <a
        href={`mailto:${t.contact.location.email}`}
        className="group relative overflow-hidden rounded-xl bg-card p-6 border border-border hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {t.contact.location.emailLabel}
            </p>
            <p className="text-foreground text-sm font-medium">
              {t.contact.location.email}
            </p>
          </div>
        </div>
      </a>
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
      className="group flex flex-col gap-3 rounded-lg border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-muted p-3 text-muted-foreground group-hover:text-foreground">
          <img src={icon} alt={iconAlt} className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <span className="text-sm text-accent group-hover:text-foreground transition-colors">
        {downloadText}
      </span>
    </a>
  )
}

// ============================================================================
// Career Section - 채용 정보
// ============================================================================

function CareerSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="gap-10 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.contact.career.sectionLabel}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
              {t.contact.career.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.contact.career.description}
            </p>
          </div>
        </div>

        {/* 입사지원서 다운로드 */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-foreground">
            {t.contact.career.applicationDocs}
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <p className="mt-8 text-sm text-muted-foreground">
          {t.contact.career.resumeText}{" "}
          <a
            href="mailto:info@ebtech.kr"
            className="text-accent hover:text-foreground transition-colors"
          >
            info@ebtech.kr
          </a>
        </p>
      </div>
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export default function ContactPage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <LocationSection />
      <CareerSection />
    </div>
  )
}
