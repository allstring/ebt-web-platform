import { Mail, Phone } from "lucide-react"
import { useLocale } from "@/lib/i18n"

interface ProductContactSectionProps {
  variant?: "default" | "card"
}

export function ProductContactSection({
  variant = "card",
}: ProductContactSectionProps) {
  const { t } = useLocale()
  const contact = t.detailPageGate?.contact

  return (
    <section
      className={`py-20 lg:py-28 border-t border-border ${variant === "card" ? "bg-card" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            {contact?.title ?? "Contact Us for Details"}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {/* Email */}
            <a
              href="mailto:info@ebtech.kr"
              className="group flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {contact?.email ?? "Email"}
                </p>
                <p className="font-medium">info@ebtech.kr</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+82317216380"
              className="group flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {contact?.phone ?? "Phone"}
                </p>
                <p className="font-medium">+82 31 721 6380</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
