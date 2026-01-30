import { useRef, useLayoutEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/hooks/use-theme";
import { gsap } from "@/lib/gsap";
import EbtLogo from "@/assets/images/home/EBT-logo.svg?react";
import EbtLogoDark from "@/assets/images/home/EBT-logo--dark.svg?react";
import Check from "lucide-react/dist/esm/icons/check";
import heroVideo from "@/assets/videos/home/hero-video.webm";

// To prevent re-creation on renders, it is moved out of the component.
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

function HeroSection() {
  const { t } = useLocale();
  const { isLight } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });
      tl.fromTo(
        ".logo-reveal", // Animate logo first
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          ".line-reveal",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.8" // Start revealing lines while logo is finishing
        )
        .fromTo(
          ".tagline-reveal",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center h-screen min-h-[700px] text-center overflow-hidden ${
        isLight ? "text-neutral-800" : "text-white"
      }`}
    >
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
        {/* <div className="logo-reveal">
          {isLight ? (
            <EbtLogo className="h-16 w-auto mb-8 text-foreground" />
          ) : (
            <EbtLogoDark className="h-16 w-auto mb-8 text-white" />
          )}
        </div> */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
          <TitleLine text={t.home.mainTitle.line1} />
          <TitleLine text={t.home.mainTitle.line2} />
          <TitleLine text={t.home.mainTitle.line3} />
        </h1>
        <p
          className={`tagline-reveal mt-8 text-lg lg:text-xl max-w-3xl mx-auto whitespace-pre-line ${
            isLight ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          {t.home.tagline}
        </p>
      </div>
    </section>
  );
}

function ContentSection() {
  const { t } = useLocale();
  const { isLight } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

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
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [t]); // Re-run when language changes

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
}