import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import categoryCpxImg from "@/assets/images/category-cpx.jpg"
import categoryNcmImg from "@/assets/images/category-ncm.jpg"

// const threatScenarios = [
//   "Persistent agent release in urban terrain",
//   "Industrial toxic chemical spill near base",
//   "Improvised dispersal devices in transit hubs",
//   "Cross-border smuggling of chemical precursors",
// ]

const chemicalDefenseChain = [
  {
    name: "Early Detection",
    description: "Multi-sensor detection for nerve, blister, choking agents with continuous air and surface sampling.",
  },
  {
    name: "Threat Identification",
    description: "Agent library correlation and automatic alerting for known/unknown chemical signatures.",
  },
  {
    name: "Containment & Isolation",
    description: "Hot/warm/cold zone establishment, ventilation isolation, and personnel routing to reduce exposure.",
  },
  {
    name: "Decontamination & Recovery",
    description: "Guided decon workflows, neutralization tracking, and clearance criteria for safe re-entry.",
  },
]

const cwProducts = [{
  title: "CHEMPRO-X",
  subtitle: "HANDHELD CHEMICAL DETECTOR",
  imageSrc: categoryCpxImg,
  href: "CHEMPRO-X",
},{
  title: "NC MONITORING SYSTEM",
  subtitle: "DETECTION SYSTEM COMPATIBLE CHEMICAL DETECTOR",
  imageSrc: categoryNcmImg,
  href: "NC MONITORING SYSTEM",
},
]

export default function ChemicalWarfarePage() {
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
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Chemical Warfare Defense</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                End-to-end protection against chemical threats with rapid detection, agent identification, containment,
                and coordinated decontamination for force and civilian safety.
              </p>
            </div>
          </div>
        </section>
{/* EW Products */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Lineup</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Product Lineup</h2>
            </div>

            <ProductGrid items={cwProducts} />
          </div>
        </section>
        {/* Threat Scenarios */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
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
        </section> */}

        {/* Protection Concept */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Protection Concept</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                Integrated Chemical Defense Chain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chemicalDefenseChain.map((capability, index) => (
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
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Chemical Defense Suite</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Integrated chemical detection, identification, and decontamination support with real-time incident
                  management and guidance for responders.
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
