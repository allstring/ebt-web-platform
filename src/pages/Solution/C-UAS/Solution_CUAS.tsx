import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import ComingSoon from "@/components/ComingSoon"

// ============================================================================
// 페이지 숨김 설정 - true로 변경시 "준비중" 페이지 표시
// ============================================================================
const HIDE_PAGE = true

// TODO: C-UAS 제품 이미지 추가 후 주석 해제
// import categoryCuasImg from "@/assets/images/category-cuas.jpg"

const cuasProducts = [
  // TODO: C-UAS 제품 추가
  // {
  //   title: "제품명",
  //   subtitle: "제품 설명",
  //   imageSrc: categoryCuasImg,
  //   href: "제품-경로",
  // },
]

const cuasCapabilities = [
  {
    name: "Detection & Tracking",
    description: "Multi-sensor detection and tracking of unmanned aerial systems across operational airspace.",
  },
  {
    name: "Identification & Classification",
    description: "Automated threat assessment and classification with real-time alerting and confidence scoring.",
  },
  {
    name: "Neutralization",
    description: "Integrated countermeasures for drone neutralization including RF jamming and directed energy.",
  },
  {
    name: "Command & Control",
    description: "Centralized C2 interface for coordinated response and multi-site management.",
  },
]

export default function CounterUASPage() {
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
            All Solutions
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Counter-UAS Defense</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Comprehensive counter-drone solutions for detection, tracking, identification, and neutralization
              of unmanned aerial threats across military and civilian airspace.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      {cuasProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Lineup</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Product Lineup</h2>
            </div>

            <ProductGrid items={cuasProducts} />
          </div>
        </section>
      )}

      {/* Capabilities */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">System Capabilities</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              Integrated Counter-UAS Defense
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cuasCapabilities.map((capability, index) => (
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Related Product</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Counter-UAS Suite</h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Integrated counter-drone detection, tracking, and neutralization with real-time situational awareness
                and coordinated response capabilities.
              </p>
            </div>
            <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent w-fit">
              <Link to="/contact">
                Request Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
