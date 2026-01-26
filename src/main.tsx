import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "@/styles/global.css"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { LocaleProvider } from "@/lib/i18n"
import ScrollToTop from "@/lib/ScrollToTop"
import Layout from "./layout"
import AppRoutes from "./routes"
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <LocaleProvider>
        <Layout>
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </Layout>
        <Analytics />
      </LocaleProvider>
    </MantineProvider>
  </StrictMode>
)
