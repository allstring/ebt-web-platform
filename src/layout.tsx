import React, { useEffect } from "react"
import '@/styles/global.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "en"
    document.body.classList.add("font-sans", "antialiased")
  }, [])

  return <>{children}</>
}
