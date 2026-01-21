export const phobosm4 = {
  title: "Phobos M4",
  subtitle: "광대역 레이더 기반 전술 전자지원 시스템",
  tagline: "전술 레이더 전자지원 시스템",

  whatIs: {
    title: "Phobos M4란?",
    description: "Phobos M4는 현대 전장 환경에서의 전자기 위협을 실시간으로 탐지·식별하기 위한 레이더 ESM/RWR 솔루션입니다. Phobos M4는 패시브 방식의 전방위 레이더 신호 감지 및 분석 기능을 통해 적 레이더의 존재와 특성을 신속하게 파악하며, 다양한 군사 플랫폼에서 은밀하면서도 신뢰성 높은 전자지원(ESM) 능력을 제공합니다. 실전 운용을 고려한 소형·경량 설계와 검증된 성능을 바탕으로, 전술 의사결정과 생존성을 효과적으로 향상시키는 시스템입니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "전방위 상황 인식",
        description: "360° 감지를 통한 전체 전자기 위협 상황 파악",
      },
      {
        title: "광대역 수신 능력",
        description: "광범위한 주파수 대역 감지로 다양한 레이더 신호 대응",
      },
      {
        title: "정밀 방향·위치 측정",
        description: "방위 분석 기반의 위협 위치 추정",
      },
      {
        title: "통합 SIGINT 제공",
        description: "실시간 신호 분석을 통한 종합 SIGINT 상황 정보 제공",
      },
      {
        title: "패시브 운용",
        description: "신호 송신 없이 은밀한 감시 수행",
      },
      {
        title: "경량·소형 설계",
        description: "휴대 및 탑재가 용이한 SWaP 최적화 구조",
      },
      {
        title: "맨팩(MANPACK) 운용 가능",
        description: "병력 단독 운용이 가능한 휴대형 구성",
      },
      {
        title: "플랫폼 확장성",
        description: "차량·함정·무인체계 등 다양한 플랫폼 적용",
      },
    ],
  },

  specs: {
    title: "제원",
    concept: {
      label: "운용 개념",
      value: "패시브 레이더 기반 전술 전자지원(ESM / SIGINT) 시스템",
    },
    freqRange: {
      label: "주파수 범위",
      value: "2 ~ 18 GHz (광대역 연속 커버리지)",
    },
    detectionMethod: {
      label: "감지 방식",
      value: "전방위(360°) 패시브 수신",
    },
    aoaAccuracy: {
      label: "방위 측정 정확도",
      value: "≤ 3° rms (typ.)",
    },
    freqAccuracy: {
      label: "주파수 측정 정확도",
      value: "< 4.5 MHz rms",
    },
    minPulseWidth: {
      label: "최소 펄스폭",
      value: "≥ 70 ns (조건부 50 ns)",
    },
    pulseProcessing: {
      label: "펄스 처리 능력",
      value: "최대 1,000,000 pulses/sec",
    },
    simultaneousTracking: {
      label: "동시 추적 능력",
      value: "최대 500개 신호 동시 추적",
    },
    emitterLibrary: {
      label: "에미터 라이브러리",
      value: "≥ 5,000개 에미터 모드 저장",
    },
    responseTime: {
      label: "시스템 반응 시간",
      value: "< 1초 (입력 → 디스플레이)",
    },
    power: {
      label: "전원 입력",
      value: "9–36 V DC (24 V DC nominal), AC 옵션 가능",
    },
    consumption: {
      label: "소비 전력",
      value: "약 80 W (정상 운용 기준)",
    },
    temperature: {
      label: "동작 온도",
      value: "-40 °C ~ +55 °C",
    },
    weight: {
      label: "중량",
      value: "본체 약 12 kg (MANPACK 운용 가능)",
    },
    deployment: {
      label: "운용 형태",
      value: "고정 / 차량 / 함정 / 휴대형(MANPACK)",
    },
  },

  contact: {
    text: "Phobos M4에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type Phobosm4Strings = typeof phobosm4
