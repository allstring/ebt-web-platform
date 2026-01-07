import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-card"
import categoryEwsImg from "@/assets/images/category-ews.jpg"
import categoryMesImg from "@/assets/images/category-mes.png"
import categoryPerceiveImg from "@/assets/images/category-perceive.jpg"
import categoryResolveImg from "@/assets/images/category-resolve.jpg"
import categoryLocateTImg from "@/assets/images/category-locate.jpg"

const systemComponents = [
  {
    name: "Signal Intelligence",
    description: "Real-time collection and analysis of electromagnetic signals across operational spectrum.",
  },
  {
    name: "Electronic Attack",
    description: "Directed energy and jamming capabilities for threat neutralization.",
  },
  {
    name: "Electronic Protection",
    description: "Defensive measures to ensure friendly system integrity and communication continuity.",
  },
  {
    name: "Spectrum Management",
    description: "Dynamic allocation and coordination of electromagnetic resources.",
  },
]

const ewProducts = [{
  title: "GoldenBat-EWS",
  subtitle: "Mobile Electronic Warfare Solution",
  imageSrc: categoryEwsImg,
},{
  title: "eBT-MES",
  subtitle: "Drone detection and tracking system",
  imageSrc: categoryMesImg,
},{
  title: "PERCEIVE",
  subtitle: "INTEGRATED WIDEBAND SENSOR",
  imageSrc: categoryPerceiveImg,
},{
  title: "RESOLVE",
  subtitle: "TACTICAL ELECTRONIC SUPPORT SYSTEM",
  imageSrc: categoryResolveImg,
},{
  title: "LOCATE-T",
  subtitle: "Strategic HF Monitoring & Direction Finding",
  imageSrc: categoryLocateTImg,
},
]


// const environments = [
//   "Ground-based installations",
//   "Vehicle-mounted platforms",
//   "Airborne systems",
//   "Maritime operations",
// ]

export default function ElectronicWarfarePage() {
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
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Electronic Warfare</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Comprehensive electromagnetic spectrum operations for detection, protection, and response in contested
                environments.
              </p>
            </div>
          </div>
        </section>
        
        {/* Operational Environment */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Operational Environment
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Multi-Domain Deployment</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  EBTech electronic warfare systems are engineered for diverse operational contexts, from fixed
                  installations to mobile tactical platforms.
                </p>
              </div>
              <div className="space-y-4">
                {environments.map((env, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground">{env}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* EW Products */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Lineup</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Product Lineup</h2>
            </div>

            <ProductGrid items={ewProducts} />
          </div>
        </section>


        {/* System Components */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                System Configuration
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Core Components</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemComponents.map((component, index) => (
                <div key={component.name} className="p-8 bg-card border border-border">
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{component.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{component.description}</p>
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
                  Our integrated defense platform provides seamless electronic warfare capabilities with real-time
                  sensor fusion and command coordination.
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
