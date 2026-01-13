// ============================================================================
// Solution Page
// 솔루션 목록 페이지 - 전자전, 화학전, 생물학전 솔루션 개요
// ============================================================================

import { useState, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/i18n"

// Assets - Posters
import solutionEwImg from "@/assets/images/solution/list-ew-video-poster.webp"
import solutionCwImg from "@/assets/images/solution/list-cw-video-poster.webp"
import solutionBwImg from "@/assets/images/solution/list-bw-video-poster.webp"

// Assets - Videos
import solutionEwVideo from "@/assets/videos/solution/list-ew-video.webm"
import solutionCwVideo from "@/assets/videos/solution/list-cw-video.webm"
import solutionBwVideo from "@/assets/videos/solution/list-bw-video.webm"

// ============================================================================
// 타입 정의
// ============================================================================

type SolutionKey = "electronicWarfare" | "chemicalWarfare" | "biologicalWarfare"

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
    href: "/solution/electronic-warfare",
    poster: solutionEwImg,
    video: solutionEwVideo,
  },
  {
    id: "chemical-warfare",
    number: "02",
    key: "chemicalWarfare",
    href: "/solution/chemical-warfare",
    poster: solutionCwImg,
    video: solutionCwVideo,
  },
  {
    id: "biological-warfare",
    number: "03",
    key: "biologicalWarfare",
    href: "/solution/biological-warfare",
    poster: solutionBwImg,
    video: solutionBwVideo,
  },
]

// ============================================================================
// Hero Section - 페이지 헤더
// ============================================================================

function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.solution.label}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
            {t.solution.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.solution.description}
          </p>
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
      className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur transition-[flex-basis] duration-1500 ease-out cursor-pointer group"
      style={{
        flexBasis: isHovered ? "60%" : isAnyHovered ? "20%" : "33.333%",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
        poster={solution.poster}
      >
        <source src={solution.video} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        {/* Number */}
        <span className="text-6xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500">
          {solution.number}
        </span>

        {/* Bottom Content */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2 transition-transform duration-500 group-hover:translate-y-[-4px]">
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
          <div className="flex items-center gap-2 mt-4 text-white/80 group-hover:text-white transition-colors">
            <span className="text-sm font-medium">{learnMoreText}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
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
      className="relative h-[400px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur group"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        autoPlay
        poster={solution.poster}
      >
        <source src={solution.video} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        <span className="text-5xl font-mono font-bold text-white/20">
          {solution.number}
        </span>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-gray-300 mb-4">{summary}</p>
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
