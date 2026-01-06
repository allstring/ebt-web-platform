import { Link } from 'react-router-dom'

const footerNavigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solution", href: "/solution" },
    { name: "R&D", href: "/rnd" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Electronic Warfare", href: "/solution/electronic-warfare" },
    { name: "Counter-UAS", href: "/solution/counter-uas" },
    { name: "CBRN Detection", href: "/solution/cbrn" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">EBTech</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Advancing defense technology through precision engineering and system integration.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EBTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
