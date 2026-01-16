// ============================================================================
// Defense Radar Hero - 전술 레이더 히어로 컴포넌트
// ============================================================================

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// --- Types ---
interface Target {
  id: number;
  label: string;
  description: string;
  angle: number;
  distance: number;
  link: string;
  threat: 'low' | 'medium' | 'high';
}

interface DefenseRadarHeroProps {
  targets?: Target[];
  rotationSpeed?: number;
  autoRotateInterval?: number;
  showCard?: boolean;
  className?: string;
}

// --- Constants ---
const DEFAULT_TARGETS: Target[] = [
  { id: 1, label: 'INTEGRATED DEFENSE', description: '지능형 통합 방어 시스템', angle: 45, distance: 32, link: '/defense', threat: 'low' },
  { id: 2, label: 'AI SURVEILLANCE', description: '자율형 감시 정찰 솔루션', angle: 135, distance: 26, link: '/ai', threat: 'medium' },
  { id: 3, label: 'PRECISION STRIKE', description: '초정밀 타격 유도 기술', angle: 225, distance: 38, link: '/precision', threat: 'high' },
  { id: 4, label: 'NETWORK C4I', description: '차세대 지휘 통제 네트워크', angle: 315, distance: 30, link: '/network', threat: 'medium' },
];

const DIRECTIONS = [
  { angle: 0, label: 'N' }, { angle: 90, label: 'E' },
  { angle: 180, label: 'S' }, { angle: 270, label: 'W' },
];

// --- Utility ---
const toXY = (angle: number, dist: number) => {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: 50 + dist * Math.cos(rad), y: 50 + dist * Math.sin(rad) };
};

// ============================================================================
// Main Component
// ============================================================================

export default function DefenseRadarHero({
  targets = DEFAULT_TARGETS,
  rotationSpeed = 2.5,
  autoRotateInterval = 3000,
  showCard = true,
  className = '',
}: DefenseRadarHeroProps) {
  const [scanAngle, setScanAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // 스캔 애니메이션
  useEffect(() => {
    const id = setInterval(() => setScanAngle(p => (p + rotationSpeed) % 360), 30);
    return () => clearInterval(id);
  }, [rotationSpeed]);

  // 타겟 자동 순환
  useEffect(() => {
    const id = setInterval(() => setActiveIndex(p => (p + 1) % targets.length), autoRotateInterval);
    return () => clearInterval(id);
  }, [targets.length, autoRotateInterval]);

  const activeTarget = hoveredId
    ? targets.find(t => t.id === hoveredId) || null
    : targets[activeIndex];

  const getVisibility = useCallback((id: number) => {
    if (hoveredId === id) return { opacity: 1, active: true };
    if (hoveredId !== null) return { opacity: 0.35, active: false };
    if (targets[activeIndex]?.id === id) return { opacity: 1, active: true };
    return { opacity: 0.35, active: false };
  }, [hoveredId, activeIndex, targets]);

  return (
    <section className={`relative min-h-screen w-full bg-background flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-12 z-10 flex flex-col items-center gap-6 lg:gap-12 ${showCard ? 'lg:flex-row lg:justify-between' : ''}`}>

        {/* Info Panel */}
        {showCard && (
          <div className="w-full lg:flex-1 lg:max-w-md space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 font-mono text-xs tracking-widest text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                SYSTEM ACTIVE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                GLOBAL<br /><span className="text-accent">SECURITY</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                최첨단 레이더 기술과 독보적인 통합 설계 역량으로
                대한민국 방위 산업의 새로운 표준을 제시합니다.
              </p>
            </div>

            {/* Desktop: Single Active Card */}
            <Link
              to={activeTarget?.link || '#'}
              className={`hidden lg:block group p-6 rounded-lg border bg-card transition-all duration-300 ${
                hoveredId ? 'border-accent/50 bg-accent/5' : 'border-border hover:border-accent/30'
              }`}
              onMouseEnter={() => activeTarget && setHoveredId(activeTarget.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Identified Target</span>
                <span className={`font-mono text-xs ${hoveredId ? 'text-accent' : 'text-muted-foreground'}`}>
                  #{activeTarget?.id.toString().padStart(2, '0') || '--'}
                </span>
              </div>
              <h2 className={`text-xl font-semibold mb-1 ${hoveredId ? 'text-accent' : 'text-foreground group-hover:text-accent'}`}>
                {activeTarget?.label || 'SCANNING...'}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{activeTarget?.description || '타겟을 스캔 중입니다.'}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground">
                <span>View Details</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${hoveredId ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
              </div>
            </Link>

            {/* Mobile: Grid Cards */}
            <div className="grid grid-cols-2 gap-2 lg:hidden">
              {targets.map(t => {
                const isActive = hoveredId === t.id || (!hoveredId && targets[activeIndex]?.id === t.id);
                return (
                  <Link
                    key={t.id}
                    to={t.link}
                    className={`group p-3 rounded-lg border bg-card transition-all duration-300 ${
                      isActive ? 'border-accent/50 bg-accent/5 scale-[1.02]' : 'border-border'
                    }`}
                    onTouchStart={() => setHoveredId(t.id)}
                    onTouchEnd={() => setHoveredId(null)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className={`font-mono text-[10px] ${isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                        #{t.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`text-xs font-semibold mb-1 line-clamp-1 ${isActive ? 'text-accent' : 'text-foreground'}`}>
                      {t.label}
                    </h3>
                    <p className="text-[10px] text-muted-foreground line-clamp-2">{t.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Radar */}
        <div className={`relative order-1 lg:order-2 w-full ${showCard ? 'max-w-[320px] sm:max-w-[400px] lg:max-w-[480px]' : 'max-w-[500px]'}`}>
          <div className="relative aspect-square">
            {/* Decorative Rings */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-border opacity-50" />
            <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-border opacity-25" />

            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(34,211,238,0.15)] overflow-visible">
              <defs>
                <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.12)" />
                  <stop offset="70%" stopColor="rgba(34,211,238,0.03)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <linearGradient id="sweep" gradientUnits="userSpaceOnUse" x1="50" y1="50" x2="50" y2="4">
                  <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.5)" />
                </linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="0.8" /><feComposite in="SourceGraphic" operator="over" /></filter>
              </defs>

              {/* Background & Grid */}
              <circle cx="50" cy="50" r="46" fill="url(#radarBg)" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="0.4" />
              {[11.5, 23, 34.5].map(r => (
                <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.2" strokeDasharray="1.5 2.5" />
              ))}
              {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
                const p = toXY(a, 46);
                return <line key={a} x1="50" y1="50" x2={p.x} y2={p.y} stroke="rgba(34,211,238,0.15)" strokeWidth="0.15" />;
              })}

              {/* Labels */}
              {DIRECTIONS.map(({ angle, label }) => {
                const p = toXY(angle, 40);
                return (
                  <text key={angle} x={p.x} y={p.y} fill="rgba(34,211,238,0.7)" fontSize="3.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">
                    {label}
                  </text>
                );
              })}

              {/* Sweep */}
              <g transform={`rotate(${scanAngle} 50 50)`}>
                <path d="M 50 50 L 50 4 A 50 55 0 0 1 91.5 30 Z" fill="url(#sweep)" opacity="0.5" />
                <line x1="50" y1="50" x2="91.5" y2="30" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
                <circle cx="91.5" cy="30" r="0.8" fill="#67e8f9" filter="url(#glow)" />
              </g>

              {/* Targets */}
              {targets.map(t => {
                const p = toXY(t.angle, t.distance);
                const { opacity, active } = getVisibility(t.id);
                return (
                  <g
                    key={t.id}
                    style={{ opacity }}
                    className="cursor-pointer transition-opacity duration-500"
                    onMouseEnter={() => setHoveredId(t.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => (window.location.href = t.link)}
                  >
                    <circle cx={p.x} cy={p.y} r="5" fill="transparent" />
                    {active && (
                      <circle cx={p.x} cy={p.y} r="4" fill="none" stroke="#22d3ee" strokeWidth="0.2" className="animate-ping" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                    )}
                    <circle cx={p.x} cy={p.y} r={active ? 1.8 : 1.2} fill={active ? '#22d3ee' : '#0891b2'} filter={active ? 'url(#glow)' : 'none'} />
                    <text x={p.x} y={p.y - (active ? 5 : 4)} fill={active ? '#22d3ee' : 'rgba(34,211,238,0.4)'} fontSize={active ? 2.5 : 2} fontFamily="monospace" fontWeight={active ? '600' : '400'} textAnchor="middle" className="pointer-events-none">
                      {t.label}
                    </text>
                  </g>
                );
              })}

              {/* Center */}
              <circle cx="50" cy="50" r="1.2" fill="#22d3ee" filter="url(#glow)" />
              <circle cx="50" cy="50" r="2.5" fill="none" stroke="rgba(34,211,238,0.6)" strokeWidth="0.25" />
            </svg>

            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-10 sm:h-10 border-l-2 border-t-2 border-accent/40" />
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-10 sm:h-10 border-r-2 border-t-2 border-accent/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-10 sm:h-10 border-l-2 border-b-2 border-accent/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-10 sm:h-10 border-r-2 border-b-2 border-accent/40" />

            {/* HUD Labels */}
            <div className="hidden sm:block absolute -top-8 left-0 font-mono text-[10px] text-accent/70 tracking-wider">
              <div>MODE: PPI</div>
              <div className="text-muted-foreground">RNG: 40km</div>
            </div>
            <div className="hidden sm:block absolute -top-8 right-0 font-mono text-[10px] text-right tracking-wider">
              <div className="text-emerald-400 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />ACTIVE
              </div>
              <div className="text-muted-foreground">TRK: {targets.length}</div>
            </div>
            <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 font-mono text-center">
              <span className="text-accent text-lg sm:text-xl font-bold">{Math.round(scanAngle).toString().padStart(3, '0')}°</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 w-full py-3 sm:py-4 px-4 sm:px-6 flex justify-center sm:justify-between items-center border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="flex gap-4 sm:gap-8 font-mono text-[9px] sm:text-[10px] text-muted-foreground tracking-wider">
          <span>LAT: 37.5665°N</span>
          <span>LON: 126.9780°E</span>
          <span className="hidden sm:inline text-accent/70">AES-256 ENCRYPTED</span>
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.1) 2px, rgba(34,211,238,0.1) 4px)' }} />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_100%)] opacity-60" />
    </section>
  );
}
