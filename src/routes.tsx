import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import App from "./App"

// ============================================================================
// Loading Fallback Component
// ============================================================================

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    </div>
  )
}

// ============================================================================
// Lazy-loaded Page Components
// ============================================================================

// Main Pages
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Rnd = lazy(() => import("./pages/Rnd"))
const NotFound = lazy(() => import("./pages/NotFound"))

// Solution Pages
const Solution = lazy(() => import("./pages/Solution/Solution"))
const Solution_EW = lazy(() => import("./pages/Solution/EW/Solution_EW"))
const Solution_NC = lazy(() => import("./pages/Solution/NC/Solution_NC"))
const Solution_CUAS = lazy(() => import("./pages/Solution/C-UAS/Solution_CUAS"))

// EW Detail Pages
const Detail_EWS = lazy(() => import("./pages/Solution/EW/line_up/Detail_ews"))
const Detail_MES = lazy(() => import("./pages/Solution/EW/line_up/Detail_mes"))
const Detail_PES = lazy(() => import("./pages/Solution/EW/line_up/PESPage"))
const Detail_PERCEIVE = lazy(() => import("./pages/Solution/EW/line_up/Detail_perceive"))
const Detail_RESOLVE = lazy(() => import("./pages/Solution/EW/line_up/Detail_resolve"))
const Detail_LOCATE = lazy(() => import("./pages/Solution/EW/line_up/Detail_locate"))
const Detail_DECEIVE = lazy(() => import("./pages/Solution/EW/line_up/Detail_deceive"))
const Detail_MICROESM = lazy(() => import("./pages/Solution/EW/line_up/Detail_microesm"))
const Detail_PHOBOSM4 = lazy(() => import("./pages/Solution/EW/line_up/Detail_phobosm4"))
const Detail_MAPVIEW = lazy(() => import("./pages/Solution/EW/line_up/Detail_mapview"))

// C-UAS Detail Pages
const Detail_SPECTRAC2 = lazy(() => import("./pages/Solution/C-UAS/line_up/Detail_spectrac2"))

// NC Detail Pages
const Detail_CPX = lazy(() => import("./pages/Solution/NC/line_up/Detail_cpx"))
const Detail_NCM = lazy(() => import("./pages/Solution/NC/line_up/Detail_ncm"))
const Detail_BBATS = lazy(() => import("./pages/Solution/NC/line_up/Detail_bbats"))
const Detail_RANIDX = lazy(() => import("./pages/Solution/NC/line_up/Detail_ranidx"))

// ============================================================================
// Routes Component
// ============================================================================

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rnd" element={<Rnd />} />

          {/* Solution */}
          <Route path="solution" element={<Solution />} />

          {/* Electronic Warfare */}
          <Route path="solution/ew" element={<Solution_EW />} />
          <Route path="solution/ew/GoldenBat-EWS" element={<Detail_EWS />} />
          <Route path="solution/ew/eBT-MES" element={<Detail_MES />} />
          <Route path="solution/ew/PERCEIVE" element={<Detail_PERCEIVE />} />
          <Route path="solution/ew/RESOLVE" element={<Detail_RESOLVE />} />
          <Route path="solution/ew/LOCATE-T" element={<Detail_LOCATE />} />
          <Route path="solution/ew/DECEIVE" element={<Detail_DECEIVE />} />
          <Route path="solution/ew/MicroESM" element={<Detail_MICROESM />} />
          <Route path="solution/ew/PHOBOS-M4" element={<Detail_PHOBOSM4 />} />
          <Route path="solution/ew/MAPVIEW" element={<Detail_MAPVIEW />} />

          {/* NC */}
          <Route path="solution/nc" element={<Solution_NC />} />
          <Route path="solution/nc/CHEMPRO-X" element={<Detail_CPX />} />
          <Route path="solution/nc/NC-MONITORING-SYSTEM" element={<Detail_NCM />} />
          <Route path="solution/nc/RanidX" element={<Detail_RANIDX />} />

          {/* C-UAS */}
          <Route path="solution/c-uas" element={<Solution_CUAS />} />
          <Route path="solution/c-uas/eBT-PES" element={<Detail_PES />} />
          <Route path="solution/c-uas/Spectra-C2" element={<Detail_SPECTRAC2 />} />

          {/* NC - BIOBATS */}
          <Route path="solution/nc/BIOBATS" element={<Detail_BBATS />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
