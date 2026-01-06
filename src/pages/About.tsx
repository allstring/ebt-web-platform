import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const history = [
  { year: "2015", event: "Company founded with focus on defense electronics" },
  { year: "2017", event: "First electronic warfare system deployed" },
  { year: "2019", event: "Counter-UAS division established" },
  { year: "2021", event: "CBRN detection systems added to portfolio" },
  { year: "2022", event: "RESOLVE platform development initiated" },
  { year: "2024", event: "International partnership expansion" },
]

const capabilities = [
  {
    title: "System Design",
    description: "End-to-end architecture and engineering for complex defense systems.",
  },
  {
    title: "Integration",
    description: "Seamless integration of hardware, software, and operational workflows.",
  },
  {
    title: "Field Support",
    description: "Deployment, training, and continuous operational support.",
  },
]

const certifications = [
  "ISO 9001:2015",
  "ISO 27001",
  "ITAR Registered",
  "MIL-STD-810G Compliant",
  "NATO STANAG Compatible",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Company Overview */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About Us</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                Defense technology through precision engineering
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                EBTech specializes in the design, integration, and deployment of mission-critical defense systems.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus</p>
                <p className="mt-4 text-foreground">Electronic Warfare</p>
                <p className="text-foreground">Counter-UAS Systems</p>
                <p className="text-foreground">CBRN Detection</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Approach</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Technology internalization and in-house development for operational reliability.
                </p>
              </div>
              <div className="p-6 bg-card border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Commitment</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Field-proven solutions with continuous support and evolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">History</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Key Milestones</h2>
            </div>

            <div className="mt-16">
              <div className="space-y-0">
                {history.map((item) => (
                  <div key={item.year} className="flex gap-8 py-6 border-t border-border first:border-t-0">
                    <span className="text-sm font-mono text-muted-foreground w-16 shrink-0">{item.year}</span>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core Capabilities</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">What We Deliver</h2>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
              {capabilities.map((capability, index) => (
                <div key={capability.title}>
                  <span className="text-5xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{capability.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Certifications & Compliance
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Standards We Meet</h2>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="px-4 py-2 bg-secondary border border-border text-sm text-foreground">
                  {cert}
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
