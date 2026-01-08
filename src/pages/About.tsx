import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import aboutBg from "@/assets/images/about-bg.jpg"
import aboutDeliver from "@/assets/images/about_delivery.jpg"
// const history = [
//   { year: "2015", event: "Company founded with focus on defense electronics" },
//   { year: "2017", event: "First electronic warfare system deployed" },
//   { year: "2019", event: "Counter-UAS division established" },
//   { year: "2021", event: "CBRN detection systems added to portfolio" },
//   { year: "2022", event: "RESOLVE platform development initiated" },
//   { year: "2024", event: "International partnership expansion" },
// ]

const capabilities = [
  {
    title: "Electronic Warfare",
    description: "Systems for sensing, direction finding, and jamming across complex RF environments.",
  },
  {
    title: "Counter-UAS",
    description: "Detection, classification, and defeat of emerging drone threats in real time.",
  },
  {
    title: "CBRN Monitoring",
    description: "Early warning and continuous monitoring for chemical and biological hazards.",
  },
  {
    title: "Systems Integration",
    description: "End-to-end integration with existing platforms, sensors, and C2 networks.",
  },
  {
    title: "Training & Support",
    description: "Deployment support, operator training, and lifecycle services in the field.",
  },
  {
    title: "Data & Analytics",
    description: "Tools that turn sensor data into actionable insight for better decisions.",
  },
]

// const certifications = [
//   "ISO 9001:2015",
//   "ISO 27001",
//   "ITAR Registered",
//   "MIL-STD-810G Compliant",
//   "NATO STANAG Compatible",
// ]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Company Overview */}
        <section
          className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About EBT</p>
                <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  Your Trusted Partner in
                  <br className="hidden md:block" /> Advanced Defense Technologies
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At EBT Co., Ltd., we pride ourselves on being at the forefront of technology and innovation in the
                  fields of electronic warfare, biological warfare, and chemical warfare defense. Our mission is to
                  provide cutting-edge solutions that empower our clients to safeguard their people and assets from
                  emerging threats in an ever-evolving world.
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  From government agencies and critical infrastructure operators to commercial businesses and
                  individuals, we offer a diverse range of products and services tailored to meet your specific
                  requirements and operational environments.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-card border border-border shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Why Choose EBT
                  </p>
                  <h2 className="mt-3 text-xl font-medium text-foreground">Empowering Innovations</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    We are dedicated to pushing the boundaries of technological advancement. Our team of experts is
                    constantly developing innovative solutions that give you the upper hand in the face of evolving
                    threats.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 bg-card border border-border transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
                    <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">Comprehensive Solutions</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      We understand that every client has unique needs. We offer a diverse range of products and
                      services tailored to your specific requirements across government, critical infrastructure, and
                      commercial domains.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
                    <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">Proven Excellence</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      With a strong track record of success, we have a history of developing and delivering
                      cutting-edge technologies that exceed expectations, building long-term trust with our partners.
                    </p>
                  </div>
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
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Vision</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  Creating a world where people can live and work safely and confidently
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  EBT&apos;s vision is to create a world where people can live and work safely and confidently, free
                  from the fear of environmental and biological threats. We focus on delivering technologies and systems
                  that continuously monitor, detect, and respond to invisible risks in the air and environment around us.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mission</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  Protecting people&apos;s health and safety
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  EBT&apos;s mission is to protect people&apos;s health and safety. We strive to safeguard people from
                  air pollution, viral infections, and other harmful environmental factors. Based on these core
                  technologies, we provide solutions across various fields, including indoor air quality improvement,
                  virus infection prevention, and protection from other hazardous conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
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
        </section> */}

        {/* Core Capabilities */}
        <section
          className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutDeliver})` }}
        >
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core Capabilities</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">What We Deliver</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We design, integrate, and support mission-ready solutions across electronic warfare, CBRN, and
                counter-UAS domains. Our focus is on turning complex sensing and decision workflows into clear,
                reliable capabilities in the field.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {capabilities.map((capability, index) => (
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

        {/* Certifications */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
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
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
