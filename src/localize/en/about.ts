export const about = {
  hero: {
    sectionLabel: "About EBT",
    title1: "Your Trusted Partner in",
    title2: "Advanced Defense Technologies",
    description1:
      "At EBT Co., Ltd., we pride ourselves on being at the forefront of technology and innovation in the fields of electronic warfare, biological warfare, and chemical warfare defense. Our mission is to provide cutting-edge solutions that empower our clients to safeguard their people and assets from emerging threats in an ever-evolving world.",
    description2:
      "From government agencies and critical infrastructure operators to commercial businesses and individuals, we offer a diverse range of products and services tailored to meet your specific requirements and operational environments.",
  },

  whyChoose: {
    sectionLabel: "Why Choose EBT",
    title: "Empowering Innovations",
    description:
      "We are dedicated to pushing the boundaries of technological advancement. Our team of experts is constantly developing innovative solutions that give you the upper hand in the face of evolving threats.",
    cards: [
      {
        title: "Comprehensive Solutions",
        description:
          "We understand that every client has unique needs. We offer a diverse range of products and services tailored to your specific requirements across government, critical infrastructure, and commercial domains.",
      },
      {
        title: "Proven Excellence",
        description:
          "With a strong track record of success, we have a history of developing and delivering cutting-edge technologies that exceed expectations, building long-term trust with our partners.",
      },
    ],
  },

  vision: {
    sectionLabel: "Vision",
    title: "Creating a world where people can live and work safely and confidently",
    description:
      "EBT's vision is to create a world where people can live and work safely and confidently, free from the fear of environmental and biological threats. We focus on delivering technologies and systems that continuously monitor, detect, and respond to invisible risks in the air and environment around us.",
  },

  mission: {
    sectionLabel: "Mission",
    title: "Protecting people's health and safety",
    description:
      "EBT's mission is to protect people's health and safety. We strive to safeguard people from air pollution, viral infections, and other harmful environmental factors. Based on these core technologies, we provide solutions across various fields, including indoor air quality improvement, virus infection prevention, and protection from other hazardous conditions.",
  },

  capabilities: {
    sectionLabel: "Core Capabilities",
    title: "What We Deliver",
    description:
      "We design, integrate, and support mission-ready solutions across electronic warfare, CBRN, and counter-UAS domains. Our focus is on turning complex sensing and decision workflows into clear, reliable capabilities in the field.",
    items: [
      {
        title: "Electronic Warfare",
        description: "Systems for sensing, direction finding, and jamming across complex RF environments.",
      },
      {
        title: "Counter-UAS",
        description: "Detection, classification, and defeat of emerging drone threats in real time.",
      },
      {
        title: "CBRN Monitoring",
        description: "Early warning and continuous monitoring for chemical and biological hazards.",
      },
      {
        title: "Systems Integration",
        description: "End-to-end integration with existing platforms, sensors, and C2 networks.",
      },
      {
        title: "Training & Support",
        description: "Deployment support, operator training, and lifecycle services in the field.",
      },
      {
        title: "Data & Analytics",
        description: "Tools that turn sensor data into actionable insight for better decisions.",
      },
    ],
  },
} as const

export type AboutStrings = typeof about
