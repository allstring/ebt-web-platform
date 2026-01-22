export const deceive = {
  title: "EM-Vis Deceive®",
  subtitle: "휴대형 다기능 CEMA 플랫폼",
  tagline: "전술 환경에서 전자기만과 SIGINT 기반 상황 인식을 동시에 제공하는 차세대 전술 전자전 시스템",

  whatIs: {
    title: "EM-Vis Deceive®란?",
    description: "EM-Vis Deceive®는 Roke가 개발한 휴대형(Person-Borne) 전술 전자기만 및 전자지원(CEMA) 플랫폼입니다. 복잡하고 혼잡한 전자기 스펙트럼 환경에서 적의 감시·정찰 및 표적획득 체계를 기만하고, 동시에 SIGINT 기반 상황 인식을 제공하도록 설계된 다기능 전술 전자전 시스템입니다. 모듈형·개방형 아키텍처(Open Architecture) 기반으로, 임무 요구에 따라 주파수 구성, RF 출력, 탑재 모듈을 유연하게 구성할 수 있으며, 하차 보병이 운용 가능한 경량 맨팩 형태로 전술 현장에서의 기동성과 생존성을 극대화합니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "전체 상황 파악",
        description: "광대역 SIGINT 기반 전장 상황 인식 제공.",
      },
      {
        title: "전자기만 운용",
        description: "가짜 신호·표적 생성으로 적 센서 판단 교란.",
      },
      {
        title: "다기능 CEMA 플랫폼",
        description: "전자지원(ES) 및 전자기만(ED) 임무 동시 수행.",
      },
      {
        title: "모듈형 개방 아키텍처",
        description: "SOSA™ / OpenVPX™ 기반 임무 맞춤 구성.",
      },
      {
        title: "경량화 설계",
        description: "휴대형(Person-Borne) 맨팩 운용 가능.",
      },
      {
        title: "고출력 RF 운용",
        description: "라디오헤드당 최대 20W RF 출력 지원.",
      },
      {
        title: "실시간 운용 지원",
        description: "고속 네트워크 기반 실시간 데이터 처리.",
      },
      {
        title: "확장 및 연동성",
        description: "C2 및 타 전술 체계와 통합 운용 가능.",
      },
    ],
  },

  specifications: {
    title: "제원",
    note: "※ 시스템 구성 및 탑재 모듈에 따라 변경 가능",
    general: {
      title: "일반",
      items: [
        { label: "운용 형태", value: "휴대형(Person-Borne)" },
        { label: "시스템 유형", value: "다기능 CEMA 플랫폼" },
        { label: "크기", value: "< 300 × 300 × 100 mm" },
        { label: "중량", value: "< 10 kg (Payload 제외)" },
        { label: "전원 입력", value: "18–36 V DC (배터리 / 차량 전원 옵션)" },
        { label: "전력 소비", value: "탑재 애플리케이션 및 Payload 의존" },
      ],
    },
    rf: {
      title: "RF / 전자전 성능",
      items: [
        { label: "RF 구성", value: "2 × Radiohead" },
        { label: "RF 분배 대역", value: "20 MHz – 6 GHz" },
        { label: "RF 대역폭", value: "2 × 100 MHz (SDR Payload 기준)" },
        { label: "출력 증폭", value: "2 × 20 W" },
        { label: "안테나 인터페이스", value: "N-Type" },
      ],
    },
    processing: {
      title: "처리·네트워크",
      items: [
        { label: "Payload 슬롯", value: "2 × SOSA™ aligned 3U OpenVPX" },
        { label: "네트워크", value: "최대 40 GbE" },
        { label: "SDR", value: "사전 검증된 SDR 또는 고객 OpenCPI 애플리케이션 지원" },
      ],
    },
    pnt: {
      title: "PNT / 센서",
      items: [
        { label: "위치·시간", value: "통합 GNSS" },
        { label: "옵션", value: "CSAC, 관성항법장치(INU)" },
      ],
    },
    environmental: {
      title: "환경·규격",
      items: [
        { label: "운용 온도", value: "-32 ~ +55 ℃" },
        { label: "비운용 온도", value: "-40 ~ +70 ℃" },
        { label: "냉각", value: "Conduction Cooled Payload / 강제 공랭" },
        { label: "규격 정렬", value: "VITA 46.0 / 65.0 / 67.3, STICS" },
        { label: "군 표준", value: "AECTP 300 / 400 / 500 (환경·기계·EMC)" },
      ],
    },
  },

  contact: {
    text: "EM-Vis Deceive®에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type DeceiveStrings = typeof deceive
