export const microesm = {
  title: "MicroESM",
  subtitle: "초소형 전술 전자지원 시스템",
  tagline: "전술 레이더 전자지원",

  whatIs: {
    title: "MicroESM이란?",
    description: "MicroESM은 전술 전자지원(ESM) 및 전자정보(ELINT) 능력 강화를 위한 초소형·분산형 전술 전자전 솔루션입니다. MicroESM은 저SWaP(Small Size, Weight and Power) 기반의 실전형 레이더 전자지원 시스템으로, 대형 플랫폼에 의존해 온 기존 RESM 체계의 한계를 극복합니다. 병사 휴대, 무인항공기(UAV), 지상·해상 무인체계 등 다양한 플랫폼에 탑재 가능하며, 레이더 신호를 수동적으로 탐지·식별하고 방위를 산출하여 전술적 의사결정을 지원합니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "광대역 전자기 감시",
        description: "신호를 탐지하여 전체 SIGINT 상황 인식 제공",
      },
      {
        title: "정확한 위치 및 방위 산출",
        description: "다중 안테나 기반 방위 측정으로 전술적 위협 위치 파악",
      },
      {
        title: "전술 전자지원(ESM) 특화",
        description: "레이더 탐지·식별·추적을 통한 실시간 전자정보(ELINT) 획득",
      },
      {
        title: "초경량·휴대형 설계",
        description: "2kg 미만의 맨팩(MANPACK) 형태로 병사 단독 운용 가능",
      },
      {
        title: "완전 자동화 운용",
        description: "비전문 인력도 즉시 사용 가능한 자동 신호 분석 및 식별",
      },
      {
        title: "저피탐·저전력 운용",
        description: "낮은 전력 소모와 열 방출로 은밀한 전술 운용 가능",
      },
      {
        title: "다중 플랫폼 통합",
        description: "병사 휴대, UAV, 차량·무인체계 등 다양한 플랫폼 탑재 지원",
      },
      {
        title: "분산·네트워크 확장성",
        description: "다수 센서 연동을 통해 전장 전반의 전자기 상황 통합 인식",
      },
    ],
  },

  specs: {
    title: "제원",
    categories: {
      performance: {
        title: "성능",
        items: [
          { label: "운용 개념", value: "전술 전자지원(ESM) / 전자정보(ELINT)" },
          { label: "주파수", value: "2.0 ~ 18.0 GHz" },
          { label: "탐지 방식", value: "수동 탐지 및 자동 식별" },
          { label: "방위 측정", value: "360° / 7° rms" },
          { label: "감도", value: "-55 dBm (방위 포함) / -70 dBm (CW)" },
          { label: "신호 처리", value: "최대 200,000 pulses/sec" },
          { label: "라이브러리", value: "200개 모드 라인 (확장 가능)" },
          { label: "동시 추적", value: "최대 100개" },
        ],
      },
      physical: {
        title: "물리적 특성",
        items: [
          { label: "전력", value: "< 20 W (최대)" },
          { label: "전원", value: "10 ~ 18 V DC" },
          { label: "배터리", value: "최대 12시간" },
          { label: "크기", value: "180 × 180 × 96 mm" },
          { label: "중량", value: "< 2 kg" },
          { label: "환경", value: "IP68" },
        ],
      },
      platform: {
        title: "플랫폼",
        value: "병사 휴대, UAV, 차량, 무인체계",
      },
    },
  },

  contact: {
    text: "MicroESM에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type MicroesmStrings = typeof microesm
