import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import aboutBg from "@/assets/images/about-bg.jpg"
import aboutDeliver from "@/assets/images/about_delivery.jpg"
import { t } from "@/lib/i18n"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Company Overview */}
        <section
          className="relative overflow-hidden py-24 lg:pt-48 lg:pb-18 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-background/80 light:bg-background/90" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.about.hero.sectionLabel}</p>
                <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  {t.about.hero.title1}
                  <br className="hidden md:block" /> {t.about.hero.title2}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {t.about.hero.description1}
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {t.about.hero.description2}
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-card border border-border shadow-sm transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.about.whyChoose.sectionLabel}
                  </p>
                  <h2 className="mt-3 text-xl font-medium text-foreground">{t.about.whyChoose.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t.about.whyChoose.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {t.about.whyChoose.cards.map((card) => (
                    <div key={card.title} className="p-6 bg-card border border-border transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
                      <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">{card.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative overflow-hidden py-20 lg:py-28 border-t border-border">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.about.vision.sectionLabel}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {t.about.vision.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {t.about.vision.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.about.mission.sectionLabel}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {t.about.mission.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {t.about.mission.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section
          className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutDeliver})` }}
        >
          <div className="absolute inset-0 bg-background/85 light:bg-background/90" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.about.capabilities.sectionLabel}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{t.about.capabilities.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.capabilities.description}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {t.about.capabilities.items.map((capability, index) => (
                <div key={capability.title} className="p-6 bg-card border border-border hover:-translate-y-1 transition-transform">
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{capability.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>


          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
