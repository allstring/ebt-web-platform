import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

const inquiryTypes = [
  {
    title: "General Inquiry",
    description: "Questions about EBTech and our capabilities",
    email: "info@ebtech.com",
  },
  {
    title: "Business & Partnership",
    description: "Collaboration and business development",
    email: "business@ebtech.com",
  },
  {
    title: "Request Demo",
    description: "Schedule a product demonstration",
    email: "demo@ebtech.com",
  },
]

const openPositions = [
  {
    title: "RF Systems Engineer",
    department: "Engineering",
    location: "Seoul, Korea",
    type: "Full-time",
  },
  {
    title: "Signal Processing Engineer",
    department: "R&D",
    location: "Seoul, Korea",
    type: "Full-time",
  },
  {
    title: "Systems Integration Specialist",
    department: "Engineering",
    location: "Seoul, Korea",
    type: "Full-time",
  },
  {
    title: "Field Support Engineer",
    department: "Operations",
    location: "Flexible",
    type: "Full-time",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact & Career</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Get in touch</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Connect with our team for inquiries, partnerships, or career opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Inquiry Types */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Inquiry Channels</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inquiryTypes.map((type) => (
                <div key={type.title} className="p-6 bg-background border border-border">
                  <h3 className="font-medium text-foreground">{type.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{type.description}</p>
                  <a
                    href={`mailto:${type.email}`}
                    className="mt-4 inline-block text-sm text-accent hover:text-foreground transition-colors"
                  >
                    {type.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact Form</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Send a Message</h2>
                <p className="mt-4 text-muted-foreground">
                  Complete the form and our team will respond within 2 business days.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Career</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Join EBTech</h2>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  We are building advanced defense technology with a team of dedicated engineers and specialists. If you
                  are committed to technical excellence and mission-critical systems, explore our open positions.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mb-8">
              <h3 className="text-lg font-medium text-foreground">Open Positions</h3>
            </div>

            <div className="divide-y divide-border border-t border-b border-border">
              {openPositions.map((position, index) => (
                <div key={index} className="py-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground">{position.title}</h4>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>·</span>
                        <span>{position.location}</span>
                        <span>·</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@ebtech.com"
                      className="text-sm text-accent hover:text-foreground transition-colors"
                    >
                      Apply via Email
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Send your resume to{" "}
              <a href="mailto:careers@ebtech.com" className="text-accent hover:text-foreground transition-colors">
                careers@ebtech.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
