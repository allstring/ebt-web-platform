export const contact = {
  hero: {
    sectionLabel: "Contact & Career",
    title: "Get in touch",
    description: "Connect with our team for inquiries, partnerships, or career opportunities.",
  },

  location: {
    sectionLabel: "Location",
    title: "Find Us",
    description: "Visit our office or get directions to our location.",
    companyName: "EBT Corporation",
    addressLabel: "Address",
    address: "#504, 54, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea",
    phoneLabel: "Phone",
    phone: "+82-31-721-6375",
    emailLabel: "Email",
    emailDescription: "General Inquiry - Questions about EBTech and our capabilities",
    email: "info@ebtech.kr",
  },

  career: {
    sectionLabel: "Career",
    title: "Join EBT",
    description: "We are waiting for the talent to grow into a global leader.",
    applicationDocs: "Application Documents",
    download: "Download",
    docs: [
      {
        title: "Application Form (HWP)",
        description: "Korean HWP file",
      },
      {
        title: "Application Form (WORD)",
        description: "Word file",
      },
      {
        title: "Application Form (PDF)",
        description: "PDF file",
      },
    ],
    resumeText: "Send your resume to",
  },
} as const

export type ContactStrings = typeof contact
