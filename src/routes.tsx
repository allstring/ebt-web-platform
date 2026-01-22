import { Route, Routes } from "react-router-dom"

import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Rnd from "./pages/Rnd"
import NotFound from "./pages/NotFound"

import Solution from "./pages/Solution/Solution"
import Solution_EW from "./pages/Solution/EW/Solution_EW"
import Solution_NC from "./pages/Solution/NC/Solution_NC"
import Solution_CUAS from "./pages/Solution/C-UAS/Solution_CUAS"

import Detail_EWS from "./pages/Solution/EW/line_up/Detail_ews"
import Detail_MES from "./pages/Solution/EW/line_up/Detail_mes"
import Detail_PES from "./pages/Solution/EW/line_up/PESPage"
import Detail_PERCEIVE from "./pages/Solution/EW/line_up/Detail_perceive"
import Detail_RESOLVE from "./pages/Solution/EW/line_up/Detail_resolve"
import Detail_LOCATE from "./pages/Solution/EW/line_up/Detail_locate"
import Detail_DECEIVE from "./pages/Solution/EW/line_up/Detail_deceive"
import Detail_MICROESM from "./pages/Solution/EW/line_up/Detail_microesm"
import Detail_PHOBOSM4 from "./pages/Solution/EW/line_up/Detail_phobosm4"
import Detail_MAPVIEW from "./pages/Solution/EW/line_up/Detail_mapview"

import Detail_SPECTRAC2 from "./pages/Solution/C-UAS/line_up/Detail_spectrac2"
import Detail_CPX from "./pages/Solution/NC/line_up/Detail_cpx"
import Detail_NCM from "./pages/Solution/NC/line_up/Detail_ncm"
import Detail_BBATS from "./pages/Solution/NC/line_up/Detail_bbats"
import Detail_RANIDX from "./pages/Solution/NC/line_up/Detail_ranidx"

export default function AppRoutes() {
  return (
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
        <Route path="solution/ew/PHOBOS M4" element={<Detail_PHOBOSM4 />} />
        <Route path="solution/ew/MAPVIEW" element={<Detail_MAPVIEW />} />

        {/* NC */}
        <Route path="solution/nc" element={<Solution_NC />} />
        <Route path="solution/nc/CHEMPRO-X" element={<Detail_CPX />} />
        <Route path="solution/nc/NC MONITORING SYSTEM" element={<Detail_NCM />} />
        <Route path="solution/nc/RanidX" element={<Detail_RANIDX />} />

        {/* C-UAS */}
        <Route path="solution/c-uas" element={<Solution_CUAS />} />
        <Route path="solution/c-uas/eBT-PES" element={<Detail_PES />} />
        <Route path="solution/c-uas/Spectra-C2" element={<Detail_SPECTRAC2 />} />

        {/* NC - BIOBATS */}
        <Route path="solution/nc/BIOBATS" element={<Detail_BBATS />} />

        {/* For Debug */}
        {/* <Route path="test" element={<Test_Radar/>} /> */}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
