import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import icoHan from "@/assets/images/ico_han.png"
import icoPdf from "@/assets/images/ico_pdf.png"
import icoWord from "@/assets/images/ico_word.png"


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

        {/* Contact Form */}
        {/* <section className="py-24 lg:py-32 border-t border-border">
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
        </section> */}

        {/* Location Map */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Find Us</h2>
              <p className="mt-4 text-muted-foreground">
                Visit our office or get directions to our location.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Company Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">EBT Corporation</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Address</p>
                      <p className="text-foreground leading-relaxed text-sm">
                        #504, 54, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                      <a
                        href="tel:+82-31-721-6375"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        +82-31-721-6375
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            General Inquiry - Questions about EBTech and our capabilities
                          </p>

                        </div>
                        <div>
                          <a
                            href="mailto:info@ebtech.kr"
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            info@ebtech.kr
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-background">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1584.5348376758109!2d127.09348!3d37.411828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7c7e7677691%3A0x2c4282e124e93f95!2zTEgg7YyQ6rWQ7KCcMu2FjO2BrOuFuOuwuOumrCDquLDsl4XshLHsnqXshLzthLA!5e0!3m2!1sko!2skr!4v1767849458960!5m2!1sko!2skr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Career</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Join EBT</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
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
              <a href="mailto:careers@ebtech.kr" className="text-accent hover:text-foreground transition-colors">
                info@ebtech.kr
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
