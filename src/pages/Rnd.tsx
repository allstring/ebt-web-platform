import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const coreTechnologies = [
  {
    name: "Signal Processing",
    description:
      "Advanced algorithms for real-time signal detection, classification, and analysis across the electromagnetic spectrum.",
  },
  {
    name: "RF & Sensor Technology",
    description: "Proprietary RF systems and multi-modal sensor integration for comprehensive environmental awareness.",
  },
  {
    name: "Data Analysis & Control",
    description:
      "Machine learning-enhanced data fusion and automated command and control systems for rapid decision support.",
  },
]

const developmentProcess = [
  {
    phase: "Requirement Analysis",
    description: "Operational needs assessment and technical specification development.",
  },
  {
    phase: "Prototype",
    description: "Rapid prototyping with iterative design refinement.",
  },
  {
    phase: "Field Test",
    description: "Rigorous validation in realistic operational conditions.",
  },
  {
    phase: "Deployment",
    description: "System integration, training, and ongoing support.",
  },
]

const partners = [
  "Korea Advanced Institute of Science and Technology (KAIST)",
  "Agency for Defense Development (ADD)",
  "Electronics and Telecommunications Research Institute (ETRI)",
  "Seoul National University",
]

export default function RnDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* R&D Overview */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                R&D with Technology
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                Technology internalization for operational advantage
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our research and development focuses on building indigenous capabilities in core defense technologies,
                reducing external dependencies while advancing system performance.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Research Focus</p>
                <p className="mt-4 text-foreground leading-relaxed">
                  Signal intelligence, electromagnetic systems, and integrated sensor networks for defense applications.
                </p>
              </div>
              <div className="p-8 bg-card border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technology Scope</p>
                <p className="mt-4 text-foreground leading-relaxed">
                  End-to-end development from component design through system integration and field validation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core Technologies</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Technical Domains</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreTechnologies.map((tech, index) => (
                <div key={tech.name} className="p-8 bg-background border border-border">
                  <span className="text-5xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-lg font-medium text-foreground">{tech.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Development Process
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">From Concept to Field</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((step, index) => (
                <div key={step.phase} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < developmentProcess.length - 1 && <div className="hidden lg:block flex-1 h-px bg-border" />}
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{step.phase}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Collaboration</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Research Partners</h2>
              <p className="mt-4 text-muted-foreground">
                Strategic partnerships with leading academic and research institutions.
              </p>
            </div>

            <div className="space-y-0">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-8 py-4 border-t border-border">
                  <span className="text-sm font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-foreground">{partner}</p>
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
