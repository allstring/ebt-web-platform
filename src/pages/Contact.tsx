import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import icoHan from "@/assets/images/ico_han.png"
import icoPdf from "@/assets/images/ico_pdf.png"
import icoWord from "@/assets/images/ico_word.png"

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

const applicationDocs = [
  {
    title: "Application Form (HWP)",
    description: "Korean HWP file",
    href: "files/ebt-recruit.hwp",
    icon: icoHan,
    alt: "HWP icon",
  },
  {
    title: "Application Form (WORD)",
    description: "Word file",
    href: "files/ebt-recruit.docx",
    icon: icoWord,
    alt: "Word icon",
  },
  {
    title: "Application Form (PDF)",
    description: "PDF file",
    href: "files/ebt-recruit.pdf",
    icon: icoPdf,
    alt: "PDF icon",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Career</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Join EBTech</h2>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  We are waiting for the talent to grow into a global leader.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-medium text-foreground">Application Documents</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {applicationDocs.map(({ title, description, href, icon, alt }) => (
                  <a
                    key={title}
                    href={href}
                    download
                    className="group flex flex-col gap-3 rounded-lg border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-muted p-3 text-muted-foreground group-hover:text-foreground">
                        <img src={icon} alt={alt ?? title} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{title}</p>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    </div>
                    <span className="text-sm text-accent group-hover:text-foreground transition-colors">Download</span>
                  </a>
                ))}
              </div>
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
