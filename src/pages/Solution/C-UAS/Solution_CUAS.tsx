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

import categoryPesImg from "@/assets/images/solution/C-UAS/eBT-PES/thumbnail.webp"
import spectraC2Thumbnail from "@/assets/images/solution/C-UAS/Spectra-C2/thumbnail.webp"

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
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cuasPage.capabilities.label}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {cuasPage.capabilities.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuasPage.capabilities.items.slice(0, 2).map((capability: { name: string; description: string }) => (
              <div key={capability.name} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground">{capability.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductContactSection />
    </div>
  )
}
