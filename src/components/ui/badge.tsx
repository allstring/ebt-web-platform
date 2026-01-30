import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  color?: "blue" | "indigo" | "cyan" | "teal" | "grape" | "orange"
  variant?: "light" | "outline"
  size?: "md" | "lg" | "xl"
  leftSection?: React.ReactNode
  className?: string
}

export function Badge({
  children,
  color = "blue",
  variant = "light",
  size = "md",
  leftSection,
  className,
}: BadgeProps) {
  const colorClasses = {
    blue: variant === "light"
      ? "bg-blue-900/30 text-blue-300 light:bg-blue-100 light:text-blue-700"
      : "border-blue-500 text-blue-500",
    indigo: variant === "light"
      ? "bg-indigo-900/30 text-indigo-300 light:bg-indigo-100 light:text-indigo-700"
      : "border-indigo-500 text-indigo-500",
    cyan: variant === "light"
      ? "bg-cyan-900/30 text-cyan-300 light:bg-cyan-100 light:text-cyan-700"
      : "border-cyan-500 text-cyan-500",
    teal: variant === "light"
      ? "bg-teal-900/30 text-teal-300 light:bg-teal-100 light:text-teal-700"
      : "border-teal-500 text-teal-500",
    grape: variant === "light"
      ? "bg-purple-900/30 text-purple-300 light:bg-purple-100 light:text-purple-700"
      : "border-purple-500 text-purple-500",
    orange: variant === "light"
      ? "bg-orange-900/30 text-orange-300 light:bg-orange-100 light:text-orange-700"
      : "border-orange-500 text-orange-500",
  }

  const sizeClasses = {
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
    xl: "px-4 py-1.5 text-sm",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        variant === "outline" && "border bg-transparent",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      {leftSection}
      {children}
    </span>
  )
}
