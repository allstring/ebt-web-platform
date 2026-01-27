import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "@/styles/global.css"
import { LocaleProvider } from "@/lib/i18n"
import ScrollToTop from "@/lib/ScrollToTop"
import Layout from "./layout"
import AppRoutes from "./routes"
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <Layout>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </Layout>
      <Analytics />
    </LocaleProvider>
  </StrictMode>
)
