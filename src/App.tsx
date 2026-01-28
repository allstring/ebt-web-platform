// ============================================================================
// App - 공통 레이아웃
// 모든 페이지에 적용되는 Navigation, Footer 포함
// ============================================================================

import { Outlet } from "react-router-dom"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AccessGate } from "@/components/access-gate"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation은 항상 보임 */}
      <Navigation />

      {/* 동의 전에는 콘텐츠 숨김 */}
      <AccessGate>
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </AccessGate>
    </div>
  )
}
