import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { scrollToTop } from "./utils"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop("auto")
  }, [pathname])

  return null
}
