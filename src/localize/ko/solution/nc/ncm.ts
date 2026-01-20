export const ncm = {
  title: "NC MONITORING SYSTEM",
  subtitle: "탐지 시스템 호환 화학 탐지기",
  tagline: "ONE DETECTOR TO BIND THEM ALL",

  whatIs: {
    title: "NC MONITORING SYSTEM이란?",
    descriptions: [
      "하나의 탐지기로 모든 것을 통합합니다. NC MONITORING SYSTEM은 고정 설치용 화학 탐지기로, 독립 사용과 시스템 통합이 모두 가능하며, 전체 CBRN 시스템 상태를 표시하는 로컬 디스플레이를 갖추고 있습니다.",
      "다재다능한 장비로 설계 및 개발된 NC MONITORING SYSTEM은 CWA 및 TIC를 상시 모니터링, 탐지 및 분류하면서, 다른 시스템 구성 요소 간 통신을 위한 네트워크 허브 역할을 수행합니다.",
      "NC MONITORING SYSTEM은 화학 탐지기 성능과 CBRN 시스템 모니터링 기능을 결합합니다. 연결된 모든 CBRN 시스템 네트워크 장치의 상태를 ChemProX-DS 사용자 인터페이스에서 확인할 수 있습니다. 업계 최고 수준의 감도와 오경보 방지 기능을 갖춘 NC MONITORING SYSTEM은 동급 최고의 사용 편의성과 저유지보수 패키지입니다.",
    ],
  },

  features: {
    title: "주요 기능",
    items: [
      "24/7 화학물질 탐지 (CWA/TICs)",
      "감마선 및 중성자 탐지",
      "다양한 통신 및 연결성",
      "전체 시스템 상태를 표시하는 로컬 디스플레이",
      "운용자 안내를 위한 내장 유지보수 및 지침 도구",
      "실내외 적용을 위한 견고한 설계",
      "서드파티 시스템 통합 (Modbus 인터페이스)",
      "자동 릴레이 제어",
      "이전 Environics 시스템과 호환",
      "온라인 소프트웨어 업데이트 가능",
    ],
  },

  systemConfig: {
    title: "시스템 구성",
  },

  specs: {
    title: "제원",
    chemproDS: {
      title: "(ChemPro-X DS)",
      size: { label: "크기", value: "약 240 x 230 x 78 mm (9.4\"L x 9\"W x 3\"D)" },
      weight: { label: "중량", value: "약 2.5 kg (88.9 oz)" },
      detection: {
        label: "탐지 기술",
        description: "직교 탐지 방식:",
        items: [
          "개방형(흡기식) IMS 셀",
          "다중 반도체 센서",
          "면제 한도 이하 Ni-63 (90MBq) 방사선원",
        ],
      },
      modes: { label: "탐지 모드", value: "CWA, TIC" },
      power: { label: "전원", value: "9-33 VDC (MIL-STD-1275)" },
      interface: {
        label: "인터페이스 프로토콜",
        items: ["Modbus TCP/IP (Ethernet)", "Modbus RTU (RS-485/RS-422)"],
      },
    },
    radioactive: {
      title: "(방사선 탐지기)",
      gamma: {
        title: "센서 (감마선)",
        type: { label: "타입", value: "NaI(Tl) 신틸레이터(저범위) 온도 보상 5단계 에너지 보상 반도체(고범위)" },
        range: { label: "범위", value: "0.001 uSv/h ~ 4 Sv/h", error: "오차 <15%" },
        sensitivity: { label: "감도", value: "> 30000 cpm/uSv/h" },
        energyRange: { label: "에너지 범위", value: "50 keV ~ 3000 keV" },
        responseTime: { label: "응답 시간", value: "< 2s" },
      },
      neutron: {
        title: "센서 (중성자)",
        type: { label: "타입", value: "6LiF + ZnS:Ag 신틸레이터" },
        range: { label: "범위", value: "0~ 1,000,000 CPM" },
        efficiency: { label: "효율", thermal: "열중성자 : > 55%", fast: "고속 중성자 : >1%" },
        rangeAlt: { label: "범위", value: "1 uSv/h ~ 10 Sv/h" },
        energy: { label: "에너지", value: "0.025 eV ~ 10 Mev" },
      },
      other: {
        title: "기타",
        power: { label: "전원", value: "DC 9~ 18V 전력 <3W" },
        communication: { label: "통신", value: "RS485, RS232, 9600 bps, 8bit, 1stop, No" },
        size: {
          label: "크기",
          body: "본체 : dia 51mm X h 187 mm ~ 1200 g",
          stand: "스탠드 : dia 150 mm x h 133mm ~150 g",
        },
        material: {
          label: "재질",
          body: "본체 : SUS304 (두께 2mm)",
          stand: "스탠드 : ABS(검정) - 3D 프린팅",
        },
        misc: {
          label: "기타 사항",
          startTime: "시작 시간 : < 30 sec",
          protection: "보호 등급 : IP67",
          operationTemp: "작동 온도 : -30 ~ 50 'C",
          shelfTemp: "보관 온도 : -40 ~70 'C",
        },
      },
    },
  },

  application: {
    title: "적용 분야",
    description: "NC Monitoring System은 가혹하고 까다로운 환경 조건을 견딜 수 있도록 견고한 하우징으로 설계되어, 이동식 및 고정식 탐지 시스템에 적합합니다. 여기에는 함정, 군용 차량, 주요 기반시설 등의 플랫폼이 포함됩니다.",
    items: [
      "해군 및 해양 CBRN 모니터링",
      "장갑 CBRN 정찰",
      "장갑 CBRN 모니터링",
      "경량 CBRN 정찰",
      "건물 CBRN 모니터링",
      "대피소 CBRN 모니터링",
    ],
  },

  contact: {
    text: "NC MONITORING SYSTEM에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type NcmStrings = typeof ncm
