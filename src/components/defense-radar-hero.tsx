import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Target, Activity } from "lucide-react"
import { gsap } from "gsap"

// ============================================================================
// Types
// ============================================================================

export interface RadarTarget {
  id: number
  label: string
  description: string
  link: string
  angle?: number
  distance?: number
  threat?: "low" | "medium" | "high"
}

export interface RadarStrings {
  systemActive: string
  tracking: string
  scanning: string
  viewDetails: string
}

interface DefenseRadarHeroProps {
  targets: RadarTarget[]
  strings: RadarStrings
  title: string
  titleAccent: string
  subtitle: string
  className?: string
  videoSrc?: string
}

// ============================================================================
// Utils
// ============================================================================

const THEME = {
  primary: "var(--accent)",
  grid: "var(--border)",
  text: "var(--muted-foreground)",
}

const polarToCartesian = (angle: number, distance: number) => {
  const rad = (angle - 90) * (Math.PI / 180)
  return { x: 50 + distance * Math.cos(rad), y: 50 + distance * Math.sin(rad) }
}

const normalizeTargets = (targets: RadarTarget[]): Required<RadarTarget>[] => {
  const count = targets.length
  if (count === 0) return []
  const step = 360 / count
  return targets.map((t, i) => ({
    ...t,
    angle: t.angle ?? (45 + i * step) % 360,
    distance: t.distance ?? 30,
    threat: t.threat ?? "medium",
  }))
}

// ============================================================================
// Sub Components
// ============================================================================

const RadarDefs = () => (
  <defs>
    <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={THEME.primary} stopOpacity="0.12" />
      <stop offset="70%" stopColor={THEME.primary} stopOpacity="0.03" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>
    <linearGradient id="sweepGrad" gradientUnits="userSpaceOnUse" x1="50" y1="50" x2="50" y2="4">
      <stop offset="0%" stopColor={THEME.primary} stopOpacity="0" />
      <stop offset="100%" stopColor={THEME.primary} stopOpacity="0.5" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="0.8" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>
  </defs>
)

const RadarGrid = React.memo(() => (
  <>
    <circle cx="50" cy="50" r="46" fill="url(#radarBg)" stroke={THEME.grid} strokeWidth="0.4" />
    {[11.5, 23, 34.5].map((r) => (
      <circle key={r} cx="50" cy="50" r={r} fill="none" stroke={THEME.grid} strokeWidth="0.2" strokeDasharray="1.5 2.5" />
    ))}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const p = polarToCartesian(angle, 46)
      return <line key={angle} x1="50" y1="50" x2={p.x} y2={p.y} stroke={THEME.primary} strokeOpacity="0.15" strokeWidth="0.15" />
    })}
    {["N", "E", "S", "W"].map((label, i) => {
      const p = polarToCartesian(i * 90, 40)
      return (
        <text key={label} x={p.x} y={p.y} fill={THEME.text} fontSize="3.5" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">
          {label}
        </text>
      )
    })}
    <circle cx="50" cy="50" r="1.2" fill={THEME.primary} filter="url(#glow)" />
  </>
))
RadarGrid.displayName = "RadarGrid"

const TargetPoint = ({ target, isActive, onHover }: { target: Required<RadarTarget>; isActive: boolean; onHover: (id: number | null) => void }) => {
  const { x, y } = polarToCartesian(target.angle, target.distance)
  return (
    <g className="cursor-pointer transition-all duration-1500" style={{ opacity: isActive ? 1 : 0.4 }} onMouseEnter={() => onHover(target.id)} onMouseLeave={() => onHover(null)} onClick={() => (window.location.href = target.link)}>
      <circle cx={x} cy={y} r="6" fill="transparent" />
      {isActive && <circle cx={x} cy={y} r="4" fill="none" stroke={THEME.primary} strokeWidth="0.2" className="animate-ping" style={{ transformOrigin: `${x}px ${y}px` }} />}
      <circle cx={x} cy={y} r={isActive ? 1.8 : 1.2} fill={THEME.primary} filter={isActive ? "url(#glow)" : "none"} />
      <text x={x} y={y - 4} fill={isActive ? THEME.primary : THEME.text} fontSize={isActive ? 3.5 : 3} fontWeight={isActive ? "600" : "400"} textAnchor="middle" className="pointer-events-none">
        {target.label}
      </text>
    </g>
  )
}

/** 데스크탑 InfoPanel */
const InfoPanel = React.forwardRef<HTMLDivElement, { title: string; titleAccent: string; subtitle: string; activeTarget: Required<RadarTarget> | null; isHovered: boolean; strings: RadarStrings; onHover: (id: number | null) => void }>(
  ({ title, titleAccent, subtitle, activeTarget, isHovered, strings, onHover }, ref) => (
    <div ref={ref} className="w-full lg:flex-1 lg:max-w-md space-y-6 lg:space-y-8 order-2 lg:order-1 z-10">
      <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
        <div className="hero-status flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs text-accent tracking-widest">
          <Activity className="w-3 h-3 animate-pulse" />
          {strings.systemActive}
        </div>
        <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {title} <span className="text-accent">{titleAccent}</span>
        </h1>
        <p className="hero-subtitle text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">{subtitle}</p>
      </div>

      {/* 데스크탑 카드 */}
      <Link
        to={activeTarget?.link ?? "#"}
        className={`opacity-0 hero-card hidden lg:block group p-6 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 ${isHovered ? "border-accent/50 shadow-lg" : "border-border hover:border-accent/30"}`}
        onMouseEnter={() => activeTarget && onHover(activeTarget.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] text-accent/80 uppercase tracking-widest flex items-center gap-1">
            <Target className="w-3 h-3" /> {isHovered ? strings.tracking : strings.scanning}
          </span>
          <span className="text-xs text-accent">ID: {activeTarget?.id.toString().padStart(3, "0")}</span>
        </div>
        <h2 className={`text-xl font-bold mb-2 transition-colors ${isHovered ? "text-accent" : "text-foreground group-hover:text-accent"}`}>{activeTarget?.label ?? strings.scanning}</h2>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{activeTarget?.description}</p>
        <div className="flex items-center gap-2 text-sm text-accent font-medium">
          <span>{strings.viewDetails}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  )
)
InfoPanel.displayName = "InfoPanel"

/** 모바일 타겟 리스트 */
const MobileTargetList = React.forwardRef<HTMLDivElement, { targets: Required<RadarTarget>[]; activeTarget: Required<RadarTarget> | null; strings: RadarStrings }>(
  ({ targets, activeTarget, strings }, ref) => (
    <div ref={ref} className="lg:hidden w-full mt-6">
      <div className="flex items-center gap-2 text-sm text-accent/80 uppercase  mb-3">
        <Target className="w-3 h-3" /> {strings.tracking}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {targets.map((target) => {
          const isActive = activeTarget?.id === target.id
          return (
            <Link
              key={target.id}
              to={target.link}
              className={`mobile-target-card relative p-3 rounded-lg border backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                isActive ? "border-accent bg-accent/10 scale-[1.02] shadow-lg shadow-accent/20" : "border-border/50 bg-card/60"
              }`}
            >
              {isActive && <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />}
              {isActive && <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full animate-pulse" />}
              <div className="relative flex items-center gap-2 mb-1">
                <span className={`font-mono text-[10px] ${isActive ? "text-accent" : "text-accent/60"}`}>0{target.id}</span>
                <span className={`text-xs font-semibold ${isActive ? "text-accent" : "text-foreground"}`}>{target.label}</span>
              </div>
              <p className={`relative text-[10px] line-clamp-2 leading-relaxed ${isActive ? "text-foreground/90" : "text-muted-foreground"}`}>{target.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
)
MobileTargetList.displayName = "MobileTargetList"

// ============================================================================
// Main Component
// ============================================================================

export default function DefenseRadarHero({ targets, strings, title, titleAccent, subtitle, className = "", videoSrc }: DefenseRadarHeroProps) {
  const [scanAngle, setScanAngle] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const radarRef = useRef<HTMLDivElement>(null)
  const infoPanelRef = useRef<HTMLDivElement>(null)
  const mobileListRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const startTimeRef = useRef<number | null>(null)

  const normalizedTargets = normalizeTargets(targets)

  // GSAP 입장 애니메이션
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // 레이더 등장 (스케일 + 페이드)
      tl.fromTo(radarRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })

      // InfoPanel 요소들 순차 등장
      tl.fromTo(".hero-status", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
      tl.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      tl.fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.5")
      tl.fromTo(".hero-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.2 }, "-=0.3")

      // 모바일 타겟 카드 순차 등장
      tl.fromTo(".mobile-target-card", { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 5.0 }, "-=0.5")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // 레이더 회전 애니메이션
  const animate = useCallback((time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time
    setScanAngle(((time - startTimeRef.current) * 0.12) % 360)
    requestRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [animate])

  // 타겟 자동 순환
  useEffect(() => {
    if (hoveredId !== null || normalizedTargets.length === 0) return
    const id = setInterval(() => setActiveIndex((prev) => (prev + 1) % normalizedTargets.length), 2500)
    return () => clearInterval(id)
  }, [normalizedTargets.length, hoveredId])

  const activeTarget = hoveredId ? (normalizedTargets.find((t) => t.id === hoveredId) ?? null) : (normalizedTargets[activeIndex] ?? null)

  return (
    <section ref={sectionRef} className={`relative min-h-[100svh] w-full bg-slate-950 light:bg-background flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-0 ${className}`}>
      {videoSrc && (
        <div className="absolute inset-0 z-0 light:opacity-15 opacity-25">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-30 light:opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 relative z-10">
        {/* 레이더 */}
        <div ref={radarRef} className="relative order-1 lg:order-2 w-full max-w-[380px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[460px] aspect-square">
          <div className="absolute inset-0 rounded-full border border-accent/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-2 sm:inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />

          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_var(--accent)] overflow-visible">
            <RadarDefs />
            <RadarGrid />
            <g transform={`rotate(${scanAngle} 50 50)`}>
              <path d="M 50 50 L 50 4 A 50 50 0 0 1 91.5 30 Z" fill="url(#sweepGrad)" />
              <line x1="50" y1="50" x2="91.5" y2="30" stroke={THEME.primary} strokeWidth="0.5" />
            </g>
            {normalizedTargets.map((target) => (
              <TargetPoint key={target.id} target={target} isActive={hoveredId === target.id 
                || (hoveredId === null && activeTarget?.id === target.id)} onHover={setHoveredId} />
            ))}
          </svg>

          {/* HUD */}
          <div className="hidden sm:block absolute top-0 right-0 text-[10px] text-accent text-right">
            <div>SCAN: {Math.round(scanAngle).toString().padStart(3, "0")}°</div>
            <div>TRK: {normalizedTargets.length} OBJ</div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-accent/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-accent/50" />
          </div>
        </div>

        {/* Info */}
        <div className="order-2 lg:order-1 w-full lg:flex-1 lg:max-w-md">
          <InfoPanel ref={infoPanelRef} title={title} titleAccent={titleAccent} subtitle={subtitle} activeTarget={activeTarget} isHovered={hoveredId !== null} strings={strings} onHover={setHoveredId} />
          <MobileTargetList ref={mobileListRef} targets={normalizedTargets} activeTarget={activeTarget} strings={strings} />
        </div>
      </div>
    </section>
  )
}
