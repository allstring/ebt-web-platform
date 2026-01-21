import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export type ProductCardItem = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt?: string
  imageClassName?: string
  href?: string
  classified?: boolean
}

type ProductCardProps = ProductCardItem & {
  className?: string
}

export function ProductCard({ title, subtitle, imageSrc, imageAlt, imageClassName, href, className, classified }: ProductCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] bg-muted/40 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className={cn("h-full w-full object-cover transition duration-300 group-hover:scale-105", imageClassName)}
          loading="lazy"
        />
        {classified && (
          <>
            {/* 스캔라인 오버레이 */}
            <div
              // 1. opacity-30 제거 (완전 불투명해짐)
              className="absolute inset-0 pointer-events-none opacity-90"
              style={{
                // 2. gradient 변경:
                // - transparent를 완전 검은색(#000000)으로 변경
                // - 줄무늬 색상을 아주 진한 회색(#222222)으로 변경하여 미세한 패턴 유지
                background: 'repeating-linear-gradient(0deg, #000000, #000000 2px, #222222 2px, #222222 4px)'
              }}
            />
            {/* 그린 틴트 오버레이 */}
            <div className="absolute inset-0 pointer-events-none bg-emerald-900/10 mix-blend-overlay" />
            {/* 코너 브라켓 */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-500/60" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-emerald-500/60" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-emerald-500/60" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-emerald-500/60" />
            {/* CLASSIFIED 라벨 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-red-600/80 backdrop-blur-sm">
              <span className="text-xs font-mono font-bold tracking-widest text-white">CLASSIFIED</span>
            </div>
          </>
        )}
      </div>
      <div className="p-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{subtitle}</p>
        <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        to={href}
        className={cn(
          "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md m-4 block",
          className,
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md m-4",
        className,
      )}
    >
      {content}
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
