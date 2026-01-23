import categoryPerceiveImg from "@/assets/images/solution/EW/PERCEIVE/hero.webp"
import eseaRecImg from "@/assets/images/solution/EW/PERCEIVE/main.webp"
import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"

export default function DetailPerceivePage() {
  const { t } = useLocale()
  const perceive = t.perceive

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{perceive.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{perceive.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryPerceiveImg}
                alt={perceive.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {perceive.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS PERCEIVE MR®? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{perceive.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {perceive.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={eseaRecImg}
                alt={perceive.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* KEY Features */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{perceive.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perceive.features.items.map((item, index) => (
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{perceive.specs.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.interceptFreq.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.interceptFreq.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.dfFreq.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.dfFreq.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.dfAccuracy.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {perceive.specs.dfAccuracy.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.scanSpeed.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {perceive.specs.scanSpeed.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.lpiPerformance.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.lpiPerformance.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.systemWeight.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.systemWeight.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.radioheadWeight.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.radioheadWeight.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.systemVolume.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.systemVolume.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-3">{perceive.specs.software.label}</h3>
                <p className="text-sm text-muted-foreground">{perceive.specs.software.value}</p>
              </div>
            </div>
          </div>
        </section>

        <ProductContactSection text={perceive.contact.text} suffix={perceive.contact.suffix} />
    </div>
  )
}
