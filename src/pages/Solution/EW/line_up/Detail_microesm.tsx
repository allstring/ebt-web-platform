import microesmHeroImg from "@/assets/images/microESM_hero.jpeg"
import microesmMainImg from "@/assets/images/microESM_main.jpg"
import { useLocale } from "@/lib/i18n"

export default function DetailMicroESMPage() {
  const { t } = useLocale()
  const microesm = t.microesm

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{microesm.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{microesm.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={microesmHeroImg}
                alt={microesm.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {microesm.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS MicroESM? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{microesm.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {microesm.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={microesmMainImg}
                alt={microesm.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* KEY Features */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{microesm.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {microesm.features.items.map((item, index) => (
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{microesm.specs.title}</h2>
            </div>

            {/* Performance Specs */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">{microesm.specs.categories.performance.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {microesm.specs.categories.performance.items.map((item, index) => (
                  <div key={index} className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Physical Specs */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">{microesm.specs.categories.physical.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microesm.specs.categories.physical.items.map((item, index) => (
                  <div key={index} className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="text-lg font-medium text-foreground mb-3">{microesm.specs.categories.platform.title}</h4>
                <p className="text-sm text-muted-foreground">{microesm.specs.categories.platform.value}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {microesm.contact.text}{" "}
                <a href="mailto:info@ebtech.kr" className="text-foreground hover:underline">
                  info@ebtech.kr
                </a>{" "}
                or{" "}
                <a href="tel:+82317216380" className="text-foreground hover:underline">
                  +82 31 721 6380
                </a>
                {microesm.contact.suffix}
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
