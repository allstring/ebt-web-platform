import phobosm4HeroImg from "@/assets/images/PhobosM4_hero.png"
import phobosm4MainImg from "@/assets/images/PhobosM4_main.png"
import { useLocale } from "@/lib/i18n"

export default function DetailPhobosM4Page() {
  const { t } = useLocale()
  const phobosm4 = t.phobosm4

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{phobosm4.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{phobosm4.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={phobosm4HeroImg}
                alt={phobosm4.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {phobosm4.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS PHOBOS M4? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{phobosm4.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {phobosm4.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={phobosm4MainImg}
                alt={phobosm4.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* KEY Features */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{phobosm4.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phobosm4.features.items.map((item, index) => (
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{phobosm4.specs.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.concept.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.concept.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.freqRange.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.freqRange.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.detectionMethod.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.detectionMethod.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.aoaAccuracy.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.aoaAccuracy.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.freqAccuracy.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.freqAccuracy.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.minPulseWidth.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.minPulseWidth.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.pulseProcessing.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.pulseProcessing.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.simultaneousTracking.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.simultaneousTracking.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.emitterLibrary.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.emitterLibrary.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.responseTime.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.responseTime.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.power.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.power.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.consumption.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.consumption.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.temperature.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.temperature.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.weight.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.weight.value}</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-3">{phobosm4.specs.deployment.label}</h3>
                <p className="text-sm text-muted-foreground">{phobosm4.specs.deployment.value}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {phobosm4.contact.text}{" "}
                <a href="mailto:info@ebtech.kr" className="text-foreground hover:underline">
                  info@ebtech.kr
                </a>{" "}
                or{" "}
                <a href="tel:+82317216380" className="text-foreground hover:underline">
                  +82 31 721 6380
                </a>
                {phobosm4.contact.suffix}
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
