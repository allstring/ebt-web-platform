import categoryDeceiveImg from "@/assets/images/deceive_hero.jpg"
import { useLocale } from "@/lib/i18n"
import easeDeceiveImg from "@/assets/images/deceive_main.webp"
export default function DetailDeceivePage() {
  const { t } = useLocale()
  const deceive = t.deceive

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{deceive.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{deceive.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryDeceiveImg}
                alt={deceive.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {deceive.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS DECEIVE? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{deceive.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {deceive.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={easeDeceiveImg}
                alt={deceive.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* KEY Features */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{deceive.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deceive.features.items.map((item, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-2">{deceive.specifications.title}</h2>
              <p className="text-sm text-muted-foreground">{deceive.specifications.note}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* General */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-foreground">{deceive.specifications.general.title}</h3>
                </div>
                <div className="divide-y divide-border">
                  {deceive.specifications.general.items.map((item, index) => (
                    <div key={index} className="flex px-4 py-3">
                      <span className="w-1/3 text-sm text-muted-foreground">{item.label}</span>
                      <span className="w-2/3 text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RF / EW Performance */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-foreground">{deceive.specifications.rf.title}</h3>
                </div>
                <div className="divide-y divide-border">
                  {deceive.specifications.rf.items.map((item, index) => (
                    <div key={index} className="flex px-4 py-3">
                      <span className="w-1/3 text-sm text-muted-foreground">{item.label}</span>
                      <span className="w-2/3 text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing & Network */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-foreground">{deceive.specifications.processing.title}</h3>
                </div>
                <div className="divide-y divide-border">
                  {deceive.specifications.processing.items.map((item, index) => (
                    <div key={index} className="flex px-4 py-3">
                      <span className="w-1/3 text-sm text-muted-foreground">{item.label}</span>
                      <span className="w-2/3 text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PNT / Sensors */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-foreground">{deceive.specifications.pnt.title}</h3>
                </div>
                <div className="divide-y divide-border">
                  {deceive.specifications.pnt.items.map((item, index) => (
                    <div key={index} className="flex px-4 py-3">
                      <span className="w-1/3 text-sm text-muted-foreground">{item.label}</span>
                      <span className="w-2/3 text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environmental & Standards - Full width */}
              <div className="lg:col-span-2 bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-muted px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-foreground">{deceive.specifications.environmental.title}</h3>
                </div>
                <div className="divide-y divide-border">
                  {deceive.specifications.environmental.items.map((item, index) => (
                    <div key={index} className="flex px-4 py-3">
                      <span className="w-1/4 text-sm text-muted-foreground">{item.label}</span>
                      <span className="w-3/4 text-sm text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {deceive.contact.text}{" "}
                <a href="mailto:info@ebtech.kr" className="text-foreground hover:underline">
                  info@ebtech.kr
                </a>{" "}
                or{" "}
                <a href="tel:+82317216380" className="text-foreground hover:underline">
                  +82 31 721 6380
                </a>
                {deceive.contact.suffix}
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
