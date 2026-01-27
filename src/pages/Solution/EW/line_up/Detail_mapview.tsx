import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate"

// import heroImg from "@/assets/images/solution/EW/MAPVIEW/hero.webp"
// import mainImg from "@/assets/images/solution/EW/MAPVIEW/main.webp"

export default function DetailMapViewPage() {
  const { t } = useLocale()
  const mapview = t.mapview

  return (
    <DetailPageGate>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{mapview.title}</h1>
            </div>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{mapview.subtitle}</p>
            </div>
          </div>

          {/* Hero 이미지 */}
          <div className="mx-auto max-w-10xl">
            <div className="w-full mb-12 bg-gradient-to-br from-neutral-900 to-neutral-800 aspect-[21/9] flex items-center justify-center">
              {/* <img src={heroImg} alt={mapview.title} className="w-full h-auto object-cover" /> */}
              <div className="text-center text-neutral-500">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm">Hero Image</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
                {mapview.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* What is MAP VIEW? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{mapview.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mapview.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main 이미지 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="w-full bg-gradient-to-br from-neutral-900 to-neutral-800 aspect-[16/9] rounded-lg flex items-center justify-center">
              {/* <img src={mainImg} alt={mapview.title} className="w-full h-auto object-cover rounded-lg" /> */}
              <div className="text-center text-neutral-500">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm">Main Image</p>
              </div>
            </div>
          </div>
        </section>

        {/* Display Elements */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{mapview.elements.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mapview.elements.items.map((item, index) => (
                <div key={index} className="p-6 bg-background border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated Functions */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{mapview.features.title}</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {mapview.features.items.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProductContactSection />
      </div>
    </DetailPageGate>
  )
}
