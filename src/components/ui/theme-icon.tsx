import { cn } from "@/lib/utils"

interface ThemeIconProps {
  children: React.ReactNode
  size?: number
  color?: "blue" | "teal" | "grape" | "orange"
  variant?: "light" | "gradient"
  radius?: "md" | "xl"
  gradient?: { from: string; to: string }
  className?: string
}

export function ThemeIcon({
  children,
  size = 40,
  color = "blue",
  variant = "light",
  radius = "md",
  gradient,
  className,
}: ThemeIconProps) {
  const colorClasses = {
    blue: "bg-blue-900/30 text-blue-400 light:bg-blue-100 light:text-blue-600",
    teal: "bg-teal-900/30 text-teal-400 light:bg-teal-100 light:text-teal-600",
    grape: "bg-purple-900/30 text-purple-400 light:bg-purple-100 light:text-purple-600",
    orange: "bg-orange-900/30 text-orange-400 light:bg-orange-100 light:text-orange-600",
  }

  const radiusClasses = {
    md: "rounded-md",
    xl: "rounded-full",
  }

  const gradientStyles = gradient
    ? {
        background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
        "--tw-gradient-from": gradient.from === "blue" ? "#3b82f6" : gradient.from === "grape" ? "#a855f7" : gradient.from,
        "--tw-gradient-to": gradient.to === "cyan" ? "#06b6d4" : gradient.to === "violet" ? "#8b5cf6" : gradient.to,
      } as React.CSSProperties
    : undefined

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        radiusClasses[radius],
        variant === "light" && colorClasses[color],
        variant === "gradient" && "text-white",
        className
      )}
      style={{
        width: size,
        height: size,
        ...gradientStyles,
      }}
    >
      {children}
    </div>
  )
}
