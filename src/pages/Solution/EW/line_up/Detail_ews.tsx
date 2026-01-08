import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import categoryBbatsImg from "@/assets/images/category-bbats.png"

export default function LineUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground">Product Lineup</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Biological Warfare Defense</p>
            </div>

            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryBbatsImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl">
              <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                Integrated detection, identification, and containment for biological threats with decision-ready
                analytics and guided response for forces and civilians.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
