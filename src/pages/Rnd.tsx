import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, Target, Settings } from "lucide-react"
import rndChipImg from "@/assets/images/rnd_chip.jpg"
import rndResearchImg from "@/assets/images/rnd_research.jpg"
import rndTeamImg from "@/assets/images/rnd_team.jpg"

const coreTechnologies = [
  {
    name: "Signal Processing",
    description:
      "Advanced algorithms for real-time signal detection, classification, and analysis. We are continuously researching precision signal processing technologies for complex electromagnetic environments.",
    icon: Zap,
  },
  {
    name: "RF & Sensor Technology",
    description:
      "Development of proprietary RF systems and multi-modal sensor fusion technologies. We are continuously researching to achieve comprehensive situational awareness capabilities across diverse environments.",
    icon: Settings,
  },
  {
    name: "Data Analysis & Control",
    description:
      "Machine learning-enhanced data fusion and automated command and control systems. We are researching professional analytical technologies to support rapid decision-making.",
    icon: Target,
  },
]

const developmentProcess = [
  {
    phase: "Requirement Analysis",
    description:
      "Operational needs assessment and technical specification development. We perform professional analysis with deep understanding of customers' actual operational environments.",
  },
  {
    phase: "Prototype",
    description:
      "Rapid prototyping with iterative design refinement. We are working hard to develop innovative solutions by applying the latest technologies.",
  },
  {
    phase: "Field Test",
    description:
      "Rigorous validation in realistic operational conditions. We perform professional testing to ensure reliability in real-world field environments.",
  },
  {
    phase: "Deployment",
    description:
      "System integration, training, and ongoing support. We provide professional support services to ensure successful customer operations.",
  },
]

const researchAreas = [
  {
    title: "Electronic Warfare Systems",
    description:
      "We are researching core technologies of electronic warfare systems including signal detection, direction finding, and jamming. We are continuously developing to achieve excellent performance in complex RF environments.",
  },
  {
    title: "Counter-UAS Technology",
    description:
      "We are researching real-time detection, classification, and response technologies for drone threats. We are developing professional technologies to counter various threats from commercial drones to FPV drones.",
  },
  {
    title: "CBRN Detection",
    description:
      "We are researching high-sensitivity detection and monitoring technologies for chemical, biological, and radiological threats. We are developing professional systems for early warning and continuous monitoring.",
  },
  {
    title: "System Integration",
    description:
      "We are researching integration technologies with existing platforms, sensors, and C2 networks. We perform professional engineering to ensure seamless system integration.",
  },
]

export default function RnDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">R&D</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                Technology Internalization for
                <br className="hidden md:block" /> Operational Advantage
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                EBTech continuously invests in research and development to reduce external dependencies and enhance system
                performance through indigenous development of core defense technologies. Our professional research team is
                working hard to develop innovative solutions by applying the latest technologies.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-16 aspect-video w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
              <img
                src={rndChipImg}
                alt="R&D Technology Development"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core Technologies</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Technical Domains</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                EBTech performs professional research in core areas of defense technology. We continuously strive to
                achieve the highest level of performance in each technical domain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreTechnologies.map((tech, index) => {
                const Icon = tech.icon
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Research Areas</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Research Focus</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We perform professional research across various defense technology fields. We are working hard to develop
                innovative solutions by applying the latest technologies in each area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
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
                Development Process
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">From Concept to Field</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We deliver high-quality solutions through a professional development process from concept to field
                deployment. We strive to achieve the best results through rigorous validation and professional approach
                at each stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">
            {developmentProcess.map((step, index) => (
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
                  {index < developmentProcess.length - 1 && (
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
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">R&D Team</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Expert Research Team</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  EBTech has a professional research team composed of engineers and researchers with deep expertise in
                  defense technology. We continuously learn and research to understand the latest technology trends and
                  develop innovative solutions.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Experts from each field collaborate to solve complex technical challenges. We are working hard to
                  provide high-quality products and services based on professional knowledge and experience.
                </p>
              </div>

              {/* Team Image */}
              <div className="aspect-[4/3] w-full bg-secondary/50 border border-border rounded-lg overflow-hidden">
                <img
                  src={rndTeamImg}
                  alt="Expert Research Team"
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our Commitment</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Commitment to R&D</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                EBTech strives to apply the latest technologies and provide innovative solutions through continuous
                research and development. We develop high-quality products and services through our professional research
                team and state-of-the-art research facilities, and we are working hard to support successful customer
                operations.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We continuously conduct research to respond to new threats and adapt to changes in operational
                environments. We are doing our best to provide the highest value to customers through professional
                approaches and innovative technologies.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
