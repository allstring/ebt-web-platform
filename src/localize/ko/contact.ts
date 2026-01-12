export const contact = {
  hero: {
    sectionLabel: "문의 및 채용",
    title: "동행",
    description: "제품 문의, 파트너십 제안, 채용 등 여러분의 연락을 기다립니다.",
  },

  location: {
    sectionLabel: "오시는 길",
    title: "위치 안내",
    description: "사무실 방문을 위한 위치 및 상세 정보를 확인하실 수 있습니다.",
    companyName: "(주)이비티 (EBT Corporation)",
    addressLabel: "주소",
    address: "경기도 성남시 수정구 창업로 54, 504호 (시흥동, 판교 제2테크노밸리 기업성장센터)",
    phoneLabel: "전화",
    phone: "031-721-6375",
    emailLabel: "이메일",
    emailDescription: "일반 문의 - 제품, 기술 및 기타 궁금한 사항",
    email: "info@ebtech.kr",
  },

  career: {
    sectionLabel: "인재 채용",
    title: "EBT와 함께 성장할 인재를 찾습니다",
    description: "글로벌 리더로 함께 도약할 열정적인 인재들의 지원을 기다리고 있습니다.",
    applicationDocs: "입사 지원 서류",
    download: "다운로드",
    docs: [
      {
        title: "입사 지원서 (HWP)",
        description: "한글 파일 양식",
      },
      {
        title: "입사 지원서 (WORD)",
        description: "워드 파일 양식",
      },
      {
        title: "입사 지원서 (PDF)",
        description: "PDF 파일 양식",
      },
    ],
    resumeText: "지원서 접수처",
  },
} as const

export type ContactStrings = typeof contact