// ============================================================================
// Home Page
// 메인 랜딩 페이지 - GSAP 애니메이션
// ============================================================================

import { useRef, useLayoutEffect } from "react";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Check from "lucide-react/dist/esm/icons/check";

import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/hooks/use-theme";
import { gsap } from "@/lib/gsap";

import EbtLogo from "@/assets/images/home/EBT-logo.svg?react";
import EbtLogoDark from "@/assets/images/home/EBT-logo--dark.svg?react";
import heroVideo from "@/assets/videos/home/hero-video.webm";

// ============================================================================
// Components
// ============================================================================

/** Title line with first letter highlighted - moved outside to prevent re-creation */
const TitleLine = ({ text }: { text: string }) => {
  const firstLetter = text.charAt(0);
  const rest = text.substring(1);
  return (
    <div className="line-reveal">
      <span className="text-[#28CA48]">{firstLetter}</span>
      <span>{rest}</span>
    </div>
  );
};

// ============================================================================
// Hero Section - 메인 히어로 영역
// ============================================================================

function HeroSection() {
  const { t, locale } = useLocale();
  const { isLight } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation - re-triggers on language change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });
      tl.fromTo(
        ".logo-reveal",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          ".line-reveal",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.8"
        )
        .fromTo(
          ".tagline-reveal",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ".scroll-indicator",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      className={`snap-section relative flex items-center justify-center h-screen min-h-[700px] text-center overflow-hidden ${
        isLight ? "text-neutral-800" : "text-white"
      }`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
        <div
          className={`absolute inset-0 ${
            isLight ? "bg-white/70" : "bg-black/70 bg-grid-pattern"
          }`}
        />
      </div>

      <div className="relative z-10 px-4 flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-4xl xs:text-6xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
          <TitleLine text={t.home.mainTitle.line1} />
          <TitleLine text={t.home.mainTitle.line2} />
          <TitleLine text={t.home.mainTitle.line3} />
        </h1>

        {/* Tagline */}
        <p
          className={`tagline-reveal mt-8 text-lg lg:text-xl max-w-3xl mx-auto whitespace-pre-line ${
            isLight ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          {t.home.tagline}
        </p>

        {/* Scroll Indicator */}
        <div className="scroll-indicator mt-16 md:mt-20 flex items-center justify-center gap-2 text-muted-foreground animate-pulse">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Content Section - 회사 소개 콘텐츠
// ============================================================================

function ContentSection() {
  const { t, locale } = useLocale();
  const { isLight } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation - re-triggers on language change
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".content-reveal");
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section ref={sectionRef} className="snap-section flex min-h-screen flex-col justify-center bg-background py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        <div className="content-reveal text-center">
          {isLight ? (
            <EbtLogo className="h-12 sm:h-16 lg:h-20 w-auto mx-auto text-foreground" />
          ) : (
            <EbtLogoDark className="h-12 sm:h-16 lg:h-20 w-auto mx-auto text-foreground" />
          )}
        </div>

        <ul className="content-reveal grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {t.home.features.map((feature, i) => (
            <li key={i} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="content-reveal space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          {t.home.paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
}