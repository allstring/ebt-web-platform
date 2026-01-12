export const rnd = {
  hero: {
    sectionLabel: "R&D",
    title1: "Technology Internalization for",
    title2: "Operational Advantage",
    description:
      "EBTech continuously invests in research and development to reduce external dependencies and enhance system performance through indigenous development of core defense technologies. Our professional research team is working hard to develop innovative solutions by applying the latest technologies.",
    imageAlt: "R&D Technology Development",
  },

  coreTechnologies: {
    sectionLabel: "Core Technologies",
    title: "Technical Domains",
    description:
      "EBTech performs professional research in core areas of defense technology. We continuously strive to achieve the highest level of performance in each technical domain.",
    items: [
      {
        name: "Signal Processing",
        description:
          "Advanced algorithms for real-time signal detection, classification, and analysis. We are continuously researching precision signal processing technologies for complex electromagnetic environments.",
      },
      {
        name: "RF & Sensor Technology",
        description:
          "Development of proprietary RF systems and multi-modal sensor fusion technologies. We are continuously researching to achieve comprehensive situational awareness capabilities across diverse environments.",
      },
      {
        name: "Data Analysis & Control",
        description:
          "Machine learning-enhanced data fusion and automated command and control systems. We are researching professional analytical technologies to support rapid decision-making.",
      },
    ],
  },

  researchAreas: {
    sectionLabel: "Research Areas",
    title: "Research Focus",
    description:
      "We perform professional research across various defense technology fields. We are working hard to develop innovative solutions by applying the latest technologies in each area.",
    items: [
      {
        title: "Electronic Warfare Systems",
        description:
          "We are researching core technologies of electronic warfare systems including signal detection, direction finding, and jamming. We are continuously developing to achieve excellent performance in complex RF environments.",
      },
      {
        title: "Counter-UAS Technology",
        description:
          "We are researching real-time detection, classification, and response technologies for drone threats. We are developing professional technologies to counter various threats from commercial drones to FPV drones.",
      },
      {
        title: "CBRN Detection",
        description:
          "We are researching high-sensitivity detection and monitoring technologies for chemical, biological, and radiological threats. We are developing professional systems for early warning and continuous monitoring.",
      },
      {
        title: "System Integration",
        description:
          "We are researching integration technologies with existing platforms, sensors, and C2 networks. We perform professional engineering to ensure seamless system integration.",
      },
    ],
  },

  developmentProcess: {
    sectionLabel: "Development Process",
    title: "From Concept to Field",
    description:
      "We deliver high-quality solutions through a professional development process from concept to field deployment. We strive to achieve the best results through rigorous validation and professional approach at each stage.",
    items: [
      {
        phase: "Requirement Analysis",
        description:
          "Operational needs assessment and technical specification development. We perform professional analysis with deep understanding of customers' actual operational environments.",
      },
      {
        phase: "Prototype",
        description:
          "Rapid prototyping with iterative design refinement. We are working hard to develop innovative solutions by applying the latest technologies.",
      },
      {
        phase: "Field Test",
        description:
          "Rigorous validation in realistic operational conditions. We perform professional testing to ensure reliability in real-world field environments.",
      },
      {
        phase: "Deployment",
        description:
          "System integration, training, and ongoing support. We provide professional support services to ensure successful customer operations.",
      },
    ],
  },

  team: {
    sectionLabel: "R&D Team",
    title: "Expert Research Team",
    description1:
      "EBTech has a professional research team composed of engineers and researchers with deep expertise in defense technology. We continuously learn and research to understand the latest technology trends and develop innovative solutions.",
    description2:
      "Experts from each field collaborate to solve complex technical challenges. We are working hard to provide high-quality products and services based on professional knowledge and experience.",
    imageAlt: "Expert Research Team",
  },

  commitment: {
    sectionLabel: "Our Commitment",
    title: "Commitment to R&D",
    description1:
      "EBTech strives to apply the latest technologies and provide innovative solutions through continuous research and development. We develop high-quality products and services through our professional research team and state-of-the-art research facilities, and we are working hard to support successful customer operations.",
    description2:
      "We continuously conduct research to respond to new threats and adapt to changes in operational environments. We are doing our best to provide the highest value to customers through professional approaches and innovative technologies.",
  },
} as const

export type RndStrings = typeof rnd
