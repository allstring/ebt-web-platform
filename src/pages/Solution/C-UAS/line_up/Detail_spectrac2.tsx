import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"

import thumbnailImg from "@/assets/images/solution/C-UAS/Spectra-C2/thumbnail.webp"
import screenshotImg1 from "@/assets/images/solution/C-UAS/Spectra-C2/hero.webp"
import screenshotImg2 from "@/assets/images/solution/C-UAS/Spectra-C2/main2.webp"
import { DetailPageGate } from "@/components/DetailPageGate";

export default function DetailSpectraC2Page() {
  const { t } = useLocale()
  const spectrac2 = t.spectrac2

  return (
    <DetailPageGate>
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-foreground">{spectrac2.title}</h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{spectrac2.subtitle}</p>
          </div>
        </div>

        {/* Full-width Hero Image */}
        <div className="w-full mb-12 relative group overflow-hidden">
          <img
            src={screenshotImg1}
            alt={spectrac2.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
              {spectrac2.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS Spectra-C2? */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{spectrac2.whatIs.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {spectrac2.whatIs.description}
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobile App Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-4 shadow-xl h-full flex flex-col">
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-b-full" />
                <div className="bg-background rounded-xl overflow-hidden flex-1">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={thumbnailImg}
                      alt="Spectra-C2 Mobile App"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">Mobile App</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>Android / Windows</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-4 shadow-xl h-full flex flex-col">
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-b-full" />
                <div className="bg-background rounded-xl overflow-hidden flex-1">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={screenshotImg2}
                      alt="Spectra-C2 Screenshot 2"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">Threat Analysis</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                    <span>Command & Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY Features */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">{spectrac2.features.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spectrac2.features.items.map((item, index) => (
              <div key={index} className="p-6 bg-background border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">{spectrac2.specs.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spectrac2.specs.items.map((item, index) => (
              <div key={index} className="p-5 bg-card border border-border rounded-lg">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {item.label}
                </div>
                <div className="text-foreground font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">{spectrac2.platforms.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {spectrac2.platforms.items.map((platform, index) => (
              <div key={index} className="p-6 bg-background border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-500 text-lg font-bold">
                    {platform.name.charAt(0)}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductContactSection variant="default" />
    </div>
    </DetailPageGate>
  )
}
