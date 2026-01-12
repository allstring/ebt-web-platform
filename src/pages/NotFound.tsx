import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"

export default function NotFound() {
  const { t } = useLocale()
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="text-9xl font-bold text-muted-foreground/30">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            {t.notFound.title}
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.notFound.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                {t.notFound.goHome}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent">
              <Link to="#" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.notFound.goBack}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
