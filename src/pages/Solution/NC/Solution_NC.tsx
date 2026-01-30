import { useRef, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import { ProductGrid } from "@/components/product-card"
import { ProductContactSection } from "@/components/product-contact-section"
import ComingSoon from "@/components/ComingSoon"
import { useLocale } from "@/lib/i18n"
import { gsap } from "@/lib/gsap"
import categoryCpxImg from "@/assets/images/solution/NC/CHEMPRO-X/thumbnail.webp"
import categoryNcmImg from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/thumbnail.webp"
import categoryRanidxImg from "@/assets/images/solution/NC/RanidX/thumbnail.webp"
import ncNetworkSchemaImg from "@/assets/images/solution/NC/nc_network_schema.png"

// ============================================================================
// 페이지 숨김 설정 - true로 변경시 "준비중" 페이지 표시
// ============================================================================
const HIDE_PAGE = false

// ============================================================================
// Network Architecture Section - 시스템 구성도
// ============================================================================

function NetworkArchitectureSection() {
  const { t } = useLocale()
  const nc = t.solution.ncPage
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {nc.architecture.label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {nc.architecture.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {nc.architecture.description}
          </p>
        </div>

        <div
          ref={imageRef}
          role="button"
          tabIndex={0}
          aria-label={nc.architecture.hoverTitle}
          className="relative group cursor-pointer max-w-4xl mx-auto"
          onClick={() => {
            document.getElementById("product-lineup")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              document.getElementById("product-lineup")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          }}
        >
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-border bg-white dark:bg-white/95 shadow-lg dark:shadow-2xl dark:shadow-black/20 transition-transform duration-300 group-hover:scale-[1.01]">
            <div className="h-0.5 md:h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

            <div className="relative">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <img
                  src={ncNetworkSchemaImg}
                  alt="NC Detection System Network Architecture"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-4">
                  <div className="bg-white/95 dark:bg-white px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl shadow-xl">
                    <p className="text-xs md:text-sm font-medium text-gray-900">{nc.architecture.hoverTitle}</p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1 hidden sm:block">{nc.architecture.hoverSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 md:px-8 lg:px-10 pb-4 md:pb-6 flex flex-wrap items-center justify-between gap-2 md:gap-4 border-t border-gray-100">
              <div className="flex items-center gap-3 md:gap-6 pt-3 md:pt-4">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 md:w-3 h-0.5 bg-green-500 rounded-full" />
                  <span className="text-[10px] md:text-xs text-gray-600">TCP/IP</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 md:w-3 h-0.5 bg-blue-500 rounded-full" />
                  <span className="text-[10px] md:text-xs text-gray-600">RS485</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2 md:w-3 h-0.5 bg-red-500 rounded-full" />
                  <span className="text-[10px] md:text-xs text-gray-600">24 VDC</span>
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 pt-3 md:pt-4">
                {nc.architecture.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function NCDefensePage() {
  const { t } = useLocale()
  const nc = t.solution.ncPage

  const cwProducts = [{
    title: "ChemPro-X",
    subtitle: nc.products.chemproX,
    imageSrc: categoryCpxImg,
    href: "CHEMPRO-X",
  }, {
    title: "NC MONITORING SYSTEM",
    subtitle: nc.products.ncMonitoring,
    imageSrc: categoryNcmImg,
    href: "NC-MONITORING-SYSTEM",
  }, {
    title: "RanidX",
    subtitle: nc.products.ranidx,
    imageSrc: categoryRanidxImg,
    href: "RanidX",
  },
  // {
  //   title: "BIOBATS",
  //   subtitle: nc.products.biobats,
  //   imageSrc: categoryBbatsImg,
  //   href: "BIOBATS",
  // }
]

  if (HIDE_PAGE) {
    return <ComingSoon />
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/solution"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.solution.backToSolutions}
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {nc.header.label}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
              {nc.header.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {nc.header.description}
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <NetworkArchitectureSection />

      {/* Product Lineup */}
      <section id="product-lineup" className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {nc.products.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {nc.products.title}
            </h2>
          </div>

          <ProductGrid items={cwProducts} />
        </div>
      </section>

      {/* Protection Concept */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {nc.protection.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {nc.protection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nc.protection.items.slice(0, 2).map((item) => (
              <div key={item.name} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductContactSection />
    </div>
  )
}
