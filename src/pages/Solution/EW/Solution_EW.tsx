import { Link } from "react-router-dom"
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import { ProductGrid } from "@/components/product-card"
import { ProductContactSection } from "@/components/product-contact-section"
import ComingSoon from "@/components/ComingSoon"
import { useLocale } from "@/lib/i18n"


// ============================================================================
// 페이지 숨김 설정 - true로 변경시 "준비중" 페이지 표시
// ============================================================================
const HIDE_PAGE = false

import categoryEwsImg from "@/assets/images/solution/EW/GoldenBat-EWS/thumbnail_censored.webp"
import categoryPerceiveImg from "@/assets/images/solution/EW/PERCEIVE/thumbnail.webp"
import categoryResolveImg from "@/assets/images/solution/EW/RESOLVE/thumbnail.webp"
import categoryDeceiveImg from "@/assets/images/solution/EW/DECEIVE/thumbnail.webp"
import categryMicroESMImg from "@/assets/images/solution/EW/MicroESM/thumbnail.webp"
import categoryPhobosM4Img from "@/assets/images/solution/EW/PHOBOS M4/thumbnail.webp"
import categoryMapViewImg from "@/assets/images/solution/EW/MAPVIEW/thumbnail.webp"
// const environments = [
//   "Ground-based installations",
//   "Vehicle-mounted platforms",
//   "Airborne systems",
//   "Maritime operations",
// ]

export default function ElectronicWarfarePage() {
  const { t } = useLocale()
  const ewPage = t.solution.ewPage

  // ES (Electronic Support) Products
  const esProducts = [
    {
      title: "GoldenBat-EWS",
      subtitle: ewPage.products.goldenBatEws,
      imageSrc: categoryEwsImg,
      imageClassName: "blur-md",
      href: "GoldenBat-EWS",
      classified: true
    },
    {
      title: "PERCEIVE",
      subtitle: ewPage.products.perceive,
      imageSrc: categoryPerceiveImg,
      href: "PERCEIVE",
    },
    {
      title: "RESOLVE",
      subtitle: ewPage.products.resolve,
      imageSrc: categoryResolveImg,
      href: "RESOLVE",
    },
    {
      title: "MicroESM",
      subtitle: ewPage.products.microEsm,
      imageSrc: categryMicroESMImg,
      href: "MicroESM",
    },
    {
      title: "PHOBOS M4",
      subtitle: ewPage.products.phobosM4,
      imageSrc: categoryPhobosM4Img,
      href: "PHOBOS-M4",
    },
  ]

  // EA (Electronic Attack) Products
  const eaProducts = [
    {
      title: "DECEIVE",
      subtitle: ewPage.products.deceive,
      imageSrc: categoryDeceiveImg,
      href: "DECEIVE",
    },
  ]

  // Integration & Software Products
  const integrationProducts = [
    {
      title: "MAPVIEW(수정예정)",
      subtitle: ewPage.products.mapview,
      imageSrc: categoryMapViewImg,
      href: "MAPVIEW",
      classified: true
    },
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.header.label}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">{ewPage.header.title}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {ewPage.header.description}
              </p>
            </div>
          </div>
        </section>

        {/* Operational Environment */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Operational Environment
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Multi-Domain Deployment</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  EBTech electronic warfare systems are engineered for diverse operational contexts, from fixed
                  installations to mobile tactical platforms.
                </p>
              </div>
              <div className="space-y-4">
                {environments.map((env, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground">{env}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* ES Products */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.categories.es.label}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.categories.es.title}</h2>
            </div>

            <ProductGrid items={esProducts} />
          </div>
        </section>

        {/* EA Products */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.categories.ea.label}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.categories.ea.title}</h2>
            </div>

            <ProductGrid items={eaProducts} />
          </div>
        </section>

        {/* Integration & Software Products */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.categories.integration.label}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.categories.integration.title}</h2>
            </div>

            <ProductGrid items={integrationProducts} />
          </div>
        </section>


        {/* Core Components */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {ewPage.systemConfig.label}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.systemConfig.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ewPage.systemConfig.items.slice(0, 2).map((component) => (
                <div key={component.name} className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground">{component.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductContactSection text="To learn more about our Electronic Warfare solutions, please contact us at" />
    </div>
  )
}
