// ============================================================================
// Defense Radar Hero Refactored
// ============================================================================

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Target, Activity } from "lucide-react"

// ============================================================================
// 1. 설정 및 타입 (Configuration & Types)
// ============================================================================

export interface RadarTarget {
  id: number
  label: string
  description: string
  angle: number
  distance: number // 0 ~ 45 (SVG radius 기준)
  link: string
  threat: "low" | "medium" | "high"
}

interface DefenseRadarHeroProps {
  targets?: RadarTarget[]
  className?: string
  videoSrc?: string
  title?: string
  titleAccent?: string
  subtitle?: string
}

const THEME = {
  primary: "#22d3ee", // Cyan-400
  secondary: "#0891b2", // Cyan-600
  grid: "rgba(34,211,238,0.2)",
  text: "rgba(34,211,238,0.7)",
}

const DEFAULT_TARGETS: RadarTarget[] = [
  { id: 1, label: "INTEGRATED DEFENSE", description: "지능형 통합 방어 시스템", angle: 45, distance: 32, link: "/defense", threat: "low" },
  { id: 2, label: "AI SURVEILLANCE", description: "자율형 감시 정찰 솔루션", angle: 135, distance: 26, link: "/ai", threat: "medium" },
  { id: 3, label: "PRECISION STRIKE", description: "초정밀 타격 유도 기술", angle: 225, distance: 38, link: "/precision", threat: "high" },
  { id: 4, label: "NETWORK C4I", description: "차세대 지휘 통제 네트워크", angle: 315, distance: 30, link: "/network", threat: "medium" },
]

// ============================================================================
// 2. 유틸리티 (Utilities)
// ============================================================================

const polarToCartesian = (angle: number, distance: number) => {
  const rad = (angle - 90) * (Math.PI / 180)
  return {
    x: 50 + distance * Math.cos(rad),
    y: 50 + distance * Math.sin(rad),
  }
}

// ============================================================================
// 3. 서브 컴포넌트 (Sub Components)
// ============================================================================

/** SVG 필터 및 그라디언트 정의 */
const RadarDefinitions = () => (
  <defs>
    <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={THEME.primary} stopOpacity="0.12" />
      <stop offset="70%" stopColor={THEME.primary} stopOpacity="0.03" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>
    <linearGradient id="sweepGradient" gradientUnits="userSpaceOnUse" x1="50" y1="50" x2="50" y2="4">
      <stop offset="0%" stopColor={THEME.primary} stopOpacity="0" />
      <stop offset="100%" stopColor={THEME.primary} stopOpacity="0.5" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="0.8" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>
  </defs>
)

/** 레이더 배경 그리드 */
const RadarGrid = React.memo(() => (
  <>
    {/* Main Circles */}
    <circle cx="50" cy="50" r="46" fill="url(#radarBg)" stroke={THEME.grid} strokeWidth="0.4" />
    {[11.5, 23, 34.5].map((r, i) => (
      <circle key={i} cx="50" cy="50" r={r} fill="none" stroke={THEME.grid} strokeWidth="0.2" strokeDasharray="1.5 2.5" />
    ))}
    
    {/* Cross Lines */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const p = polarToCartesian(angle, 46)
      return <line key={angle} x1="50" y1="50" x2={p.x} y2={p.y} stroke={THEME.primary} strokeOpacity="0.15" strokeWidth="0.15" />
    })}

    {/* Labels */}
    {["N", "E", "S", "W"].map((label, i) => {
      const p = polarToCartesian(i * 90, 40)
      return (
        <text key={label} x={p.x} y={p.y} fill={THEME.text} fontSize="3.5" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">
          {label}
        </text>
      )
    })}
    
    {/* Center Point */}
    <circle cx="50" cy="50" r="1.2" fill={THEME.primary} filter="url(#glow)" />
  </>
))
RadarGrid.displayName = "RadarGrid"

/** 타겟 포인트 */
const TargetPoint = ({ target, isActive, onHover }: { target: RadarTarget; isActive: boolean; onHover: (id: number | null) => void }) => {
  const { x, y } = polarToCartesian(target.angle, target.distance)
  
  return (
    <g
      className="cursor-pointer transition-all duration-500"
      style={{ opacity: isActive ? 1 : 0.4 }}
      onMouseEnter={() => onHover(target.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => window.location.href = target.link}
    >
      <circle cx={x} cy={y} r="6" fill="transparent" /> {/* Hit Area */}
      {isActive && (
        <circle cx={x} cy={y} r="4" fill="none" stroke={THEME.primary} strokeWidth="0.2" className="animate-ping" style={{ transformOrigin: `${x}px ${y}px` }} />
      )}
      <circle cx={x} cy={y} r={isActive ? 1.8 : 1.2} fill={isActive ? THEME.primary : THEME.secondary} filter={isActive ? "url(#glow)" : "none"} />
      <text x={x} y={y - 4} fill={isActive ? THEME.primary : THEME.text} fontSize={isActive ? 2.5 : 2} fontWeight={isActive ? "600" : "400"} textAnchor="middle" className="pointer-events-none transition-all duration-300">
        {target.label}
      </text>
    </g>
  )
}

/** 정보 패널 (좌측/상단) */
const InfoPanel = ({ 
  title, titleAccent, subtitle, activeTarget, isHovered 
}: { 
  title: string, titleAccent: string, subtitle: string, activeTarget: RadarTarget | null, isHovered: boolean 
}) => {
  return (
    <div className="w-full lg:flex-1 lg:max-w-md space-y-8 order-2 lg:order-1 z-10">
      <div className="space-y-4 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-cyan-500/80 tracking-widest">
          <Activity className="w-3 h-3 animate-pulse" />
          SYSTEM ACTIVE
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title} <br />
          <span className="text-cyan-400">{titleAccent}</span>
        </h1>
        <p className="text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
          {subtitle}
        </p>
      </div>

      <Link
        to={activeTarget?.link ?? "#"}
        className={`hidden lg:block group relative overflow-hidden p-6 rounded-xl border bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${
          isHovered ? "border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "border-slate-800 hover:border-cyan-500/30"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest flex items-center gap-1">
            <Target className="w-3 h-3" /> TRACKING
          </span>
          <span className="font-mono text-xs text-cyan-400">
            ID: {activeTarget?.id.toString().padStart(3, "0")}
          </span>
        </div>
        <h2 className={`text-xl font-bold mb-2 transition-colors ${isHovered ? "text-cyan-300" : "text-white group-hover:text-cyan-300"}`}>
          {activeTarget?.label ?? "SCANNING..."}
        </h2>
        <p className="text-sm text-slate-400 mb-6 line-clamp-2">
          {activeTarget?.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-cyan-500 font-medium">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  )
}

// ============================================================================
// 4. 메인 컴포넌트 (Main Component)
// ============================================================================

export default function DefenseRadarHero({
  targets = DEFAULT_TARGETS,
  className = "",
  videoSrc,
  title = "DEFENSE",
  titleAccent = "SYSTEM",
  subtitle = "최첨단 레이더 기술과 독보적인 통합 설계 역량으로 대한민국 방위 산업의 새로운 표준을 제시합니다.",
}: DefenseRadarHeroProps) {
  const [scanAngle, setScanAngle] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  const requestRef = useRef<number>()
  const startTimeRef = useRef<number | null>(null)

  // 부드러운 회전 애니메이션 (requestAnimationFrame 사용)
  const animate = useCallback((time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time
    const progress = time - startTimeRef.current
    // 3초(3000ms)에 한 바퀴(360도) -> 속도 조절 가능
    setScanAngle((progress * 0.12) % 360) 
    requestRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [animate])

  // 타겟 자동 순환
  useEffect(() => {
    if (hoveredId !== null) return // 호버 중이면 자동 순환 중지
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % targets.length)
    }, 3000)
    return () => clearInterval(id)
  }, [targets.length, hoveredId])

  const activeTarget = hoveredId 
    ? targets.find(t => t.id === hoveredId) ?? null 
    : targets[activeIndex]

  return (
    <section className={`relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Video/Image */}
      {videoSrc && (
        <div className="absolute inset-0 z-0 opacity-30">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      )}
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        
        <InfoPanel 
          title={title} 
          titleAccent={titleAccent} 
          subtitle={subtitle} 
          activeTarget={activeTarget} 
          isHovered={hoveredId !== null} 
        />

        {/* Radar Visual */}
        <div className="relative order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square">
          {/* Decorative Rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-cyan-500/10 animate-[spin_15s_linear_infinite_reverse]" />
          
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] overflow-visible">
            <RadarDefinitions />
            <RadarGrid />
            
            {/* Sweep Beam */}
            <g transform={`rotate(${scanAngle} 50 50)`}>
              <path d="M 50 50 L 50 4 A 50 50 0 0 1 91.5 30 Z" fill="url(#sweepGradient)" />
              <line x1="50" y1="50" x2="91.5" y2="30" stroke={THEME.primary} strokeWidth="0.5" />
            </g>

            {/* Targets */}
            {targets.map((target) => (
              <TargetPoint
                key={target.id}
                target={target}
                isActive={(hoveredId === target.id) || (hoveredId === null && activeTarget?.id === target.id)}
                onHover={setHoveredId}
              />
            ))}
          </svg>

          {/* HUD Overlay Elements */}
          <div className="absolute top-0 right-0 font-mono text-[10px] text-cyan-500/60 text-right">
            <div>SCAN: {Math.round(scanAngle).toString().padStart(3, "0")}°</div>
            <div>TRK: {targets.length} OBJ</div>
          </div>
          
          {/* HUD Corners */}
          <div className="absolute inset-0 pointer-events-none">
             {/* Left Top */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30" />
            {/* Right Bottom */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}