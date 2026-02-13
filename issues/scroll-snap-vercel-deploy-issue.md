# Vercel 배포 환경에서 스크롤 스냅 미작동 이슈

**상태**: 해결됨
**날짜**: 2026-02-06
**영향 범위**: Home(`/`), About(`/about`), Contact(`/contact`) 페이지의 휠/터치 스크롤 스냅
**파일**: `src/hooks/use-scroll-snap.ts`

---

## 증상

| 환경 | 결과 |
|------|------|
| `npm run dev` (로컬 개발) | 정상 작동 |
| `npm run build && npm run preview` (로컬 프로덕션) | 정상 작동 |
| **Vercel 배포** | **스크롤 스냅 미작동** |

동일한 프로덕션 빌드임에도 Vercel 배포 환경에서만 휠 스크롤 시 섹션 단위 스냅이 동작하지 않고 일반 스크롤처럼 동작함.

---

## 원인 분석

### 1. 섹션 쿼리 타이밍 문제 (주요 원인)

페이지 컴포넌트가 `React.lazy()`로 코드 스플릿되어 있음:

```tsx
// routes.tsx
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
```

기존 `useScrollSnap`은 `useEffect` 실행 시점에 `.snap-section`을 **한 번만 쿼리**하고 클로저에 캐싱했음:

```typescript
// 기존 코드 (문제)
useEffect(() => {
  const sections = Array.from(
    containerRef.current.querySelectorAll(sectionSelector)
  ) as HTMLElement[]

  if (sections.length === 0) return  // ← 여기서 early return → 리스너 등록 안 됨
  // ...
  target.addEventListener("wheel", onWheel, ...)
}, [containerRef, sectionSelector, getCurrentVisibleIndex])
```

- **로컬**: chunk 파일이 디스크에서 로딩되어 거의 즉시 완료 → effect 실행 시점에 섹션이 이미 DOM에 존재
- **Vercel**: chunk 파일을 CDN에서 네트워크로 fetch → 지연 발생 → effect 실행 시점에 섹션이 아직 DOM에 없음 → `sections.length === 0` → early return → **이벤트 리스너 미등록**

리스너가 한 번도 등록되지 않으므로, 이후 섹션이 로드되어도 스크롤 스냅은 영원히 작동하지 않음.

### 2. 이벤트 캡처 레벨 문제 (부차적 원인)

기존 코드는 `document.documentElement`(= `<html>`)에 wheel 리스너를 등록:

```typescript
const target = document.documentElement
target.addEventListener("wheel", onWheel, { passive: false, capture: true })
```

이벤트 캡처 단계 순서: `window` → `document` → `html` → `body` → ...

Vercel이 플랫폼 레벨에서 주입하는 스크립트(Analytics, Speed Insights 등)가 `window`나 `document`에 캡처 리스너를 등록하면, 우리 `html` 레벨 리스너보다 **먼저** 이벤트를 가로챌 수 있음.

### 3. `scrollIntoView` 크로스브라우저 불일치 (부차적 원인)

`scrollIntoView({ behavior: "smooth" })`는 브라우저마다 smooth 스크롤 구현이 다르고, 외부 스크립트가 스크롤 이벤트를 감시할 때 예기치 않은 충돌이 발생할 수 있음.

---

## 해결 방법

### 변경 1: 섹션을 매 이벤트마다 동적 쿼리

```typescript
// 수정 후
useEffect(() => {
  // 매 이벤트마다 섹션을 새로 쿼리 (lazy loading, 조건부 렌더링 대응)
  const getSections = (): HTMLElement[] => {
    if (!containerRef.current) return []
    return Array.from(
      containerRef.current.querySelectorAll(sectionSelector)
    ) as HTMLElement[]
  }

  const onWheel = (e: WheelEvent) => {
    const sections = getSections()  // 매번 fresh 쿼리
    if (sections.length === 0) return  // 섹션 없으면 기본 스크롤 허용
    e.preventDefault()
    // ...
  }

  // 리스너는 항상 등록 (sections 유무와 무관)
  window.addEventListener("wheel", onWheel, { passive: false, capture: true })
  // ...
}, [containerRef, sectionSelector])
```

- 이벤트 리스너는 **항상** 등록
- 핸들러 내부에서 매번 DOM을 쿼리하므로, lazy loading으로 나중에 섹션이 마운트되어도 정상 작동
- 섹션이 없는 시점에는 `return`으로 기본 스크롤 허용 (non-snap 페이지에서도 안전)

### 변경 2: `window` 캡처 단계로 변경 + `stopPropagation`

```typescript
// 기존
document.documentElement.addEventListener("wheel", onWheel, { passive: false, capture: true })

// 수정
window.addEventListener("wheel", onWheel, { passive: false, capture: true })
```

- `window`는 캡처 체인 최상위 → 어떤 외부 스크립트보다 먼저 이벤트를 처리
- `e.stopPropagation()` 추가로 하위 핸들러로의 전파 차단
- `passive: false` 명시 → `preventDefault()` 동작 보장 (Chrome의 window 레벨 passive 기본값을 override)

### 변경 3: `scrollIntoView` → `window.scrollTo`

```typescript
// 기존
targetSection.scrollIntoView({ behavior: "smooth", block: "start" })

// 수정
const targetY = section.getBoundingClientRect().top + window.scrollY
window.scrollTo({ top: targetY, behavior: "smooth" })
```

- `window.scrollTo`는 브라우저 간 동작이 더 일관됨
- 스크롤 위치를 직접 계산하여 더 예측 가능한 결과

### 변경 4: CSS 레벨 스크롤 방지 추가

```typescript
const html = document.documentElement
html.style.overscrollBehavior = "none"

return () => {
  html.style.overscrollBehavior = ""
}
```

- `e.preventDefault()`가 외부 요인으로 실패하더라도 CSS 레벨에서 overscroll 방지
- cleanup에서 원상복구

---

## 핵심 교훈

1. **lazy loading 환경에서 DOM 쿼리를 클로저에 캐싱하면 안 됨** — 네트워크 지연이 있는 환경(CDN 배포)에서는 DOM 준비 시점이 보장되지 않음
2. **로컬에서 되고 배포에서 안 되면**, 빌드 차이보다 **네트워크 타이밍 + 외부 스크립트 주입**을 먼저 의심
3. **이벤트 리스너는 가능한 한 높은 캡처 레벨에 등록**해야 외부 스크립트 간섭에 강건함
