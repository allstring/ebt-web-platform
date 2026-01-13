import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  if (typeof window === "undefined") return
  window.scrollTo({ top: 0, left: 0, behavior })
}
