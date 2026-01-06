import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const threatScenarios = [
  "Surveillance and reconnaissance drones",
  "Payload delivery threats",
  "Swarm attack scenarios",
  "GPS-denied operations",
]

const responseCapabilities = [
  {
    name: "Detection",
    description: "Multi-sensor fusion combining radar, RF, and optical systems for early threat identification.",
  },
  {
    name: "Tracking",
    description: "Continuous target monitoring with predictive trajectory analysis.",
  },
  {
    name: "Identification",
    description: "Threat classification and friend-or-foe determination protocols.",
  },
  {
    name: "Neutralization",
    description: "Scalable response options from soft-kill jamming to kinetic defeat.",
  },
]

export default function CounterUASPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              to="/solution"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Solutions
            </Link>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Counter-UAS</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Comprehensive protection against unmanned aerial systems through detection, tracking, and scalable
                response capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Threat Scenarios */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Threat Landscape</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Addressed Scenarios</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Modern UAS threats range from commercial drones to purpose-built military systems. Our solutions
                  address the full spectrum.
                </p>
              </div>
              <div className="space-y-4">
                {threatScenarios.map((scenario, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground">{scenario}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Response Concept */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Response Concept</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Integrated Defense Chain</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responseCapabilities.map((capability, index) => (
                <div key={capability.name} className="p-8 bg-card border border-border">
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{capability.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Product */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Related Product</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">RESOLVE Platform</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Integrated counter-UAS capabilities with real-time threat assessment and coordinated response
                  management.
                </p>
              </div>
              <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent w-fit">
                <Link to="/contact">
                  Request Information
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
