import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left"
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right"
import X from "lucide-react/dist/esm/icons/x"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  altPrefix?: string
}

export function ImageCarousel({ images, altPrefix = "Image" }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const lightboxPrev = useCallback(() =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length),
    [images.length]
  )
  const lightboxNext = useCallback(() =>
    setLightboxIndex((prev) => (prev + 1) % images.length),
    [images.length]
  )

  // Handle keyboard events for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") lightboxPrev()
      if (e.key === "ArrowRight") lightboxNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, lightboxPrev, lightboxNext])

  if (images.length === 0) return null

  return (
    <>
      {/* Carousel - Compact side layout */}
      <div>
        <div className="relative rounded-lg border border-border overflow-hidden bg-muted/20" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="h-[160px] flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={img}
                    alt={`${altPrefix} ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      const placeholder = document.createElement("div")
                      placeholder.className = "text-muted-foreground flex flex-col items-center gap-2"
                      placeholder.innerHTML = `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs">${altPrefix} ${index + 1}</span>`
                      e.currentTarget.parentElement?.appendChild(placeholder)
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-2">
            <button
              onClick={scrollPrev}
              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[10001] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Image container with padding for navigation */}
          <div className="flex items-center justify-center w-full h-full px-16 md:px-20">
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
                className="absolute left-2 md:left-4 p-2 md:p-3 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            <img
              src={images[lightboxIndex]}
              alt={`${altPrefix} ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxNext() }}
                className="absolute right-2 md:right-4 p-2 md:p-3 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-4 text-white/80 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
