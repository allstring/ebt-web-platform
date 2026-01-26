import { useLocale } from "@/lib/i18n"

interface ProductContactSectionProps {
  text: string
  suffix?: string
  variant?: "default" | "card"
}

export function ProductContactSection({
  text,
  suffix = ".",
  variant = "card",
}: ProductContactSectionProps) {
  const { t } = useLocale()
  const orText = t.detailPageGate?.contact?.or ?? "or"

  return (
    <section
      className={`py-24 lg:py-32 border-t border-border ${variant === "card" ? "bg-card" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {text}
          </p>
          <p className="text-lg text-foreground mt-4">
            <a
              href="mailto:info@ebtech.kr"
              className="font-medium hover:underline hover:text-primary transition-colors"
            >
              info@ebtech.kr
            </a>
            <span className="mx-2 text-muted-foreground">{orText}</span>
            <a
              href="tel:+82317216380"
              className="font-medium hover:underline hover:text-primary transition-colors"
            >
              +82 31 721 6380
            </a>
            {suffix}
          </p>
        </div>
      </div>
    </section>
  )
}
