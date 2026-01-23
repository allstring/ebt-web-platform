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
  return (
    <section
      className={`py-24 lg:py-32 border-t border-border ${variant === "card" ? "bg-card" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {text}{" "}
            <br></br>
            <a
              href="mailto:info@ebtech.kr"
              className="text-foreground hover:underline"
            >
              info@ebtech.kr
            </a>{" "}
            or{" "}
            <a
              href="tel:+82317216380"
              className="text-foreground hover:underline"
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
