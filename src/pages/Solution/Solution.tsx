// ============================================================================
// Solution Page
// 솔루션 목록 페이지 - 전자전, 화학전, 생물학전 솔루션 개요
// ============================================================================

import { useState, useRef, useLayoutEffect } from "react"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/i18n"
import gsap from "gsap"

// Assets - Posters
import solutionEwImg from "@/assets/images/solution/list-ew-video-poster.webp"
import solutionNcImg from "@/assets/images/solution/list-bw-video-poster.webp"
import solutionCuasImg from "@/assets/images/solution/list-cuas-video-poster.jpg"

// Assets - Videos
import solutionEwVideo from "@/assets/videos/solution/list-ew-video.webm"
import solutionNcVideo from "@/assets/videos/solution/list-bw-video.webm"
import solutionCuasVideo from "@/assets/videos/solution/list-cuas-video.mp4"

// ============================================================================
// 타입 정의
// ============================================================================

type SolutionKey = "electronicWarfare" | "nuclearChemical" | "counterUAS"

interface SolutionItem {
  id: string
  number: string
  key: SolutionKey
  href: string
  poster: string
  video: string
}

// ============================================================================
// 상수 정의
// ============================================================================

/** 솔루션 데이터 목록 */
const SOLUTION_DATA: SolutionItem[] = [
  {
    id: "electronic-warfare",
    number: "01",
    key: "electronicWarfare",
    href: "/solution/ew",
    poster: solutionEwImg,
    video: solutionEwVideo,
  },
  {
    id: "nuclear-chemical",
    number: "02",
    key: "nuclearChemical",
    href: "/solution/nc",
    poster: solutionNcImg,
    video: solutionNcVideo,
  },
  {
    id: "counter-uas",
    number: "03",
    key: "counterUAS",
    href: "/solution/c-uas",
    poster: solutionCuasImg,
    video: solutionCuasVideo,
  },
]

// ============================================================================
// Hero Section - 페이지 헤더
// ============================================================================

function HeroSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // 왼쪽 악센트 라인 애니메이션
      tl.fromTo(
        ".hero-accent-line",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.8 }
      )

      // 텍스트 요소들 stagger 애니메이션
      tl.fromTo(
        ".hero-animate",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
        "-=0.4"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={contentRef} className="max-w-3xl relative">
          {/* 왼쪽 악센트 라인 */}
          <div className="hero-accent-line absolute -left-4 lg:-left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />

          <p className="hero-animate text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.solution.label}
          </p>
          <h1 className="hero-animate mt-2 text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {t.solution.title}
          </h1>
          <p className="hero-animate mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.solution.description}
          </p>

          {/* 하단 장식 요소 */}
          {/* <div className="hero-animate mt-10 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">
              Explore
            </span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Desktop Solution Card - 데스크탑 솔루션 카드 컴포넌트
// ============================================================================

interface DesktopSolutionCardProps {
  solution: SolutionItem
  index: number
  isHovered: boolean
  isAnyHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  videoRef: (el: HTMLVideoElement | null) => void
  learnMoreText: string
  title: string
  summary: string
}

function DesktopSolutionCard({
  solution,
  isHovered,
  isAnyHovered,
  onMouseEnter,
  onMouseLeave,
  videoRef,
  learnMoreText,
  title,
  summary,
}: DesktopSolutionCardProps) {
  return (
    <a
      href={solution.href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden rounded-2xl transition-all duration-700 ease-out cursor-pointer group"
      style={{
        flexBasis: isHovered ? "60%" : isAnyHovered ? "20%" : "33.333%",
        zIndex: isHovered ? 10 : 1,
        margin: isHovered ? "-4px -4px" : isAnyHovered ? "-4px -4px" : "0",
        boxShadow: isHovered
          ? "0 0 80px rgba(255,255,255,0.2), 0 0 120px rgba(59,130,246,0.15), inset 0 0 60px rgba(0,0,0,0.3)"
          : "0 8px 32px rgba(0,0,0,0.4), inset 0 0 60px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glowing Border */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none z-10"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(59,130,246,0.1) 100%)",
          padding: "1px",
          opacity: isHovered ? 1 : 0.3,
        }}
      />
      <div
        className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none z-10 transition-opacity duration-700"
        style={{ opacity: isHovered ? 1 : 0.5 }}
      />

      {/* Background Video with Cinematic Effect */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          filter: isHovered
            ? "brightness(1.1) saturate(1.2)"
            : "brightness(0.9) saturate(0.9)",
        }}
        muted
        playsInline
        loop
        preload="metadata"
        poster={solution.poster}
      >
        <source src={solution.video} type="video/mp4" />
      </video>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.7) 100%)",
          opacity: isHovered ? 0.6 : 1,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />

      {/* Dimming Overlay for non-hovered cards */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          opacity: isAnyHovered && !isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between z-20">
        {/* Number */}
        <span className="text-6xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500">
          {solution.number}
        </span>

        {/* Bottom Content with Glassmorphism */}
        <div
          className="rounded-xl p-4 -mx-4 -mb-4 transition-all duration-500"
          style={{
            background: isHovered
              ? "rgba(255,255,255,0.05)"
              : "transparent",
            backdropFilter: isHovered ? "blur(12px)" : "none",
            border: isHovered ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {title}
          </h2>
          <p
            className="text-gray-300 transition-all duration-500 overflow-hidden"
            style={{
              maxHeight: isHovered ? "100px" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
          >
            {summary}
          </p>
          <div className="flex items-center gap-2 mt-4 text-white/80 group-hover:text-white transition-all duration-300">
            <span className="text-sm font-medium">{learnMoreText}</span>
            <ArrowRight
              className="h-4 w-4 transition-all duration-500 group-hover:translate-x-2"
              style={{
                filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
              }}
            />
          </div>
        </div>
      </div>
    </a>
  )
}

// ============================================================================
// Desktop Solution List - 데스크탑 솔루션 목록
// ============================================================================

function DesktopSolutionList() {
  const { t } = useLocale()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    videoRefs.current[index]?.play()
  }

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null)
    videoRefs.current[index]?.pause()
  }

  return (
    <section className="pb-24 lg:pb-32 hidden lg:block">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex gap-6 h-[520px]">
          {SOLUTION_DATA.map((solution, index) => (
            <DesktopSolutionCard
              key={solution.id}
              solution={solution}
              index={index}
              isHovered={hoveredIndex === index}
              isAnyHovered={hoveredIndex !== null}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              videoRef={(el) => {
                videoRefs.current[index] = el
              }}
              learnMoreText={t.solution.learnMore}
              title={t.solution[solution.key].title}
              summary={t.solution[solution.key].summary}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Mobile Solution Card - 모바일 솔루션 카드 컴포넌트
// ============================================================================

interface MobileSolutionCardProps {
  solution: SolutionItem
  learnMoreText: string
  title: string
  summary: string
}

function MobileSolutionCard({
  solution,
  learnMoreText,
  title,
  summary,
}: MobileSolutionCardProps) {
  return (
    <a
      href={solution.href}
      className="relative h-[400px] overflow-hidden rounded-2xl group active:scale-[0.98] transition-transform duration-300"
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 0 60px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glowing Border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(59,130,246,0.1) 100%)",
          padding: "1px",
        }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none z-10" />

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.95) saturate(1.1)",
        }}
        muted
        playsInline
        loop
        autoPlay
        poster={solution.poster}
      >
        <source src={solution.video} type="video/mp4" />
      </video>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between z-20">
        {/* Number */}
        <span className="text-5xl font-mono font-bold text-white/20">
          {solution.number}
        </span>

        {/* Bottom Content with Glassmorphism */}
        <div
          className="rounded-xl p-4 -mx-4 -mb-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {title}
          </h2>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{summary}</p>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-sm font-medium">{learnMoreText}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </a>
  )
}

// ============================================================================
// Mobile Solution List - 모바일/태블릿 솔루션 목록
// ============================================================================

function MobileSolutionList() {
  const { t } = useLocale()

  return (
    <section className="pb-24 lg:hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6">
          {SOLUTION_DATA.map((solution) => (
            <MobileSolutionCard
              key={solution.id}
              solution={solution}
              learnMoreText={t.solution.learnMore}
              title={t.solution[solution.key].title}
              summary={t.solution[solution.key].summary}
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

export default function SolutionPage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <DesktopSolutionList />
      <MobileSolutionList />
    </div>
  )
}
