// ============================================================================
// GSAP Configuration
// 앱 전역에서 사용할 GSAP 및 플러그인 설정
// ============================================================================

import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// 플러그인 등록 (앱에서 한 번만 실행)
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
