// ============================================================================
// App - 공통 레이아웃
// 모든 페이지에 적용되는 Navigation, Footer 포함
// ============================================================================

import { Outlet } from "react-router-dom"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* 페이지 콘텐츠 */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
