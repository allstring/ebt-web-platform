import { Link } from "react-router-dom"
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import ComingSoon from "@/components/ComingSoon"
import { useLocale } from "@/lib/i18n"

// ============================================================================
// 페이지 숨김 설정 - true로 변경시 "준비중" 페이지 표시
// ============================================================================
const HIDE_PAGE = false

import categoryPesImg from "@/assets/images/category-pes.png"
import spectraC2Thumbnail from "@/assets/images/spectraC2Thumbnail.png"

export default function CounterUASPage() {
  const { t } = useLocale()
  const cuasPage = t.solution.cuasPage

  const cuasProducts = [
    {
      title: "eBT-PES Detector(수정예정)",
      subtitle: cuasPage.products.ebtPesDetector,
      imageSrc: categoryPesImg,
      href: "eBT-PES",
      classified: true
    },
    {
      title: "eBT-PES Jammer(수정예정)",
      subtitle: cuasPage.products.ebtPesJammer,
      imageSrc: categoryPesImg,
      href: "eBT-PES",
      classified: true,
    },
    {
      title: "Spectra-C2",
      subtitle: cuasPage.products.spectraC2,
      imageSrc: spectraC2Thumbnail,
      href: "Spectra-C2",
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
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cuasPage.header.label}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">{cuasPage.header.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {cuasPage.header.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      {cuasProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cuasPage.products.label}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{cuasPage.products.title}</h2>
            </div>

            <ProductGrid items={cuasProducts} />
          </div>
        </section>
      )}

      {/* Capabilities */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cuasPage.capabilities.label}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {cuasPage.capabilities.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cuasPage.capabilities.items.map((capability: { name: string; description: string }, index: number) => (
              <div key={capability.name} className="p-8 bg-card border border-border">
                <span className="text-4xl font-light text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-foreground">{capability.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cuasPage.relatedProduct.label}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{cuasPage.relatedProduct.title}</h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                {cuasPage.relatedProduct.description}
              </p>
            </div>
            <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent w-fit">
              <Link to="/contact">
                {cuasPage.relatedProduct.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
