import { cn } from "@/lib/utils"

export type ProductCardItem = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt?: string
}

type ProductCardProps = ProductCardItem & {
  className?: string
}

export function ProductCard({ title, subtitle, imageSrc, imageAlt, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md m-4",
        className,
      )}
    >
      <div className="relative aspect-[4/3] bg-muted/40">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{subtitle}</p>
        <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
      </div>
    </article>
  )
}

type ProductGridProps = {
  items: ProductCardItem[]
  className?: string
}

export function ProductGrid({ items, className }: ProductGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item) => (
        <ProductCard key={item.title} {...item} />
      ))}
    </div>
  )
}
