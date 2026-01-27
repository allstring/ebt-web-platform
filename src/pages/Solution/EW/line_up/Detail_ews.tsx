import categoryBbatsImg from "@/assets/images/solution/EW/GoldenBat-EWS/hero_censored.webp"
import eseaRecImgEn from "@/assets/images/solution/EW/GoldenBat-EWS/esea_rec_en.webp"
import eseaRecImgKo from "@/assets/images/solution/EW/GoldenBat-EWS/esea_rec_ko.webp"
import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate";

export default function DetailEwsPage() {
  const { t, locale } = useLocale()
  const ews = t.ews
  const eseaRecImg = locale === "ko" ? eseaRecImgKo : eseaRecImgEn

  return (
    <DetailPageGate>
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{ews.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{ews.subtitle}</p>
            </div>
          </div>

          {/* Full-width Hero Image - Classified Style */}
          <div className="w-full mb-12 relative group overflow-hidden">
            <img
              src={categoryBbatsImg}
              alt={ews.title}
              className="w-full h-auto object-cover"
            />

            {/* Scanline Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
              }}
            />

            {/* Green Tint Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-emerald-900/10 mix-blend-overlay" />

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-500/60" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-emerald-500/60" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-500/60" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-500/60" />

            {/* CLASSIFIED Label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600/80 backdrop-blur-sm">
              <span className="text-xs font-mono font-bold tracking-widest text-white">CLASSIFIED</span>
            </div>

            {/* Bottom HUD Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] font-mono text-emerald-400/80">
              <span>SEC-LVL: RESTRICTED</span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>EBT-GoldenBat-EWS</span>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
                {ews.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ews.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ews.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="py-16 lg:py-24 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative">
              {/* 배경 그라데이션 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />

              {/* 카드 */}
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                {/* 상단 악센트 바 */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-b-full" />

                {/* 이미지 컨테이너 */}
                <div className="bg-white dark:bg-white rounded-xl p-4 md:p-6">
                  <img
                    src={eseaRecImg}
                    alt={ews.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* 하단 라벨 */}
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">ES/EA Architecture</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>GoldenBat-EWS</span>
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ews.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ews.features.items.map((item, index) => (
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

        {/* Specifications */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ews.specs.title}</h2>
            </div>

            <div className="space-y-12">
              {/* ES Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{ews.specs.es.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.es.cesm.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ews.specs.es.cesm.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.es.resm.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ews.specs.es.resm.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* EA Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{ews.specs.ea.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.ea.rxAntenna.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ews.specs.ea.rxAntenna.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.ea.txAntenna.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ews.specs.ea.txAntenna.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.ea.jammingMode.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ews.specs.ea.jammingMode.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SW Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{ews.specs.sw.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.sw.signalMonitoring.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ews.specs.sw.signalMonitoring.description}
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.sw.signalIdentification.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ews.specs.sw.signalIdentification.description}
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{ews.specs.sw.missionPlanning.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ews.specs.sw.missionPlanning.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductContactSection />
    </div>
    </DetailPageGate>
  )
}
