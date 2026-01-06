import { Download, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const news = [
  {
    date: "2024-12-15",
    title: "EBTech Announces Partnership Expansion",
    category: "Company",
  },
  {
    date: "2024-11-20",
    title: "IDEX 2024 Exhibition Participation",
    category: "Event",
  },
  {
    date: "2024-10-08",
    title: "RESOLVE Platform Update Released",
    category: "Company",
  },
  {
    date: "2024-09-15",
    title: "Defense Technology Conference Seoul 2024",
    category: "Event",
  },
  {
    date: "2024-08-22",
    title: "New Counter-UAS Capabilities Announced",
    category: "Company",
  },
]

const media = [
  {
    date: "2024-11-28",
    title: "Defense Industry Innovation Leaders",
    source: "Korea Defense Daily",
    external: true,
  },
  {
    date: "2024-10-15",
    title: "Electronic Warfare Systems Overview",
    source: "Military Technology Review",
    external: true,
  },
  {
    date: "2024-09-02",
    title: "Counter-UAS Market Analysis",
    source: "Defense Analysis Weekly",
    external: true,
  },
]

const downloads = [
  {
    title: "Company Brochure",
    description: "Overview of EBTech capabilities and solutions",
    format: "PDF",
    size: "2.4 MB",
  },
  {
    title: "RESOLVE Datasheet",
    description: "Technical specifications for the RESOLVE platform",
    format: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Electronic Warfare Overview",
    description: "EW system capabilities and applications",
    format: "PDF",
    size: "1.2 MB",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">News & Media</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">Updates and Resources</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Company announcements, event participation, and downloadable resources.
              </p>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">News</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Company Updates</h2>
            </div>

            <div className="divide-y divide-border">
              {news.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 py-6">
                  <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">{formatDate(item.date)}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 w-fit">
                    {item.category}
                  </span>
                  <p className="text-foreground flex-1">{item.title}</p>
                </div>
              ))}
            </div>

            {news.length === 0 && <p className="text-muted-foreground text-center py-12">No news items available.</p>}
          </div>
        </section>

        {/* Media */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Media</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Press Coverage</h2>
            </div>

            <div className="divide-y divide-border">
              {media.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 py-6">
                  <span className="text-sm font-mono text-muted-foreground w-28 shrink-0">{formatDate(item.date)}</span>
                  <p className="text-foreground flex-1">{item.title}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {item.source}
                    {item.external && <ExternalLink className="h-3 w-3" />}
                  </div>
                </div>
              ))}
            </div>

            {media.length === 0 && (
              <p className="text-muted-foreground text-center py-12">No media coverage available.</p>
            )}
          </div>
        </section>

        {/* Downloads */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Downloads</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloads.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border border-border group hover:border-muted-foreground/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{item.format}</span>
                    <span>·</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
