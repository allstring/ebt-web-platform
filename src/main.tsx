import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './lib/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import News from './pages/News'
import Rnd from './pages/Rnd'
import Solution from './pages/Solution/Solution'
import Solution_BW from './pages/Solution/BW/Solution_BW.tsx'
import Solution_CW from './pages/Solution/CW/Solution_CW.tsx'
import Solution_EW from './pages/Solution/EW/Solution_EW.tsx'
import Detail_EWS from './pages/Solution/EW/line_up/Detail_ews.tsx'
import Detail_MES from './pages/Solution/EW/line_up/Detail_mes.tsx'
import Detail_PERCEIVE from './pages/Solution/EW/line_up/Detail_perceive.tsx'
import Detail_RESOLVE from './pages/Solution/EW/line_up/Detail_resolve.tsx'
import Detail_LOCATE from './pages/Solution/EW/line_up/Detail_locate.tsx'

import Detail_CPX from './pages/Solution/CW/line_up/Detail_cpx.tsx'
import Detail_NCM from './pages/Solution/CW/line_up/Detail_ncm.tsx'

import Deatil_BBATS from './pages/Solution/BW/line_up/Detail_bbats.tsx'

import Layout from './layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="news" element={<News />} /> */}
            <Route path="rnd" element={<Rnd />} />
            <Route path="solution" element={<Solution />} />
            <Route path="solution/electronic-warfare" element={<Solution_EW />} />
            <Route path="solution/chemical-warfare" element={<Solution_CW />} />
            <Route path="solution/biological-warfare" element={<Solution_BW />} />
            <Route path="solution/electronic-warfare/GoldenBat-EWS" element={<Detail_EWS/>} />
      
            <Route path="solution/electronic-warfare/eBT-MES" element={<Detail_MES/>} />
            <Route path="solution/electronic-warfare/PERCEIVE" element={<Detail_PERCEIVE/>} />
            <Route path="solution/electronic-warfare/RESOLVE" element={<Detail_RESOLVE/>} />
            <Route path="solution/electronic-warfare/LOCATE-T" element={<Detail_LOCATE/>} />

            <Route path="solution/chemical-warfare/CHEMPRO-X" element={<Detail_CPX/>} />
            <Route path="solution/chemical-warfare/NC MONITORING SYSTEM" element={<Detail_NCM/>} />

            <Route path="solution/biological-warfare/BIOBATS" element={<Deatil_BBATS/> } />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>,
)
