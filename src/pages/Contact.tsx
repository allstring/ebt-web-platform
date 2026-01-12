import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import icoHan from "@/assets/images/ico_han.png"
import icoPdf from "@/assets/images/ico_pdf.png"
import icoWord from "@/assets/images/ico_word.png"
import { t } from "@/lib/i18n"

const applicationDocFiles = [
  { href: "files/ebt-recruit.hwp", icon: icoHan, alt: "HWP icon" },
  { href: "files/ebt-recruit.docx", icon: icoWord, alt: "Word icon" },
  { href: "files/ebt-recruit.pdf", icon: icoPdf, alt: "PDF icon" },
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
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.hero.sectionLabel}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">{t.contact.hero.title}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.contact.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.location.sectionLabel}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{t.contact.location.title}</h2>
              <p className="mt-4 text-muted-foreground">
                {t.contact.location.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Company Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t.contact.location.companyName}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.location.addressLabel}</p>
                      <p className="text-foreground leading-relaxed text-sm">
                        {t.contact.location.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.location.phoneLabel}</p>
                      <a
                        href={`tel:${t.contact.location.phone}`}
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {t.contact.location.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t.contact.location.emailLabel}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {t.contact.location.emailDescription}
                          </p>

                        </div>
                        <div>
                          <a
                            href={`mailto:${t.contact.location.email}`}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {t.contact.location.email}
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
                  className="w-full map-iframe"
                  language="en"
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
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.career.sectionLabel}</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">{t.contact.career.title}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.contact.career.description}
              </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-medium text-foreground">{t.contact.career.applicationDocs}</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.contact.career.docs.map((doc, index) => {
                  const file = applicationDocFiles[index]
                  return (
                    <a
                      key={doc.title}
                      href={file.href}
                      download
                      className="group flex flex-col gap-3 rounded-lg border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-muted p-3 text-muted-foreground group-hover:text-foreground">
                          <img src={file.icon} alt={file.alt} className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{doc.title}</p>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <span className="text-sm text-accent group-hover:text-foreground transition-colors">{t.contact.career.download}</span>
                    </a>
                  )
                })}
              </div>
            </div>


            <p className="mt-8 text-sm text-muted-foreground">
              {t.contact.career.resumeText}{" "}
              <a href="mailto:info@ebtech.kr" className="text-accent hover:text-foreground transition-colors">
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
