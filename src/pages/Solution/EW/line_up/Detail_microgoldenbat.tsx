import { useState, useRef, useCallback, useEffect } from "react"
import "@/styles/global.css"
import useEmblaCarousel from "embla-carousel-react"
import {
  Feather,
  Radar,
  Cpu,
  Battery,
  Database,
  EyeOff,
  Shield,
  Users,
  Anchor,
  Plane,
  Network,
  Tablet,
  Laptop,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Radio,
  Compass,
} from "lucide-react"
import microGoldenBatHeroImg from "@/assets/images/solution/EW/Micro-GoldenBat/hero2.webp"
// 새 hero 이미지 (디버깅용)
// import heroImg1 from "@/assets/images/solution/EW/Micro-GoldenBat/her1.png"
// import heroImg2 from "@/assets/images/solution/EW/Micro-GoldenBat/her2.png"
import tabletConfigImg from "@/assets/images/solution/EW/Micro-GoldenBat/tablet.webp"
import laptopConfigImg from "@/assets/images/solution/EW/Micro-GoldenBat/laptop.png"
// import laptopConfigImg2 from "@/assets/images/solution/EW/Micro-GoldenBat/laptop2.webp"
// import laptopConfigImg3 from "@/assets/images/solution/EW/Micro-GoldenBat/laptop3.webp"

// 디버깅용 laptop 이미지 배열 (나중에 삭제 가능)
// const laptopImages = [laptopConfigImg, laptopConfigImg2, laptopConfigImg3]
// Use case images
import tactical1 from "@/assets/images/solution/EW/Micro-GoldenBat/tactical1.webp"
import costal1 from "@/assets/images/solution/EW/Micro-GoldenBat/costal1.webp"
import costal2 from "@/assets/images/solution/EW/Micro-GoldenBat/costal2.webp"
import uav1 from "@/assets/images/solution/EW/Micro-GoldenBat/uav1.webp"
import uav2 from "@/assets/images/solution/EW/Micro-GoldenBat/uav2.webp"
import uav3 from "@/assets/images/solution/EW/Micro-GoldenBat/uav3.webp"
import uav4 from "@/assets/images/solution/EW/Micro-GoldenBat/uav4.webp"
import uav5 from "@/assets/images/solution/EW/Micro-GoldenBat/uav5.webp"
import network1 from "@/assets/images/solution/EW/Micro-GoldenBat/network1.webp"
import network2 from "@/assets/images/solution/EW/Micro-GoldenBat/network2.webp"
import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate"
import { cn } from "@/lib/utils"

const featureIcons: Record<string, React.ElementType> = {
  feather: Feather,
  radar: Radar,
  cpu: Cpu,
  battery: Battery,
  database: Database,
  eyeOff: EyeOff,
  shield: Shield,
}

const useCaseIcons: Record<string, React.ElementType> = {
  users: Users,
  anchor: Anchor,
  plane: Plane,
  network: Network,
}

// Badge 컴포넌트
function Badge({
  children,
  color = "blue",
  variant = "light",
  size = "md",
  leftSection,
  className,
}: {
  children: React.ReactNode
  color?: "blue" | "indigo" | "cyan" | "teal" | "grape" | "orange"
  variant?: "light" | "outline"
  size?: "md" | "lg" | "xl"
  leftSection?: React.ReactNode
  className?: string
}) {
  const colorClasses = {
    blue: variant === "light"
      ? "bg-blue-900/30 text-blue-300 light:bg-blue-100 light:text-blue-700"
      : "border-blue-500 text-blue-500",
    indigo: variant === "light"
      ? "bg-indigo-900/30 text-indigo-300 light:bg-indigo-100 light:text-indigo-700"
      : "border-indigo-500 text-indigo-500",
    cyan: variant === "light"
      ? "bg-cyan-900/30 text-cyan-300 light:bg-cyan-100 light:text-cyan-700"
      : "border-cyan-500 text-cyan-500",
    teal: variant === "light"
      ? "bg-teal-900/30 text-teal-300 light:bg-teal-100 light:text-teal-700"
      : "border-teal-500 text-teal-500",
    grape: variant === "light"
      ? "bg-purple-900/30 text-purple-300 light:bg-purple-100 light:text-purple-700"
      : "border-purple-500 text-purple-500",
    orange: variant === "light"
      ? "bg-orange-900/30 text-orange-300 light:bg-orange-100 light:text-orange-700"
      : "border-orange-500 text-orange-500",
  }

  const sizeClasses = {
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
    xl: "px-4 py-1.5 text-sm",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        variant === "outline" && "border bg-transparent",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      {leftSection}
      {children}
    </span>
  )
}

// ThemeIcon 컴포넌트
function ThemeIcon({
  children,
  size = 40,
  color = "blue",
  variant = "light",
  radius = "md",
  gradient,
  className,
}: {
  children: React.ReactNode
  size?: number
  color?: "blue" | "teal" | "grape" | "orange"
  variant?: "light" | "gradient"
  radius?: "md" | "xl"
  gradient?: { from: string; to: string }
  className?: string
}) {
  const colorClasses = {
    blue: "bg-blue-900/30 text-blue-400 light:bg-blue-100 light:text-blue-600",
    teal: "bg-teal-900/30 text-teal-400 light:bg-teal-100 light:text-teal-600",
    grape: "bg-purple-900/30 text-purple-400 light:bg-purple-100 light:text-purple-600",
    orange: "bg-orange-900/30 text-orange-400 light:bg-orange-100 light:text-orange-600",
  }

  const radiusClasses = {
    md: "rounded-md",
    xl: "rounded-full",
  }

  const gradientStyles = gradient
    ? {
        background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
        "--tw-gradient-from": gradient.from === "blue" ? "#3b82f6" : gradient.from === "grape" ? "#a855f7" : gradient.from,
        "--tw-gradient-to": gradient.to === "cyan" ? "#06b6d4" : gradient.to === "violet" ? "#8b5cf6" : gradient.to,
      } as React.CSSProperties
    : undefined

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        radiusClasses[radius],
        variant === "light" && colorClasses[color],
        variant === "gradient" && "text-white",
        className
      )}
      style={{
        width: size,
        height: size,
        ...gradientStyles,
      }}
    >
      {children}
    </div>
  )
}

// Image Carousel with Lightbox
function ImageCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const lightboxPrev = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  const lightboxNext = () => setLightboxIndex((prev) => (prev + 1) % images.length)

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") lightboxPrev()
      if (e.key === "ArrowRight") lightboxNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, images.length])

  if (images.length === 0) return null

  return (
    <>
      {/* Carousel - Compact side layout */}
      <div>
        <div className="relative rounded-lg border border-border overflow-hidden bg-muted/20" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="h-[160px] flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      const placeholder = document.createElement("div")
                      placeholder.className = "text-muted-foreground flex flex-col items-center gap-2"
                      placeholder.innerHTML = `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs">Image ${index + 1}</span>`
                      e.currentTarget.parentElement?.appendChild(placeholder)
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-2">
            <button
              onClick={scrollPrev}
              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[10001] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Image container with padding for navigation */}
          <div className="flex items-center justify-center w-full h-full px-16 md:px-20">
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
                className="absolute left-2 md:left-4 p-2 md:p-3 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            <img
              src={images[lightboxIndex]}
              alt={`Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxNext() }}
                className="absolute right-2 md:right-4 p-2 md:p-3 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Next"
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-4 text-white/80 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}

// Use case images configuration
const useCaseImages: Record<number, string[]> = {
  0: [tactical1], // Tactical - 1 image
  1: [costal1, costal2], // Coastal - 2 images
  2: [uav1, uav2, uav3, uav4, uav5], // UAV - 5 images
  3: [network1, network2], // Network - 2 images
}

export default function DetailMicroGoldenBatPage() {
  const { t } = useLocale()
  const microGoldenBat = t.microGoldenBat

  // Tabs state
  const [activeTab, setActiveTab] = useState<"tablet" | "laptop">("tablet")

  // 디버깅용 laptop 이미지 인덱스 (나중에 삭제 가능)
  // const [laptopImgIndex, setLaptopImgIndex] = useState(0)

  // Accordion state
  const [openAccordions, setOpenAccordions] = useState<string[]>([])

  // Ref for Configuration section
  const configSectionRef = useRef<HTMLElement>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Scroll to configuration section and switch tab
  const scrollToConfig = (tab: "tablet" | "laptop") => {
    setActiveTab(tab)
    setTimeout(() => {
      configSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  return (
    <DetailPageGate>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center gap-4 mb-8">
              <h1 className="text-center text-4xl md:text-5xl font-semibold text-foreground">
                {microGoldenBat.title}
              </h1>
              <div className="flex items-center gap-2 justify-center flex-wrap">
                <Badge size="lg" variant="light" color="indigo" leftSection={<Radar size={14} />}>
                  {microGoldenBat.highlights.type}
                </Badge>
                <Badge size="lg" variant="light" color="blue" leftSection={<Feather size={14} />}>
                  {microGoldenBat.highlights.weight}
                </Badge>
                <Badge size="lg" variant="light" color="cyan" leftSection={<Radio size={14} />}>
                  {microGoldenBat.highlights.frequency}
                </Badge>
                <Badge size="lg" variant="light" color="teal" leftSection={<Compass size={14} />}>
                  {microGoldenBat.highlights.coverage}
                </Badge>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-center text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              {microGoldenBat.tagline}
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-4 pt-10 md:pt-16 pb-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden p-1">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={microGoldenBatHeroImg}
                    alt={microGoldenBat.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              {/* 아래쪽 그라데이션 페이드 */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            {/* 새 hero 이미지 - 좌우 배치 (디버깅용) - 주석 처리
            <div className="relative -mt-8 md:-mt-30">
              <div className="flex items-end justify-center gap-0">
                <img
                  src={heroImg1}
                  alt={microGoldenBat.title}
                  className="h-auto max-h-[400px] md:max-h-[800px] object-contain origin-bottom"
                />
                <img
                  src={heroImg2}
                  alt={microGoldenBat.title}
                  className="h-auto max-h-[380px] md:max-h-[760px] object-contain -ml-[60px] md:ml-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            */}
          </div>

        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-lg border border-border p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {microGoldenBat.overview.title}
                </h2>
                <p className="whitespace-pre-line text-md text-muted-foreground leading-relaxed">
                  {microGoldenBat.overview.description}
                </p>
                <div className="mt-4">
                  <p className="font-semibold mb-2">
                    {microGoldenBat.overview.configurationsTitle}:
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {microGoldenBat.overview.configurations.map((config, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToConfig(index === 0 ? "tablet" : "laptop")}
                        className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
                      >
                        <Badge
                          size="xl"
                          variant="outline"
                          color={index === 0 ? "blue" : "grape"}
                          leftSection={index === 0 ? <Tablet size={16} /> : <Laptop size={16} />}
                        >
                          {config.name} - {config.description}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image Section */}
        <section className="border-t border-border">
          
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {microGoldenBat.features.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {microGoldenBat.features.items.map((feature, index) => {
                const IconComponent = featureIcons[feature.icon] || Shield
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-card shadow-sm"
                  >
                    <div className="flex flex-col gap-4">
                      <ThemeIcon size={48} radius="md" variant="light" color="blue">
                        <IconComponent size={24} />
                      </ThemeIcon>
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Configurations Section */}
        <section ref={configSectionRef} className="py-16 md:py-20 border-t border-border scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {microGoldenBat.configurations.title}
            </h2>

            {/* Custom Tabs */}
            <div className="mb-6">
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab("tablet")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-colors",
                    activeTab === "tablet"
                      ? "bg-blue-600 text-white light:bg-blue-500"
                      : "bg-card hover:bg-muted text-foreground"
                  )}
                >
                  <Tablet size={18} />
                  {microGoldenBat.configurations.tablet.name}
                </button>
                <button
                  onClick={() => setActiveTab("laptop")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-colors border-l border-border",
                    activeTab === "laptop"
                      ? "bg-purple-600 text-white light:bg-purple-500"
                      : "bg-card hover:bg-muted text-foreground"
                  )}
                >
                  <Laptop size={18} />
                  {microGoldenBat.configurations.laptop.name}
                </button>
              </div>
            </div>

            {/* Tab Panels */}
            {activeTab === "tablet" && (
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - centered, not cropped */}
                  <div className="flex items-center justify-center lg:w-1/2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                    <img
                      src={tabletConfigImg}
                      alt={microGoldenBat.configurations.tablet.name}
                      className="max-w-full max-h-[300px] object-contain"
                    />
                  </div>
                  {/* Content Section - defines the row height */}
                  <div className="p-8 flex flex-col justify-center lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <ThemeIcon size={56} radius="xl" variant="gradient" gradient={{ from: "blue", to: "cyan" }}>
                        <Tablet size={28} />
                      </ThemeIcon>
                      <div>
                        <h3 className="text-xl font-semibold">{microGoldenBat.configurations.tablet.name}</h3>
                        <p className="text-muted-foreground">{microGoldenBat.configurations.tablet.subtitle}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-3">{microGoldenBat.configurations.tablet.bestFor}:</p>
                      <ul className="space-y-2">
                        {microGoldenBat.configurations.tablet.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ThemeIcon size={20} radius="xl" color="blue">
                              <Check size={12} />
                            </ThemeIcon>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "laptop" && (
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section for Laptop */}
                  <div className="flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-purple-500/10 to-violet-500/10 order-first min-h-[300px] lg:order-last">
                    <img
                      src={laptopConfigImg}
                      alt={microGoldenBat.configurations.laptop.name}
                      className="max-w-full max-h-[300px] object-contain"
                    />
                  </div>
                  {/* Placeholder Section for Laptop - 기존 코드 (주석 처리)
                  <div className="flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-purple-500/10 to-violet-500/10 order-first min-h-[300px] lg:order-last">
                    <div className="text-center">
                      <ThemeIcon size={64} radius="xl" variant="light" color="grape" className="mx-auto mb-3 lg:hidden">
                        <Laptop size={32} />
                      </ThemeIcon>
                      <ThemeIcon size={96} radius="xl" variant="light" color="grape" className="mx-auto mb-4 hidden lg:inline-flex">
                        <Laptop size={48} />
                      </ThemeIcon>
                    </div>
                  </div>
                  */}
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <ThemeIcon size={56} radius="xl" variant="gradient" gradient={{ from: "grape", to: "violet" }}>
                        <Laptop size={28} />
                      </ThemeIcon>
                      <div>
                        <h3 className="text-xl font-semibold">{microGoldenBat.configurations.laptop.name}</h3>
                        <p className="text-muted-foreground">{microGoldenBat.configurations.laptop.subtitle}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-3">{microGoldenBat.configurations.laptop.bestFor}:</p>
                      <ul className="space-y-2">
                        {microGoldenBat.configurations.laptop.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ThemeIcon size={20} radius="xl" color="grape">
                              <Check size={12} />
                            </ThemeIcon>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {microGoldenBat.specs.title}
            </h2>

            <div className="flex flex-col gap-8">
              {/* Performance Specs */}
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-6">
                  {microGoldenBat.specs.categories.performance.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-semibold w-2/5">Item</th>
                        <th className="border border-border p-3 text-left font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {microGoldenBat.specs.categories.performance.items.map((item, index) => (
                        <tr key={index} className="odd:bg-muted/50 hover:bg-muted/70 transition-colors">
                          <td className="border border-border p-3 font-medium">{item.label}</td>
                          <td className="border border-border p-3">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Physical Specs Comparison */}
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-6">
                  {microGoldenBat.specs.categories.physical.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        {microGoldenBat.specs.categories.physical.headers.map((header, index) => (
                          <th
                            key={index}
                            className={cn(
                              "border border-border p-3 font-semibold",
                              index === 0 ? "text-left" : "text-center"
                            )}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {microGoldenBat.specs.categories.physical.items.map((item, index) => (
                        <tr key={index} className="odd:bg-muted/50 hover:bg-muted/70 transition-colors">
                          <td className="border border-border p-3 font-medium">{item.label}</td>
                          <td className="border border-border p-3 text-center">{item.tablet}</td>
                          <td className="border border-border p-3 text-center">{item.laptop}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {microGoldenBat.useCases.title}
            </h2>

            {/* Custom Accordion */}
            <div className="flex flex-col gap-3">
              {microGoldenBat.useCases.items.map((useCase, index) => {
                const IconComponent = useCaseIcons[useCase.icon] || Users
                const accordionId = `usecase-${index}`
                const isOpen = openAccordions.includes(accordionId)
                const colors = ["blue", "teal", "grape", "orange"] as const
                const color = colors[index % 4]

                return (
                  <div key={index} className="rounded-lg border border-border overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(accordionId)}
                      className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <ThemeIcon size={40} radius="xl" variant="light" color={color}>
                        <IconComponent size={20} />
                      </ThemeIcon>
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{useCase.title}</p>
                        <p className="text-sm text-muted-foreground">{useCase.subtitle}</p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={cn(
                          "text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-200 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4 pt-0">
                          <div className={cn(
                            "flex flex-col gap-4 mt-4",
                            useCaseImages[index]?.length > 0 && "lg:flex-row lg:gap-8 lg:items-start"
                          )}>
                            {/* Content - Left */}
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                              <div>
                                <p className="font-semibold mb-3 text-blue-500 text-sm">Applications</p>
                                <ul className="space-y-2">
                                  {useCase.applications.map((app, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <ThemeIcon size={16} radius="xl" color="blue">
                                        <Check size={9} />
                                      </ThemeIcon>
                                      <span className="text-sm leading-tight">{app}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold mb-3 text-teal-500 text-sm">Benefits</p>
                                <ul className="space-y-2">
                                  {useCase.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <ThemeIcon size={16} radius="xl" color="teal">
                                        <Check size={9} />
                                      </ThemeIcon>
                                      <span className="text-sm leading-tight">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Image Gallery - Right */}
                            {useCaseImages[index] && useCaseImages[index].length > 0 && (
                              <div className="lg:w-[280px] lg:shrink-0 order-first lg:order-last">
                                <ImageCarousel images={useCaseImages[index]} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        {"disclaimer" in microGoldenBat && (
          <section className="py-8 border-t border-border">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center text-sm text-muted-foreground space-y-1">
                <p>{(microGoldenBat as any).disclaimer.manufacturer}</p>
                <p>{(microGoldenBat as any).disclaimer.reseller}</p>
                <p className="text-xs mt-2">{(microGoldenBat as any).disclaimer.specs}</p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </DetailPageGate>
  )
}
