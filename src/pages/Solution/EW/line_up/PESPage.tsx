// ============================================================================
// PES Page
// eBT-PES 제품 상세 페이지 - Portable RF Scanner (GSAP 애니메이션)
// ============================================================================

import { useEffect, useRef, Fragment } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import SplitText from "gsap/SplitText"

// Assets
import pesProductImg from "@/assets/images/pes.png"
import contactImg from "@/assets/images/cuas1.jpg"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// ============================================================================
// 타입 정의
// ============================================================================

interface FeatureCard {
  title: string
  description: string[]
  iconClass: string
}

interface SpecItem {
  label: string
  value: string
}

interface SpecSection {
  category: string
  items: SpecItem[]
}

// ============================================================================
// 상수 정의
// ============================================================================

/** Key Features 카드 데이터 */
const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Portable & Tactical",
    description: [
      "Compact lightweight design for rapid deployment",
      "Handheld, wearable and versatile mounting options",
      "Mobile operation capability for tactical flexibility",
    ],
    iconClass: "fa-solid fa-angles-down text-secondary",
  },
  {
    title: "All-Weather Reliability",
    description: [
      "Waterproof and dustproof protection",
      "Ruggedized construction for harsh environments",
      "Extended operating temperature range",
    ],
    iconClass: "fa-solid fa-water text-secondary",
  },
  {
    title: "Advanced Drone Detection",
    description: [
      "Comprehensive drone signal identification",
      "Wide frequency coverage for various drone types",
      "Real-time threat detection and classification",
    ],
    iconClass: "fa-solid fa-bullseye text-secondary",
  },
  {
    title: "User-Friendly Operation",
    description: [
      "Intuitive display with tactical interface",
      "Multi-alert system: Audio, LED, vibration",
      "Extended battery life for continuous operations",
    ],
    iconClass: "fa-solid fa-user text-secondary",
  },
]

/** Technical Specification 데이터 */
const SPEC_DATA: SpecSection[] = [
  {
    category: "Performance",
    items: [
      { label: "Frequency", value: "300MHz - 6GHz" },
      { label: "Detection range", value: "2km (Open), 1km (Urban)" },
      { label: "Detection time", value: "≤3s" },
      { label: "Detection modes", value: "Spectrum Analysis, Protocol Analysis, FPV Transmission Detection" },
      { label: "Detection sensitivity", value: "-95dBm (DJI), -106dBm (FPV)" },
      { label: "Simultaneous tracking", value: "10+ Multiple targets" },
      { label: "IP rating", value: "IP66" },
      { label: "Operating temperature", value: "-32°C to 65°C" },
      { label: "Operating time", value: "6 - 9h" },
      { label: "Battery", value: "Rechargeable Li-ion battery" },
      { label: "Dimension (Excluding Ant.)", value: "Approx. 150mm × 75mm × 36mm" },
      { label: "Weight", value: "≤800g" },
    ],
  },
]

// ============================================================================
// Main Component
// ============================================================================

export default function PESPage() {
  // Refs
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const leftTextRef = useRef<HTMLDivElement>(null)
  const featureCardsContainerRef = useRef<HTMLDivElement>(null)

  // ============================================================================
  // GSAP 애니메이션 설정
  // ============================================================================

  useEffect(() => {
    // ScrollSmoother 생성
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: false,
    })

    // Intro 섹션 요소들 페이드인/아웃 애니메이션
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    )

    // 이미지 클립 애니메이션
    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    )

    // SplitText는 폰트가 로딩된 이후 실행
    document.fonts.ready.then(() => {
      // 카드 애니메이션
      const cards = gsap.utils.toArray<HTMLElement>(".fade-card")
      cards.forEach((cardEl) => {
        const titleEl = cardEl.querySelector("h3")
        if (!titleEl) return

        const split = new SplitText(titleEl, {
          type: "chars",
          charsClass: "inline-block",
        })

        // 카드 본체 애니메이션
        gsap.fromTo(
          cardEl,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // SplitText 애니메이션
        gsap.from(split.chars, {
          duration: 0.6,
          opacity: 0,
          scale: 0.8,
          y: 80,
          rotateX: -90,
          transformOrigin: "center top",
          ease: "circ.out",
          stagger: { amount: 0.02 },
          scrollTrigger: {
            trigger: cardEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // 두 번째 섹션 문장 애니메이션 (줄 단위 순차 페이드인)
      const lines = gsap.utils.toArray<HTMLElement>(".fade-line")
      lines.forEach((lineEl) => {
        const split = new SplitText(lineEl, {
          type: "words",
          wordsClass: "inline-block",
        })

        gsap.from(split.words, {
          opacity: 0,
          y: 10,
          stagger: 0.05,
          ease: "circ.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: lineEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      })

      ScrollTrigger.refresh()
    })

    // 왼쪽 텍스트 고정 (Pin)
    ScrollTrigger.create({
      trigger: "#key-feature-section",
      start: "top 0px",
      endTrigger: featureCardsContainerRef.current,
      end: "bottom bottom",
      pin: leftTextRef.current,
      pinSpacing: true,
      anticipatePin: 1,
    })

    // Cleanup
    return () => {
      smoother.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <div id="smooth-wrapper" className="bg-black text-white">
      <div id="smooth-content">
        {/* Intro Section */}
        <section
          className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-80 pb-20"
          style={{
            background: "linear-gradient(0deg, rgba(202, 72, 40, 0.8) 0%, rgba(0, 0, 0, 0) 60%)",
          }}
        >
          {/* 제품명 */}
          <div className="text-center mb-16">
            <h1
              ref={titleRef}
              className="text-[64px] font-Tektur font-bold text-white leading-tight"
            >
              EBT-PES
            </h1>
            <h2
              ref={subtitleRef}
              className="text-[28px] text-gray-400 mt-4"
            >
              Portable RF Scanner
            </h2>
          </div>

          {/* 제품 이미지 */}
          <div className="w-full max-w-[500px]">
            <img
              ref={imageRef}
              src={pesProductImg}
              alt="eBT-PES"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-black h-screen text-white px-6 lg:px-24 py-32">
          <div className="max-w-4xl mx-auto text-left text-[32px] leading-[1.4] text-gray-300 flex flex-col justify-center h-full">
            <p className="fade-line">
              eBT-PES delivers advanced C-UAS detection with proven RF technology and rugged
              portable design. Purpose-built for military and defense applications, our tactical
              systems provide critical early warning of drone and controller signals for force
              protection operations.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section
          className="border-t border-gray-800"
          style={{
            background: "linear-gradient(0deg, rgba(202, 72, 40, 0.2) 0%, rgba(0, 0, 0, 0) 60%)",
          }}
        >
          <section
            id="key-feature-section"
            className="flex flex-col lg:flex-row gap-12 px-6 lg:px-24 py-32 max-w-[1800px] mx-auto"
          >
            {/* Left - 고정 문구 */}
            <div
              ref={leftTextRef}
              className="w-full lg:w-1/2 text-[60px] font-Tektur font-semibold text-white leading-[1.2] relative"
            >
              Key<br />Features
            </div>

            {/* Right - 카드들 */}
            <div
              ref={featureCardsContainerRef}
              className="w-full lg:w-1/2 flex flex-col gap-20"
            >
              {FEATURE_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="fade-card p-6 rounded-xl text-white shadow-md flex items-start gap-6"
                >
                  {/* 아이콘 */}
                  <i className={`${card.iconClass} text-[48px] pt-1 min-w-[48px]`} />

                  {/* Title + Description */}
                  <div className="flex flex-col">
                    <h3 className="text-[40px] font-semibold font-Tektur leading-[1.2] whitespace-nowrap">
                      {card.title}
                    </h3>
                    <ul className="list-disc list-inside text-[20px] text-gray-400 leading-relaxed space-y-0 mt-2">
                      {card.description.map((line, idx) => (
                        <li key={idx} className="whitespace-pre-line">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Technical Specification Section */}
        <section className="flex flex-col lg:flex-row mx-auto px-6 lg:px-24 py-32 gap-16 bg-neutral-900 text-white border-t border-gray-800">
          {/* Left - 헤더 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h2 className="text-[48px] font-Tektur font-semibold leading-tight">
              Technical<br />Specification
            </h2>
          </div>

          {/* Right - 스펙 테이블 */}
          <div className="w-full lg:w-2/3 border-t border-gray-600 pt-6">
            <div className="grid grid-cols-3 gap-y-6 text-sm sm:text-base">
              {SPEC_DATA.map((section, i) => (
                <Fragment key={i}>
                  {/* 첫 줄: 카테고리, 라벨, 값 */}
                  <div className="text-secondary font-semibold text-[20px]">
                    {section.category}
                  </div>
                  <div className="text-gray-400 uppercase font-semibold">
                    {section.items[0].label}
                  </div>
                  <div className="text-white">{section.items[0].value}</div>

                  {/* 나머지 줄 */}
                  {section.items.slice(1).map((item, j) => (
                    <Fragment key={j}>
                      <div />
                      <div className="text-gray-400 uppercase font-semibold">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col lg:flex-row w-full mx-auto px-6 lg:px-24 py-32 gap-16 text-white items-stretch">
          {/* Left - 텍스트 및 버튼 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center">
            <h2 className="font-Tektur text-[36px] lg:text-[48px] font-bold leading-tight">
              Explore defense solutions<br />for modern threats
            </h2>
            <p className="text-[18px] text-gray-300 leading-relaxed">
              Before you proceed with EBT-PES, please check the key specifications below.<br />
              If you're still unsure, reach out to us for more details.
            </p>
            <a
              href="mailto:info@ebtech.kr"
              className="relative bg-white text-[#191e51] font-bold px-6 py-4 max-w-[300px] uppercase tracking-wide transition-colors duration-300 custom-angled-button hover:bg-gray-100"
            >
              REQUEST A Catalogue
            </a>
          </div>

          {/* Right - 이미지 */}
          <div className="w-full lg:w-1/2">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
