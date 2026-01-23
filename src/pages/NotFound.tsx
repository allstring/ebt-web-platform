import { Link } from "react-router-dom"
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Home from "lucide-react/dist/esm/icons/home";
import { Button } from "@/components/ui/button"
import notFoundImg from "@/assets/images/404/404.jpg"

export default function NotFound() {
  return (
    <div className="flex-1 relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={notFoundImg}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Light: white overlay / Dark: dark overlay */}
        <div className="absolute inset-0 light:bg-white/50 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <p className="text-sm sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-foreground/50 mb-2 sm:mb-4">
          Signal Lost
        </p>
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
          404
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-foreground/60 mt-2 sm:mt-4 font-light">
          Page Not Found
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-8 sm:mt-12 w-full sm:w-auto px-4 sm:px-0">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
