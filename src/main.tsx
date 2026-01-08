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
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>,
)
