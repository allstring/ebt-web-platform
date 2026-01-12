import { cn } from "@/lib/utils"

export type ApplicationItemProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  className?: string
  isFull?: boolean
}

export function ApplicationItem({
    imageSrc,
    imageAlt,
    title,
    className,
    isFull = false,
  }: ApplicationItemProps) {
    return (
      <div className={cn("group overflow-hidden rounded-lg border border-border bg-card transition hover:shadow-md", className)}>
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: isFull ? "#DDDCDD" : undefined }} // isFull이면 배경색 적용
        >
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className={cn(
              "transition duration-300 group-hover:scale-105 h-full w-full",
              isFull ? "object-contain" : "object-cover"
            )}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground text-center">{title}</h3>
        </div>
      </div>
    )
  }
  