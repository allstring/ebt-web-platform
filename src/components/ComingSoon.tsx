import { Link } from "react-router-dom"
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Construction from "lucide-react/dist/esm/icons/construction";
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"

export default function ComingSoon() {
  const { t } = useLocale()

  return (
    <div className="pt-16">
      <section className="py-24 lg:py-32 min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <Link
            to="/solution"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.comingSoon.backLink}
          </Link>

          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-8">
              <Construction className="h-10 w-10 text-muted-foreground" />
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              {t.comingSoon.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {t.comingSoon.description}
            </p>

            <Button asChild variant="outline" className="mt-8 border-border hover:bg-secondary bg-transparent">
              <Link to="/contact">
                {t.comingSoon.contactButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
