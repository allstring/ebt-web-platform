export const solution = {
  label: "솔루션",
  title: "현장의 문제를 해결하는 국방 시스템",
  description:
    "EBT의 모든 솔루션은 실제 작전 현장의 까다로운 요구사항을 반영합니다. 실전 투입을 위해 설계된 하드웨어와 소프트웨어의 완벽한 통합을 경험해 보십시오.",
  learnMore: "자세히 보기",
  backToSolutions: "전체 솔루션",
  electronicWarfare: {
    label: "EW",
    title: "전자기전 대응",
    summary:
      "복잡한 전자기 환경에서의 정밀한 신호 처리 및 효율적인 주파수 대역 관리 솔루션을 제공합니다.",
  },
  chemicalWarfare: {
    label: "NC",
    title: "화학전 대응",
    summary:
      "고위험 작전 환경 내 화학 작용제를 실시간으로 탐지하고 식별하며 모니터링하는 첨단 시스템입니다.",
  },
  counterUAS: {
    label: "C-UAS",
    title: "대드론전 대응",
    summary:
      "무인 항공기 위협을 조기에 탐지하고, 식별 및 무력화하여 핵심 자산과 인원을 보호합니다.",
  },

  // NC 페이지
  ncPage: {
    header: {
      label: "솔루션",
      title: "NC 방어",
      description: "핵 및 화학 위협에 대한 종합적인 탐지 시스템으로, 신속한 식별, 경보 및 대응을 위한 통합 모니터링 솔루션을 제공합니다.",
    },
    architecture: {
      label: "시스템 구성",
      title: "통합 탐지 네트워크",
      description: "탐지 센서, 경보 장치, 제어 시스템의 원활한 통합으로 포괄적인 모니터링과 신속한 대응을 지원합니다.",
      hoverTitle: "제품 라인업 보기",
      hoverSubtitle: "클릭하여 구성품 확인",
      footer: "통합 구성 예시",
    },
    products: {
      label: "제품 라인업",
      title: "탐지 시스템",
      chemproX: "휴대용 화학 탐지기",
      ncMonitoring: "통합 탐지 및 제어 플랫폼",
      biobats: "스마트 생물학적 탐지 및 조기 경보 시스템",
    },
    protection: {
      label: "방어 개념",
      title: "통합 NC 방어 체계",
      items: [
        {
          name: "조기 탐지",
          description: "신경, 수포, 질식 작용제에 대한 다중 센서 탐지 및 지속적인 공기/표면 샘플링.",
        },
        {
          name: "위협 식별",
          description: "알려진/미지의 화학 시그니처에 대한 작용제 라이브러리 상관분석 및 자동 경보.",
        },
        {
          name: "격리 및 차단",
          description: "고온/온열/저온 구역 설정, 환기 격리, 노출 감소를 위한 인원 경로 지정.",
        },
        {
          name: "제독 및 복구",
          description: "안전한 재진입을 위한 제독 워크플로우 가이드, 중화 추적 및 허가 기준.",
        },
      ],
    },
    contact: {
      label: "문의",
      title: "NC 방어 솔루션",
      description: "통합 NC 탐지 및 모니터링 솔루션을 살펴보세요. 기술 사양 및 배치 옵션에 대해 문의해 주세요.",
      button: "문의하기",
    },
  },
} as const

export type SolutionStrings = typeof solution