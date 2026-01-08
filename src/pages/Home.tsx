import {Link} from 'react-router-dom'
import { ArrowRight, Settings, Shield, Zap, Target, Users, Wrench } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import dark_raider from "@/assets/images/dark_raider.jpg"
import dark_defense_room from "@/assets/images/dark_defense_room.jpg"
// import technologyEarthVideo from "@/assets/videos/technology_earth_video.mp4"

const solutions = [
  {
    title: "Electronic Warfare",
    description:
      "Advanced signal processing and spectrum management systems for complex operational environments.",
    href: "/solution/electronic-warfare",
  },
  {
    title: "Chemical Warfare",
    description:
      "Advanced detection, identification, and monitoring systems for chemical agents in contested and hazardous environments.",
    href: "/solution/chemical-warfare",
  },
  {
    title: "Biological Warfare",
    description:
      "High-sensitivity detection and analysis systems designed to identify biological threats and support rapid response operations.",
    href: "/solution/biological-warfare",
  },
]

const capabilities = [
  {
    title: "End-to-End System Design",
    description: "Comprehensive system design and integration services that ensure seamless operation across all components and platforms.",
    icon: Settings,
  },
  {
    title: "Field-Proven Deployment",
    description: "Battle-tested solutions with extensive field deployment experience and reliable support infrastructure.",
    icon: Shield,
  },
  {
    title: "Continuous R&D",
    description: "Ongoing research and development to stay ahead of emerging threats and evolving operational requirements.",
    icon: Zap,
  },
  {
    title: "Mission-Critical Reliability",
    description: "Engineered for the highest standards of reliability and performance in demanding operational environments.",
    icon: Target,
  },
  {
    title: "Expert Engineering Team",
    description: "Dedicated team of engineers with deep expertise in defense technologies and system integration.",
    icon: Users,
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions designed to meet specific operational needs and integration requirements.",
    icon: Wrench,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            // src={technologyEarthVideo}
            poster={dark_raider}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="src/assets/videos/technology_earth_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/85" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance max-w-4xl mx-auto">
              Defense Technology for Mission-Critical Operations
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              System integration and precision engineering for electronic warfare, counter-UAS, and CBRN detection.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/solution">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solutions</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Integrated Defense Systems</h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <Link
                  key={solution.title}
                  to={solution.href}
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
                    <span className="mr-2">Learn more</span>
                    <span className="ml-2 inline-block transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product - RESOLVE */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Featured Product</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">RESOLVE</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Our flagship integrated defense platform, combining advanced sensor fusion with real-time threat
                  analysis and response coordination.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Multi-domain threat detection
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Real-time data integration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Scalable architecture
                  </li>
                </ul>
                <div className="mt-10">
                  <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent">
                    <Link to="/solution">
                      View Specifications
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-secondary/50 border border-border">
                <img
                  src={dark_defense_room}
                  alt="RESOLVE defense platform interface"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why EBTech */}
        <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 mb-20 text-center mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why EBTech</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Engineering Excellence</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with proven engineering practices to deliver mission-critical solutions 
                that exceed expectations. Our commitment to excellence drives everything we do.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
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
              Ready to discuss your requirements?
            </h2>
            <p className="mt-4 text-muted-foreground">Connect with our engineering team.</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact">
                  Contact Us
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
