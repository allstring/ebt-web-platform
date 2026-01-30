export const cpx = {
  title: "ChemPro-X",
  subtitle: "휴대용 화학 탐지기",
  tagline: "XPAND YOUR SAFETY",

  whatIs: {
    title: "CHEMPRO X란?",
    description: "ChemPro-X는 차세대 화학 탐지기로, 현장 작전 중 완벽한 상황 인식을 가능하게 합니다. 내장된 시뮬레이션 훈련 모드와 작전 지침이 포함된 화학물질 데이터베이스를 탑재하여, 어떤 팀이든 CWA(화학무기작용제) 및 TIC(독성산업화학물질)를 탐지하고 분류할 수 있습니다.",
  },

  benefits: {
    title: "주요 특징",
    items: [
      "광범위한 CWA 및 TIC 탐지",
      "무선 네트워크 연결",
      "내장 GPS 및 그룹 위치 추적",
      "시뮬레이션 훈련 모드",
      "화학물질 데이터베이스 및 지침",
      "최적화된 사용성",
      "동급 최저 유지보수 비용",
      "별도 통합 없이 UAV 및 UGV 사용 가능",
      "선택적 CBRN 탐지 기능 확장",
    ],
  },

  specs: {
    title: "제원",
    size: {
      label: "크기",
      value: "약 160 x 100 x 50 mm (6.3\"L x 3.9\"W x 2\"D)",
    },
    weight: {
      label: "중량",
      value: "약 770 g (27 oz.) (Li-Ion 배터리 포함)",
    },
    detection: {
      label: "탐지 기술",
      description: "직교 탐지 방식:",
      items: ["개방형(흡기식) IMS 셀", "다중 반도체 센서"],
    },
    modes: {
      label: "탐지 모드",
      value: "CWA/TICs",
    },
    training: {
      label: "훈련",
      value: "내장 훈련 모드",
    },
    connectivity: {
      label: "연결성",
      items: [
        "WLAN, WPAN, 무선 데이터",
        "USB 메모리 스틱",
        "이더넷 (선택 액세서리)",
        "무선 데이터로 그룹당 최대 10대 연결",
      ],
    },
    milStandard: {
      label: "군사 규격 준수",
      items: ["MIL-STD-810G", "MIL-STD-461G", "MIL-STD-1275D"],
      note: "(전체 테스트 목록은 요청 시 제공)",
    },
    dustWater: {
      label: "방진/방수",
      value: "IP67, MIL-STD-810G",
    },
  },

  application: {
    title: "적용 분야",
    description: "ChemProX는 다용도 화학 탐지기로, 휴대용 장비로 사용하거나 현장 배치 네트워크의 원격 구성 요소로 활용할 수 있습니다. ChemProX의 화학 탐지 성능은 다양한 적용 분야에서 입증되었습니다. 예를 들어, 단독 사용(일반 화학 탐지기로 사용), 그룹 사용, 경계 모니터링 네트워크, 무인 지상/항공 차량 등에서 활용됩니다.",
    items: [
      "긴급 대응팀",
      "군사 작전",
      "드론 탑재",
      "국경 CBRN 모니터링",
      "장갑 CBRN 정찰",
      "경량 CBRN 정찰",
      "대규모 상황",
      "USV CBRN 모니터링"
    ],
  },

  contact: {
    text: "CHEMPRO X에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    emailLabel: "이메일",
    phoneLabel: "전화",
    suffix: "로 문의해 주세요.",
  },
} as const

export type CpxStrings = typeof cpx
