// ============================================================================
// App - 공통 레이아웃
// 모든 페이지에 적용되는 Navigation, Footer 포함
// 스크롤 스냅은 특정 페이지(Home, About, Contact)에서만 적용
// ============================================================================

import { Outlet, useLocation } from "react-router-dom"
import { useRef } from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AccessGate } from "@/components/access-gate"
import { useScrollSnap } from "@/hooks/use-scroll-snap"

// 스크롤 스냅을 사용하는 페이지 경로
const SCROLL_SNAP_ROUTES = ["/", "/about", "/contact"]

export default function App() {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)

  // 현재 페이지가 스크롤 스냅 페이지인지 확인
  const isScrollSnapPage = SCROLL_SNAP_ROUTES.includes(location.pathname)

  // 스크롤 스냅 페이지에서만 적용
  useScrollSnap(
    isScrollSnapPage ? containerRef : { current: null },
    ".snap-section"
  )

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
        <div ref={containerRef} className="flex-1 flex flex-col">
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Outlet />
          </main>
          <Footer asSnapSection={isScrollSnapPage} />
        </div>
      </AccessGate>
    </div>
  )
}
