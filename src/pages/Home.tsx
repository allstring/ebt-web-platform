// ============================================================================
// Home Page
// 메인 랜딩 페이지 - 회사 소개 및 솔루션 개요 (GSAP 애니메이션)
// ============================================================================

import { useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Settings from "lucide-react/dist/esm/icons/settings";
import Shield from "lucide-react/dist/esm/icons/shield";
import Zap from "lucide-react/dist/esm/icons/zap";
import Target from "lucide-react/dist/esm/icons/target";
import Users from "lucide-react/dist/esm/icons/users";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"
import DefenseRadarHero from "@/components/defense-radar-hero"
import {
  useFadeIn,
  useSlideIn,
  useStaggerAnimation,
  // useDualSlideIn,
} from "@/hooks/use-gsap-animation"

// Assets
import heroVideo from "@/assets/videos/home/hero-video.webm"
// import heroMainImg from "@/assets/images/home/hero-main.webp"

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

    return [
      ...solutionTargets,
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

// function FeaturedProductSection() {
//   const { t } = useLocale()
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const textRef = useRef<HTMLDivElement>(null)
//   const imageRef = useRef<HTMLDivElement>(null)

//   useDualSlideIn(sectionRef, textRef, imageRef, { duration: 1 })

//   return (
//     <div ref={sectionRef} className="mt-16 mb-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 bg-card border border-border rounded-2xl hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5">
//         {/* 텍스트 영역 */}
//         <div ref={textRef}>
//           <p className="text-xs font-semibold uppercase tracking-wider text-accent">
//             {t.home.featured.sectionLabel}
//           </p>
//           <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
//             {t.home.featured.title}
//           </h2>
//           <p className="mt-6 text-muted-foreground leading-relaxed">
//             {t.home.featured.description}
//           </p>

//           {/* 기능 목록 */}
//           <ul className="mt-8 space-y-3">
//             {t.home.featured.features.map((feature) => (
//               <li
//                 key={feature}
//                 className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
//               >
//                 <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" aria-hidden="true" />
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-10">
//             <Button
//               asChild
//               variant="outline"
//               className="border-border hover:border-accent group"
//             >
//               <Link to="/solution">
//                 {t.home.featured.viewSpecs}
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//               </Link>
//             </Button>
//           </div>
//         </div>

//         {/* 이미지 영역 */}
//         <div
//           ref={imageRef}
//           className="relative aspect-[4/3] bg-secondary/50 border border-border rounded-xl overflow-hidden group"
//         >
//           <img
//             src={heroMainImg}
//             alt={t.home.featured.imageAlt}
//             className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         </div>
//       </div>
//     </div>
//   )
// }

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
      className="mt-8 solution-card group preserve-text-rendering relative p-8 bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40"
    >
      {/* 호버 시 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* 인덱스 번호 */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-light text-muted-foreground/40 group-hover:text-accent/60 transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* 제목 */}
        <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* 설명 */}
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Learn More 링크 */}
        <div className="mt-6 flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors duration-200">
          <span className="mr-2">{learnMoreText}</span>
          <ArrowRight className="h-4 w-4 transform transition-all duration-300 translate-x-0 group-hover:translate-x-2" />
        </div>
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

  useFadeIn(headerRef, headerRef, { y: 40 })
  useStaggerAnimation(cardsRef, ".solution-card", { y: 60, stagger: 0.15 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.home.solutions.sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
            {t.home.solutions.sectionTitle}
          </h2>
        </div>

        {/* 주력 제품 */}
        {/* <FeaturedProductSection /> */}

        {/* 솔루션 카드 그리드 */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
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

  useSlideIn(cardRef, cardRef, {
    direction: isEven ? "left" : "right",
    distance: 80,
    duration: 0.9,
  })

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
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-[filter] duration-500 opacity-50 group-hover:opacity-100" />

          <div className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/5">
            <div className="flex items-center justify-between mb-6">
              {/* 아이콘 */}
              <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-8 h-8 text-accent" />
              </div>

              {/* 번호 */}
              <span className="text-6xl lg:text-7xl font-light text-muted-foreground/20 group-hover:text-accent/30 transition-colors duration-300">
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
          <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-24 transition-all duration-500" />
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

  useFadeIn(headerRef, headerRef, { y: 40 })

  return (
    <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div ref={headerRef} className="max-w-3xl space-y-4 mb-20 text-center mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {t.home.capabilities.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {t.home.capabilities.sectionTitle}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.home.capabilities.sectionDescription}
          </p>
        </div>

        {/* 역량 카드 목록 */}
        <div className="space-y-12 lg:space-y-16">
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

  useFadeIn(contentRef, sectionRef, { y: 40 })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-card border-t border-border">
      <div ref={contentRef} className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
          {t.home.cta.title}
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          {t.home.cta.description}
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
