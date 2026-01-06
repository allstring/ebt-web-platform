import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const solutions = [
  {
    id: "electronic-warfare",
    number: "01",
    title: "Electronic Warfare",
    summary: "Signal processing and spectrum management for complex electromagnetic environments.",
    href: "/solution/electronic-warfare",
  },
  {
    id: "counter-uas",
    number: "02",
    title: "Counter-UAS",
    summary: "Detection, tracking, and neutralization systems for unmanned aerial threats.",
    href: "/solution/counter-uas",
  },
  {
    id: "cbrn",
    number: "03",
    title: "CBRN Detection",
    summary: "Monitoring and detection systems for chemical, biological, radiological, and nuclear threats.",
    href: "/solution/cbrn",
  },
]

export default function SolutionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                Problem-driven defense systems
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Each solution addresses specific operational challenges with integrated hardware and software designed
                for real-world deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="divide-y divide-border border-t border-b border-border">
              {solutions.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.href}
                  className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 py-12 hover:bg-card/50 transition-colors -mx-6 px-6"
                >
                  <span className="text-sm font-mono text-muted-foreground">{solution.number}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                      {solution.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground max-w-xl">{solution.summary}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
