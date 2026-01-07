import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './lib/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import Rnd from './pages/Rnd'
import Solution from './pages/Solution/Solution'
import Solution_Cbrn from './pages/Solution/Solution_Cbrn'
import Solution_CUAS from './pages/Solution/Solution_CUAS'
import Solution_EW from './pages/Solution/Solution_EW'
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
            <Route path="news" element={<News />} />
            <Route path="rnd" element={<Rnd />} />
            <Route path="solution" element={<Solution />} />
            <Route path="solution/electronic-warfare" element={<Solution_EW />} />
            <Route path="solution/counter-uas" element={<Solution_CUAS />} />
            <Route path="solution/cbrn" element={<Solution_Cbrn />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>,
)
