import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import categoryBbatsImg from "@/assets/images/category-bbats.png"


// const applications = [
//   "Forward base biological threat monitoring",
//   "Urban outbreak early warning and perimeter screening",
//   "Border, port, and airport biosurveillance",
//   "Field laboratory support for deployed forces",
//   "Critical infrastructure continuity during bio incidents",
// ]
const bwProducts = [{
  title: "BIOBATS",
  subtitle: "Smart Biological Detection & Early Warning System",
  imageSrc: categoryBbatsImg,
},
]
const bioSystemFeatures = [
  {
    name: "Bio-Surveillance",
    description: "Aerosol and air sampling with continuous monitoring for bio-aerosols and biological toxins.",
  },
  {
    name: "Rapid Identification",
    description: "PCR/IMS-based identification pipelines with automated alerting and confidence scoring.",
  },
  {
    name: "Epidemiological Analytics",
    description: "Geospatial spread modeling, contact clustering, and trend visualization for command decisions.",
  },
  {
    name: "Containment & Response Orchestration",
    description: "Workflow guidance for isolation, PPE posture, and decontamination paired with comms to teams.",
  },
]

export default function BiologicalWarfarePage() {
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
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Biological Warfare Defense</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Integrated detection, identification, and containment for biological threats with decision-ready
                analytics and guided response for forces and civilians.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Lineup</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Product Lineup</h2>
            </div>

            <ProductGrid items={bwProducts} />
          </div>
        </section>

        {/* Applications */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Applications</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Deployment Contexts</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Biological defense systems protect personnel, operations, and populations across diverse scenarios.
                </p>
              </div>
              <div className="space-y-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* System Features */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">System Features</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Technical Capabilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bioSystemFeatures.map((feature, index) => (
                <div key={feature.name} className="p-8 bg-card border border-border">
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{feature.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Biological Defense Suite</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Integrated biological detection, analytics, and guided response orchestration with secure coordination
                  across teams.
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
