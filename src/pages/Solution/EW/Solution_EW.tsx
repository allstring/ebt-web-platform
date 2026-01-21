import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import ComingSoon from "@/components/ComingSoon"
import { useLocale } from "@/lib/i18n"


// ============================================================================
// 페이지 숨김 설정 - true로 변경시 "준비중" 페이지 표시
// ============================================================================
const HIDE_PAGE = false

import categoryEwsImg from "@/assets/images/category-ews_censored.jpg"
// import categoryMesImg from "@/assets/images/category-mes.png"
import categoryPerceiveImg from "@/assets/images/category-perceive.jpg"
import categoryResolveImg from "@/assets/images/category-resolve.jpg"
// import categoryLocateTImg from "@/assets/images/category-locate.jpg"
import categoryPesImg from "@/assets/images/category-pes.png"
import categoryDeceiveImg from "@/assets/images/deceive_thumbnail.jpg"
import categryMicroESMImg from "@/assets/images/microESMThumbnail.png"
import categoryPhobosM4Img from "@/assets/images/phobosm4Thumbnail.png"
import categoryMapViewImg from "@/assets/images/mapViewThumbnail.png"
// const environments = [
//   "Ground-based installations",
//   "Vehicle-mounted platforms",
//   "Airborne systems",
//   "Maritime operations",
// ]

export default function ElectronicWarfarePage() {
  const { t } = useLocale()
  const ewPage = t.solution.ewPage

  const ewProducts = [{
    title: "GoldenBat-EWS",
    subtitle: ewPage.products.goldenBatEws,
    imageSrc: categoryEwsImg,
    imageClassName: "blur-md",
    href: "GoldenBat-EWS",
    classified: true,
  },
  // {
  //   title: "eBT-MES",
  //   subtitle: "Drone detection and tracking system",
  //   imageSrc: categoryMesImg,
  //   href: "eBT-MES",
  // },
  {
    title: "eBT-PES Detector(수정예정)",
    subtitle: ewPage.products.ebtPes,
    imageSrc: categoryPesImg,
    href: "eBT-PES",
  },{
    title: "PERCEIVE",
    subtitle: ewPage.products.perceive,
    imageSrc: categoryPerceiveImg,
    href: "PERCEIVE",
  },{
    title: "RESOLVE",
    subtitle: ewPage.products.resolve,
    imageSrc: categoryResolveImg,
    href: "RESOLVE",
  },
  {
    title: "DECEIVE",
    subtitle: ewPage.products.resolve,
    imageSrc: categoryDeceiveImg,
    href: "DECEIVE",
  },
  {
    title: "MicroESM",
    subtitle: ewPage.products.resolve,
    imageSrc: categryMicroESMImg,
    href: "MicroESM",
  },
  {
    title: "PHOBOS M4",
    subtitle: ewPage.products.resolve,
    imageSrc: categoryPhobosM4Img,
    href: "PHOBOS M4",
  },
  {
    title: "MAPVIEW",
    subtitle: ewPage.products.resolve,
    imageSrc: categoryMapViewImg,
    href: "MAPVIEW",
  },
  {
    title: "eBT-PES Jammer(수정예정)",
    subtitle: ewPage.products.ebtPes,
    imageSrc: categoryPesImg,
    href: "eBT-PES",
  }
  // {
  //   title: "LOCATE-T",
  //   subtitle: ewPage.products.locateT,
  //   imageSrc: categoryLocateTImg,
  //   href: "LOCATE-T",
  // },
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

        {/* EW Products */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.products.label}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.products.title}</h2>
            </div>

            <ProductGrid items={ewProducts} />
          </div>
        </section>


        {/* System Components */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {ewPage.systemConfig.label}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{ewPage.systemConfig.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ewPage.systemConfig.items.map((component, index) => (
                <div key={component.name} className="p-8 bg-card border border-border">
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{component.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Related Product */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{ewPage.relatedProduct.label}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{ewPage.relatedProduct.title}</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  {ewPage.relatedProduct.description}
                </p>
              </div>
              <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent w-fit">
                <Link to="/contact">
                  {ewPage.relatedProduct.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  )
}
