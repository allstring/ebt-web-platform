import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, Target, Settings } from "lucide-react"
import rndChipImg from "@/assets/images/rnd_chip.jpg"
import rndResearchImg from "@/assets/images/rnd_research.jpg"
import rndTeamImg from "@/assets/images/rnd_team.jpg"
import { t } from "@/lib/i18n"

const coreTechIcons = [Zap, Settings, Target]

export default function RnDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.rnd.hero.sectionLabel}</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {t.rnd.hero.title1}
                <br className="hidden md:block" /> {t.rnd.hero.title2}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.rnd.hero.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-16 aspect-video w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
              <img
                src={rndChipImg}
                alt={t.rnd.hero.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.rnd.coreTechnologies.sectionLabel}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.rnd.coreTechnologies.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.rnd.coreTechnologies.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {t.rnd.coreTechnologies.items.map((tech, index) => {
                const Icon = coreTechIcons[index]
                return (
                  <div
                    key={tech.name}
                    className="p-8 bg-background border border-border hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-5xl font-light text-muted-foreground/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{tech.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section
          className="relative overflow-hidden py-24 lg:py-32 border-t border-border bg-cover bg-center"
          style={{ backgroundImage: `url(${rndResearchImg})` }}
        >
          <div className="absolute inset-0 bg-background/20 light:bg-background/75 backdrop-blur-sm" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.rnd.researchAreas.sectionLabel}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.rnd.researchAreas.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.rnd.researchAreas.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.rnd.researchAreas.items.map((area, index) => (
                <div
                  key={area.title}
                  className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:-translate-y-1 transition-transform"
                >
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.rnd.developmentProcess.sectionLabel}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.rnd.developmentProcess.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.rnd.developmentProcess.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">
            {t.rnd.developmentProcess.items.map((step, index) => (
              <div
                key={step.phase}
                className="relative transition-all duration-300 ease-out
                          group-hover:opacity-40 group-hover:scale-95
                          hover:!opacity-100 hover:!scale-105 hover:z-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < t.rnd.developmentProcess.items.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-border" />
                  )}
                </div>
                <h3 className="text-lg font-medium text-foreground">{step.phase}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* R&D Team & Facilities */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.rnd.team.sectionLabel}</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.rnd.team.title}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {t.rnd.team.description1}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t.rnd.team.description2}
                </p>
              </div>

              {/* Team Image */}
              <div className="aspect-[4/3] w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
                <img
                  src={rndTeamImg}
                  alt={t.rnd.team.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>


        {/* R&D Commitment */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.rnd.commitment.sectionLabel}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.rnd.commitment.title}</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.rnd.commitment.description1}
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {t.rnd.commitment.description2}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
