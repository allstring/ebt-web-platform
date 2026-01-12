import {Link} from 'react-router-dom'
import { ArrowRight, Settings, Shield, Zap, Target, Users, Wrench } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import video_poster from "@/assets/images/video_poster.jpg"
import dark_defense_room from "@/assets/images/dark_defense_room.jpg"
import { t } from "@/lib/i18n"

const solutionHrefs = [
  "/solution/electronic-warfare",
  "/solution/chemical-warfare",
  "/solution/biological-warfare",
]

const capabilityIcons = [Settings, Shield, Zap, Target, Users, Wrench]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            poster={video_poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="src/assets/videos/technology_earth_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/40 light:bg-background/80" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance max-w-4xl mx-auto">
              {t.home.hero.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.home.hero.description1}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.home.hero.description2}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/solution">
                  {t.home.hero.exploreSolutions}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent">
                <Link to="/contact">{t.home.hero.contactUs}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.home.solutions.sectionLabel}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.home.solutions.sectionTitle}</h2>
            </div>

            {/* Featured Product - RESOLVE */}
            <div className="mt-16 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 lg:p-12 bg-card border border-border rounded-lg">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.home.featured.label}</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.home.featured.title}</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {t.home.featured.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {t.home.featured.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent">
                      <Link to="/solution">
                        {t.home.featured.viewSpecs}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] bg-secondary/50 border border-border rounded-lg overflow-hidden">
                  <img
                    src={dark_defense_room}
                    alt={t.home.featured.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {t.home.solutions.items.map((solution, index) => (
                <Link
                  key={solution.title}
                  to={solutionHrefs[index]}
                  className="group preserve-text-rendering relative p-8 bg-card border border-border transition-transform transition-colors duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-light text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                  <div className="mt-6 flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="mr-2">{t.home.solutions.learnMore}</span>
                    <span className="ml-2 inline-block transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why EBTech */}
        <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 mb-20 text-center mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.home.capabilities.sectionLabel}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{t.home.capabilities.sectionTitle}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.home.capabilities.sectionDescription}
              </p>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {t.home.capabilities.items.map((capability, index) => {
                const Icon = capabilityIcons[index]
                const isEven = index % 2 === 0

                return (
                  <div
                    key={capability.title}
                    className={`group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Icon & Number Section */}
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl group-hover:border-accent/50 transition-all duration-300">
                          <div className="flex items-center justify-between mb-6">
                            <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                              <Icon className="w-8 h-8 text-accent" />
                            </div>
                            <span className="text-6xl lg:text-7xl font-light text-muted-foreground/30 group-hover:text-accent/30 transition-colors">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 w-full lg:w-2/3">
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                          {capability.title}
                        </h3>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {t.home.cta.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.home.cta.description}</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact">
                  {t.home.cta.contactUs}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
