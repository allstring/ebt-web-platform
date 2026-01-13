import { Route, Routes } from "react-router-dom"

import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Rnd from "./pages/Rnd"
import NotFound from "./pages/NotFound"

import Solution from "./pages/Solution/Solution"
import Solution_EW from "./pages/Solution/EW/Solution_EW"
import Solution_CW from "./pages/Solution/CW/Solution_CW"
import Solution_BW from "./pages/Solution/BW/Solution_BW"

import Detail_EWS from "./pages/Solution/EW/line_up/Detail_ews"
import Detail_MES from "./pages/Solution/EW/line_up/Detail_mes"
import Detail_PERCEIVE from "./pages/Solution/EW/line_up/Detail_perceive"
import Detail_RESOLVE from "./pages/Solution/EW/line_up/Detail_resolve"
import Detail_LOCATE from "./pages/Solution/EW/line_up/Detail_locate"

import Detail_CPX from "./pages/Solution/CW/line_up/Detail_cpx"
import Detail_NCM from "./pages/Solution/CW/line_up/Detail_ncm"

import Detail_BBATS from "./pages/Solution/BW/line_up/Detail_bbats"

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
        <Route path="solution/electronic-warfare" element={<Solution_EW />} />
        <Route path="solution/electronic-warfare/GoldenBat-EWS" element={<Detail_EWS />} />
        <Route path="solution/electronic-warfare/eBT-MES" element={<Detail_MES />} />
        <Route path="solution/electronic-warfare/PERCEIVE" element={<Detail_PERCEIVE />} />
        <Route path="solution/electronic-warfare/RESOLVE" element={<Detail_RESOLVE />} />
        <Route path="solution/electronic-warfare/LOCATE-T" element={<Detail_LOCATE />} />

        {/* Chemical Warfare */}
        <Route path="solution/chemical-warfare" element={<Solution_CW />} />
        <Route path="solution/chemical-warfare/CHEMPRO-X" element={<Detail_CPX />} />
        <Route path="solution/chemical-warfare/NC MONITORING SYSTEM" element={<Detail_NCM />} />

        {/* Biological Warfare */}
        <Route path="solution/biological-warfare" element={<Solution_BW />} />
        <Route path="solution/biological-warfare/BIOBATS" element={<Detail_BBATS />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
